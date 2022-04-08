using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ASP.NETCoreWebApplication.Data;
using ASP.NETCoreWebApplication.Models;
using Humanizer;
using System.Linq;
using System.Runtime.Versioning;

namespace ASP.NETCoreWebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RessourceController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RessourceController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Ressource
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ressource>>> GetRessources()
        {
            return await _context.Ressources.Include(a=>a.User).OrderByDescending(b => b.ReleaseDate).ToListAsync();
        }

        // GET: api/Ressource/usr/5
        [HttpGet("usr/{usrId}")]
        public async Task<ActionResult<IEnumerable<Ressource>>> GetUserRessources(string usrId)
        {
            var query = await _context.Ressources
                .Include(r => r.User)
                .Where(r => r.UserId == usrId)
                .OrderByDescending(r => r.ReleaseDate)
                .ToListAsync();

            return query;
        }
        
        // GET: api/Ressource/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ressource>> GetRessource(Guid id)
        {
            var ressource = await _context.Ressources.Include(a=>a.User).SingleAsync(a => a.Id == id);

            if (ressource == null)
            {
                return NotFound();
            }

            return ressource;
        }

        // PUT: api/Ressource/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutRessource(Ressource ressource)
        {
            if (!await _context.Ressources.AnyAsync(r => r.Id == ressource.Id))
                return NotFound($"No Ressource with id {ressource.Id}");
            
            if (!await _context.ResourceCategories.AnyAsync(rc => rc.Id == ressource.ResourceCategoryId))
                return BadRequest($"No ResourceCategory with id {ressource.ResourceCategoryId}");
            
            ressource.UpdatedAt = DateTime.Now;
            _context.Entry(ressource).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/Ressource
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ressource>> PostRessource(Ressource ressource)
        {
            if (!await _context.ResourceCategories.AnyAsync(rc => rc.Id == ressource.ResourceCategoryId))
                return BadRequest($"No ResourceCategory with id {ressource.ResourceCategoryId}");

            ressource.ReleaseDate = DateTime.Now;
            _context.Ressources.Add(ressource);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRessource", new { id = ressource.Id }, ressource);
        }

        // DELETE: api/Ressource/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRessource(Guid id)
        {
            var ressource = await _context.Ressources.FindAsync(id);
            if (ressource == null)
            {
                return NotFound();
            }

            _context.Ressources.Remove(ressource);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RessourceExists(Guid id)
        {
            return _context.Ressources.Any(e => e.Id == id);
        }
    }
}
