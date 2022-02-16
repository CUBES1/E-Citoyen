using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Data;
using Microsoft.AspNetCore.Mvc;
using ASP.NETCoreWebApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserInteractionController : Controller
    {
        private readonly ApplicationDbContext _context;
        
        public UserInteractionController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        // GET: api/UserInteraction/5/4
        [HttpGet("{userId}/{ressourceId}")]
        public async Task<ActionResult<UserInteraction>> GetFavorite(string userId, Guid ressourceId)
        {
            var query = await _context.UserInteraction
                .Include(f => f.User)
                .Include(f => f.Ressource)
                .SingleAsync(f => f.User.Id == userId && f.Ressource.Id == ressourceId);

            return query;
        }
        
        // GET: api/UserInteraction/usr/5
        [HttpGet("usr/{userId}")]
        public async Task<ActionResult<IEnumerable<UserInteraction>>> GetUserFavorites(string userId)
        {
            var query = await _context.UserInteraction
                .Include(f => f.User)
                .Include(f => f.Ressource)
                .Where(f => f.User.Id == userId)
                .OrderByDescending(f => f.CreatedAt)
                .ToListAsync();

            return query;
        }

        // GET: api/UserInteraction/ressource/5
        [HttpGet("rsc/{ressourceId}")]
        public async Task<ActionResult<IEnumerable<UserInteraction>>> GetRessourceFavorites(Guid ressourceId)
        {
            var query = await _context.UserInteraction
                .Include(f => f.User)
                .Include(f => f.Ressource)
                .Where(f => f.Ressource.Id == ressourceId)
                .OrderByDescending(f => f.CreatedAt)
                .ToListAsync();

            return query;
        }
        
        // POST: api/UserInteraction
        [HttpPost]
        public async Task<ActionResult<UserInteraction>> PostFavorite(UserInteraction userInteraction)
        {
            _context.UserInteraction.Add(userInteraction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFavorite", new { userId = userInteraction.UserId, ressourceId = userInteraction.RessourceId }, userInteraction);
        }

        // DELETE: api/UserInteraction/5/4
        [HttpDelete("{userId}/{ressourceId}")]
        public async Task<IActionResult> DeleteFavorite(string userId, Guid ressourceId)
        {
            var favorite = await _context.UserInteraction.FindAsync(userId, ressourceId);
            
            if (favorite == null) return NotFound();
            
            _context.UserInteraction.Remove(favorite);
            await _context.SaveChangesAsync();
            
            return NoContent();
        }
    }
}