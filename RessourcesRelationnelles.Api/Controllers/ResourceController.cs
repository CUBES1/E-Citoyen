using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RessourcesRelationnelles.Api.Data;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResourceController : ControllerBase
{
    private readonly AppDbContext _context;

    public ResourceController(AppDbContext context)
    {
        _context = context;
    }
    
    // GET: api/Resource
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Resource>>> GetResources()
        => await _context.Resources
            .Include(a => a.User)
            .OrderByDescending(b => b.ReleaseDate)
            .Where(b => b.Visibility == Visibility.Public)
            .ToListAsync();

    // GET: api/Resource/usr/5
    [HttpGet("usr/{usrId}")]
    public async Task<ActionResult<IEnumerable<Resource>>> GetUserResources(string usrId)
        => await _context.Resources
            .Include(r => r.User)
            .Where(r => r.UserId == usrId)
            .OrderByDescending(r => r.ReleaseDate)
            .ToListAsync();
    
    // GET: api/Resource/5
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<Resource>> GetResource(Guid id)
    {
        var resource = await _context.Resources
            .Include(a=>a.User)
            .SingleAsync(a => a.Id == id);

        if (resource == null)
        {
            return NotFound();
        }

        return resource;
    }
    
    // GET: api/Resource/{Firstname}
    [HttpGet(("{searchString}"))]
    public IQueryable<Resource> Search(string searchString)
        => _context.Resources
            .Where(o => o.Title.Contains(searchString));

    // PUT: api/Resource/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut]
    public async Task<IActionResult> PutResource(Resource resource)
    {
        if (!await _context.Resources.AnyAsync(r => r.Id == resource.Id))
            return NotFound($"No Resource with id {resource.Id}");
        
        if (!await _context.ResourceCategories.AnyAsync(rc => rc.Id == resource.ResourceCategoryId))
            return BadRequest($"No ResourceCategory with id {resource.ResourceCategoryId}");
        
        resource.UpdatedAt = DateTime.Now;
        _context.Entry(resource).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return Ok(resource);
    }

    // POST: api/Resource
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Resource>> PostResource(Resource resource)
    {
        if (!await _context.ResourceCategories.AnyAsync(rc => rc.Id == resource.ResourceCategoryId))
            return BadRequest($"No ResourceCategory with id {resource.ResourceCategoryId}");

        resource.ReleaseDate = DateTime.Now;
        _context.Resources.Add(resource);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetResource", new { id = resource.Id }, resource);
    }

    // DELETE: api/Resource/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteResource(Guid id)
    {
        var resource = await _context.Resources.FindAsync(id);
        if (resource == null)
        {
            return NotFound();
        }

        _context.Resources.Remove(resource);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ResourceExists(Guid id)
        => _context.Resources.Any(e => e.Id == id);
}
