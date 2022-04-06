using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Data;
using ASP.NETCoreWebApplication.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResourceCategoryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ResourceCategoryController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ResourceCategory
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ResourceCategory>>> GetResourceCategory()
            => await _context.ResourceCategories
                .OrderBy(rc => rc.Label)
                .ToListAsync();
        
        [HttpGet("{id}")]
        public async Task<ActionResult<ResourceCategory>> GetResourceCategory(Guid id)
            => await _context.ResourceCategories
                .FindAsync(id);
                
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

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResourceCategory(Guid id)
        {
            var resourceCategory = await _context.ResourceCategories.FindAsync(id);
            if (resourceCategory is { })
                return NotFound();

            _context.ResourceCategories.Remove(resourceCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}