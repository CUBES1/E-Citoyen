using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RessourcesRelationnelles.Api.Models;
using RessourcesRelationnelles.Api.Data;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RelationController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly UserManager<ApplicationUser> _userManager;

    public RelationController(AppDbContext context, UserManager<ApplicationUser> userManager)
    {
        _context = context;
        _userManager = userManager;
    }
    
    //api/Relation
    [HttpPost("{id}")]
    public async Task<ActionResult<ApplicationUser>> AddFriend(string id)
    {
        var friend = await _userManager.FindByIdAsync(id);
        var friendId = friend.Id;
        var currentUser = await _userManager.GetUserAsync(User);
        var currentUserId = currentUser.Id;
        
        var joinFriendTable = new FriendShip()
        {
            User = currentUser,
            UserId = currentUserId,
            UserFriend = friend,
            UserFriendId = friendId
        };

        if (friendId == currentUserId)
        {
            return NoContent();
        }

        if (_context.FriendShips.Any(u => u.UserFriendId == id))
        {
            return Content("L'utilisateur est déjà dans votre liste d'amis.");
        }
        
        _context.FriendShips.Add(joinFriendTable);
        currentUser.Friends.Add(joinFriendTable);

        await _context.SaveChangesAsync();
        
        return friend;
        
    }
    
    [HttpGet]
    public async Task<DbSet<FriendShip>> Friends()
    {
        var user = await _userManager.GetUserAsync(User);
        var friends = _context.FriendShips;
        return friends;
    }

    //api/Relation/{guid}
    [HttpGet("{id}")]
    public async Task<ActionResult<int>> DataFriendForUser(string id)
    {
        var user = await _context.Users.FindAsync(id);
        int nbFriend = 0;

        if (user == null)
        {
            return NotFound();
        }

        foreach (var friend in _context.FriendShips.Where(u => u.UserId == id))
        {
            nbFriend++;
        }
        
        return (nbFriend);
    }
}