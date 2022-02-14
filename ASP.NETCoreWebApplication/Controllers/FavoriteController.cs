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
    public class FavoriteController : Controller
    {
        private readonly ApplicationDbContext _context;
        
        public FavoriteController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        // GET: api/Favorite/5/4
        [HttpGet("{userId}/{ressourceId}")]
        public async Task<ActionResult<Favorite>> GetFavorite(Guid userId, Guid ressourceId)
        {
            var query = await _context.Favorite
                .Include(f => f.User)
                .Include(f => f.Ressource)
                .SingleAsync(f => f.UserId == userId && f.RessourceId == ressourceId);

            return query;
        }
        
        // GET: api/Favorite/u/5
        [HttpGet("u/{userId}")]
        public async Task<ActionResult<IEnumerable<Favorite>>> GetUserFavorites(Guid userId)
        {
            var query = await _context.Favorite
                .Include(f => f.User)
                .Include(f => f.Ressource)
                .Where(f => f.UserId == userId).ToListAsync();

            return query;
        }

        // GET: api/Favorite/r/5
        [HttpGet("r/{ressourceId}")]
        public async Task<ActionResult<IEnumerable<Favorite>>> GetRessourceFavorites(Guid ressourceId)
        {
            var query = await _context.Favorite
                .Include(f => f.User)
                .Include(f => f.Ressource)
                .Where(f => f.RessourceId == ressourceId).ToListAsync();

            return query;
        }
        
        
    }
}