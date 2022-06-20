using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RessourcesRelationnelles.Api.Data;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResourceCategoryController : ControllerBase
{
    private readonly AppDbContext _context;

    public ResourceCategoryController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/ResourceCategory
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ResourceCategory>>> GetResourceCategory()
        => await _context.ResourceCategories
            .OrderBy(rc => rc.Label)
            .ToListAsync();
    
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<ResourceCategory?>> GetResourceCategory(Guid id)
        => await _context.ResourceCategories.AnyAsync(rc => rc.Id == id) ?
            await _context.ResourceCategories
                .FindAsync(id) : NoContent();
            
    
    // GET: api/ResourceCategory
    [HttpGet (("{searchString}"))]
    public IQueryable<ResourceCategory> Search(string searchString)
        => _context.ResourceCategories
            .Where(o => o.Label.Contains(searchString));
    
    [HttpPost]
    public async Task<ActionResult<ResourceCategory>> PostResourceCategory(ResourceCategory resourceCategory)
    {
        _context.ResourceCategories.Add(resourceCategory);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            "GetResourceCategory",
            new { id = resourceCategory.Id },
            resourceCategory);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<ResourceCategory>> PutResourceCategory(Guid id, ResourceCategory resourceCategory)
    {
        if (id != resourceCategory.Id)
            return BadRequest();

        _context.Entry(resourceCategory).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await _context.ResourceCategories.AnyAsync(rc => rc.Id == id))
                return NotFound();
            throw;
        }

        return Ok(resourceCategory);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteResourceCategory(Guid id)
    {
        var resourceCategory = await _context.ResourceCategories.FindAsync(id);
        if (resourceCategory is null)
            return NotFound();

        _context.ResourceCategories.Remove(resourceCategory);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}