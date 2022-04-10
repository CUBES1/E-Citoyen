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

        // GET: api/UserInteraction/Like/5/4
        [HttpGet("{type}/{usrId}/{rscId}")]
        public async Task<ActionResult<Boolean>> GetFavorite(string type, string usrId, Guid rscId)
        {
            UserInteraction.UserInteractionType uiType = UserInteraction.StringToUserInteractionType(type);
            return uiType == UserInteraction.UserInteractionType.None ? BadRequest($"UserInteraction specified type \"{type}\" does not exist")
                : await _context.UserInteraction.AnyAsync(ui => ui.UserId == usrId && ui.RessourceId == rscId && ui.Type == uiType);
        }

        // GET: api/UserInteraction/Like/usr/5
        [HttpGet("{type}/usr/{usrId}")]
        public async Task<ActionResult<IEnumerable<UserInteraction>>> GetUserFavorites(string type, string usrId)
        {
            // On check si le type spécifié existe
            UserInteraction.UserInteractionType uiType = UserInteraction.StringToUserInteractionType(type);
            if (uiType == UserInteraction.UserInteractionType.None)
                return BadRequest();

            var query = await _context.UserInteraction
                .Include(ui => ui.User)
                .Include(ui => ui.Ressource)
                .Where(ui => ui.User.Id == usrId && ui.Type == uiType)
                .OrderByDescending(ui => ui.CreatedAt)
                .ToListAsync();

            return query;
        }

        // GET: api/UserInteraction/Like/rsc/5
        [HttpGet("{type}/rsc/{rscId}")]
        public async Task<ActionResult<IEnumerable<UserInteraction>>> GetRessourceFavorites(string type, Guid rscId)
        {
            // On check si le type spécifié existe
            UserInteraction.UserInteractionType uiType = UserInteraction.StringToUserInteractionType(type);
            if (uiType == UserInteraction.UserInteractionType.None)
                return BadRequest();

            var query = await _context.UserInteraction
                .Include(ui => ui.User)
                .Include(ui => ui.Ressource)
                .Where(ui => ui.Ressource.Id == rscId && ui.Type == uiType)
                .OrderByDescending(ui => ui.CreatedAt)
                .ToListAsync();

            return query;
        }

        // POST: api/UserInteraction/Like
        [HttpPost("{type}")]
        public async Task<ActionResult<UserInteraction>> PostFavorite(string type, UserInteraction userInteraction)
        {
            // On check si le type spécifié existe
            if ((userInteraction.Type = UserInteraction.StringToUserInteractionType(type)) ==
                UserInteraction.UserInteractionType.None)
                return BadRequest();

            _context.UserInteraction.Add(userInteraction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFavorite",
                new {userId = userInteraction.UserId, ressourceId = userInteraction.RessourceId}, userInteraction);
        }

        // DELETE: api/UserInteraction/5/4
        [HttpDelete("{type}/{usrId}/{rscId}")]
        public async Task<IActionResult> DeleteUserInteraction(string type, string usrId, Guid rscId)
        {
            // On check si le type spécifié existe
            UserInteraction.UserInteractionType uiType = UserInteraction.StringToUserInteractionType(type);
            if (uiType == UserInteraction.UserInteractionType.None)
                return BadRequest();

            var userInteraction = await _context.UserInteraction.FindAsync(usrId, rscId, uiType);

            if (userInteraction == null) return NotFound();

            _context.UserInteraction.Remove(userInteraction);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}