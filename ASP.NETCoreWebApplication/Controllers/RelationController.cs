

using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Data;
using ASP.NETCoreWebApplication.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NETCoreWebApplication.Controllers
{
    [Route("api/[controller]")]
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
        
        [HttpPost]
        public async Task<ActionResult<ApplicationUser>> AddFriend(string id)
        {
            var friend = await _userManager.FindByIdAsync(id);
            var currentUser = await _userManager.GetUserAsync(User);
            friend.Contacts.Add(currentUser);
            currentUser.Contacts.Add(friend);
            await _userManager.UpdateAsync(currentUser);
            await _userManager.UpdateAsync(friend);
            return friend;
        }
        
        [HttpGet]
        public async Task<List<ApplicationUser>> Friends()
        {
            var user = await _userManager.GetUserAsync(this.User);
            var friends = user.Contacts;
            return friends;
        }
    }
}