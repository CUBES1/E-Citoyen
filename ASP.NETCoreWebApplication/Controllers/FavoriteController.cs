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
    public class FavoriteController : Controller
    {
        private readonly ApplicationDbContext _context;
        
        public FavoriteController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        // GET: api/Favorite/5/4
        [HttpGet("{userId}/{ressourceId}")]
        public async Task<ActionResult<Favorite>> GetFavorite(string userId, Guid ressourceId)
        {
            var query = await _context.Favorite
                .Include(f => f.User)
                .Include(f => f.Ressource)
                .SingleAsync(f => f.User.Id == userId && f.Ressource.Id == ressourceId);

            return query;
        }
        
        // GET: api/Favorite/user/5
        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<Favorite>>> GetUserFavorites(string userId)
        {
            var query = await _context.Favorite
                .Include(f => f.User)
                .Include(f => f.Ressource)
                .Where(f => f.User.Id == userId)
                .OrderByDescending(f => f.CreatedAt)
                .ToListAsync();

            return query;
        }

        // GET: api/Favorite/ressource/5
        [HttpGet("ressource/{ressourceId}")]
        public async Task<ActionResult<IEnumerable<Favorite>>> GetRessourceFavorites(Guid ressourceId)
        {
            var query = await _context.Favorite
                .Include(f => f.User)
                .Include(f => f.Ressource)
                .Where(f => f.Ressource.Id == ressourceId)
                .OrderByDescending(f => f.CreatedAt)
                .ToListAsync();

            return query;
        }
        
        // POST: api/Favorite
        [HttpPost]
        public async Task<ActionResult<Favorite>> PostFavorite(Favorite favorite)
        {
            _context.Favorite.Add(favorite);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFavorite", new { userId = favorite.UserId, ressourceId = favorite.RessourceId }, favorite);
        }

        // DELETE: api/Favorite/5/4
        [HttpDelete("{userId}/{ressourceId}")]
        public async Task<IActionResult> DeleteFavorite(string userId, Guid ressourceId)
        {
            var favorite = await _context.Favorite.FindAsync(userId, ressourceId);
            
            if (favorite == null) return NotFound();
            
            _context.Favorite.Remove(favorite);
            await _context.SaveChangesAsync();
            
            return NoContent();
        }
    }
}