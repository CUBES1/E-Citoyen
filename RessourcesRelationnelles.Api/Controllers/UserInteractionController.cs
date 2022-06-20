using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RessourcesRelationnelles.Api.Data;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserInteractionController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserInteractionController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/UserInteraction/Like/5/4
    [HttpGet("{type}/{usrId}/{rscId}")]
    public async Task<ActionResult<Boolean>> GetFavorite(string type, string usrId, Guid rscId)
    {
        UserInteractionType uiType = UserInteraction.StringToUserInteractionType(type);
        return uiType == UserInteractionType.None ? BadRequest($"UserInteraction specified type \"{type}\" does not exist")
            : await _context.UserInteractions.AnyAsync(ui => ui.UserId == usrId && ui.RessourceId == rscId && ui.Type == uiType);
    }

    // GET: api/UserInteraction/Like/usr/5
    [HttpGet("{type}/usr/{usrId}")]
    public async Task<ActionResult<IEnumerable<UserInteraction>>> GetUserFavorites(string type, string usrId)
    {
        // On check si le type spécifié existe
        UserInteractionType uiType = UserInteraction.StringToUserInteractionType(type);
        if (uiType == UserInteractionType.None)
            return BadRequest();

        return await _context.UserInteractions
            .Include(ui => ui.User)
            .Include(ui => ui.Resource)
            .Where(ui => ui.User.Id == usrId && ui.Type == uiType)
            .OrderByDescending(ui => ui.CreatedAt)
            .ToListAsync();
    }

    // GET: api/UserInteraction/Like/rsc/5
    [HttpGet("{type}/rsc/{rscId}")]
    public async Task<ActionResult<IEnumerable<UserInteraction>>> GetRessourceFavorites(string type, Guid rscId)
    {
        // On check si le type spécifié existe
        UserInteractionType uiType = UserInteraction.StringToUserInteractionType(type);
        if (uiType == UserInteractionType.None)
            return BadRequest();

        return await _context.UserInteractions
            .Include(ui => ui.User)
            .Include(ui => ui.Resource)
            .Where(ui => ui.Resource.Id == rscId && ui.Type == uiType)
            .OrderByDescending(ui => ui.CreatedAt)
            .ToListAsync();
    }

    // POST: api/UserInteraction/Like
    [HttpPost("{type}")]
    public async Task<ActionResult<UserInteraction>> PostFavorite(string type, UserInteraction userInteraction)
    {
        // On check si le type spécifié existe
        if ((userInteraction.Type = UserInteraction.StringToUserInteractionType(type)) ==
            UserInteractionType.None)
            return BadRequest();

        _context.UserInteractions.Add(userInteraction);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetFavorite",
            new {userId = userInteraction.UserId, ressourceId = userInteraction.RessourceId}, userInteraction);
    }

    // DELETE: api/UserInteraction/5/4
    [HttpDelete("{type}/{usrId}/{rscId}")]
    public async Task<IActionResult> DeleteUserInteraction(string type, string usrId, Guid rscId)
    {
        // On check si le type spécifié existe
        UserInteractionType uiType = UserInteraction.StringToUserInteractionType(type);
        if (uiType == UserInteractionType.None)
            return BadRequest();

        var userInteraction = await _context.UserInteractions.FindAsync(usrId, rscId, uiType);

        if (userInteraction == null) return NotFound();

        _context.UserInteractions.Remove(userInteraction);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}