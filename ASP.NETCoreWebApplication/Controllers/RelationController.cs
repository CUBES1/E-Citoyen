using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using ASP.NETCoreWebApplication.Data;
using ASP.NETCoreWebApplication.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
    [ApiController]
    
    public class RelationController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public RelationController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
        
        //api/Relation
        [Microsoft.AspNetCore.Mvc.HttpPost ("{id}")]
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
                return Content("L'utilisateur est déjà dans votre liste d'amis");
            }
            
            _context.FriendShips.Add(joinFriendTable);
            currentUser.Friends.Add(joinFriendTable);

            await _context.SaveChangesAsync();
            
            return friend;
            
        }
        
        [Microsoft.AspNetCore.Mvc.HttpGet]
        public async Task<DbSet<FriendShip>> Friends()
        {
            var user = await _userManager.GetUserAsync(User);
            var friends = _context.FriendShips;
            return friends;
        }

        //api/Relation/{guid}
        [Microsoft.AspNetCore.Mvc.HttpGet("{id}")]
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
}