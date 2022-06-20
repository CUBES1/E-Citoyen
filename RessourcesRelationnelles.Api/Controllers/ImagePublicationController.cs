using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RessourcesRelationnelles.Api.Data;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImagePublicationController : ControllerBase
{
    private readonly AppDbContext _context;

    public ImagePublicationController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ImagePublication>>> GetImagePublications()
        => await _context.ImagePublications
            .Include(ip => ip.User)
            .Include(ip => ip.ResourceCategory)
            .OrderByDescending(ip => ip.ReleaseDate)
            .ToListAsync();

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<ImagePublication>> GetImagePublication(Guid id)
        => (ActionResult<ImagePublication>) await _context.ImagePublications
            .Include(ip => ip.User)
            .Include(ip => ip.ResourceCategory)
            .SingleAsync(ip => ip.Id == id) ?? NotFound($"No ImagePost with id {id}");

    [HttpPost]
    public async Task<ActionResult<ImagePublication>> PostImagePublication(ImagePublication imagePublication)
    {
        if(!await _context.ResourceCategories.AnyAsync(rc => rc.Id == imagePublication.ResourceCategoryId))
            return BadRequest($"No ResourceCategory with id {imagePublication.ResourceCategoryId}");

        imagePublication.ReleaseDate = DateTime.Now;
        _context.ImagePublications.Add(imagePublication);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetImagePublication", new { id = imagePublication.Id }, imagePublication);
    }

    [HttpPut]
    public async Task<ActionResult> PutImagePublication(ImagePublication imagePublication)
    {
        if (!await _context.ImagePublications.AnyAsync(ip => ip.Id == imagePublication.Id))
            return NotFound($"No ImagePublication with id {imagePublication.Id}");

        if (!await _context.ResourceCategories.AnyAsync(rc => rc.Id == imagePublication.ResourceCategoryId))
            return BadRequest($"No ResourceCategory with id {imagePublication.ResourceCategoryId}");

        imagePublication.UpdatedAt = DateTime.Now;
        _context.Entry(imagePublication).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        
        return Ok(imagePublication);
    }

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult> DeleteImagePublication(Guid id)
    {
        if (!await _context.ImagePublications.AnyAsync(ip => ip.Id == id))
            return NotFound($"No ImagePublication with id {id}");

        _context.ImagePublications.Remove(await _context.ImagePublications.FindAsync(id));
        await _context.SaveChangesAsync();
        
        return NoContent();
    }
}