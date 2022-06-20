using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RessourcesRelationnelles.Api.Data;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PublicationController : ControllerBase
{
private readonly AppDbContext _context;

    public PublicationController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/Publication
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Publication>>> GetPublications()
    {
        return await _context.Publications
            .Include(a=>a.User)
            .OrderByDescending(b => b.ReleaseDate)
            .ToListAsync();
    }

    // GET: api/Publication/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Publication>> GetPublication(Guid id)
    {
        var publication = await _context.Publications
            .Include(a=>a.User)
            .SingleAsync(a => a.Id == id);

        if (publication == null)
        {
            return NotFound();
        }

        return publication;
    }

    // PUT: api/Publication/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut]
    public async Task<ActionResult> PutPublication(Publication publication)
    {
        if (!await _context.Publications.AnyAsync(p => p.Id == publication.Id))
            return NotFound($"No Publication with id {publication.Id}");

        if (!await _context.ResourceCategories.AnyAsync(rc => rc.Id == publication.ResourceCategoryId))
            return BadRequest($"No ResourceCategory with id {publication.ResourceCategoryId}");

        publication.UpdatedAt = DateTime.Now;
        _context.Entry(publication).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return Ok(publication);
    }

    // POST: api/Publication
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Publication>> PostPublication(Publication publication)
    {
        if (!await _context.ResourceCategories.AnyAsync(rc => rc.Id == publication.ResourceCategoryId))
            return BadRequest($"No ResourceCategory with id {publication.ResourceCategoryId}");
        
        publication.ReleaseDate = DateTime.Now;
        _context.Publications.Add(publication);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetPublications", new { id = publication.Id }, publication);
    }

    // DELETE: api/Publication/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePublication(Guid id)
    {
        var publication = await _context.Publications
            .FindAsync(id);
        
        if (publication == null)
        {
            return NotFound();
        }

        _context.Resources.Remove(publication);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}