using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace RessourcesRelationnelles.Front.Controllers;

public enum Roles
{
    SuperAdmin,
    Admin,
    Moderator,
    Basic
}
    
public class RoleController : Controller
{
    readonly RoleManager<IdentityRole> _roleManager;
    public RoleController(RoleManager<IdentityRole> roleManager)
    {
        _roleManager = roleManager;
    }
        
    //[Authorize(Roles = "Admin")]
    public IActionResult Index()
    {
        var roles = _roleManager.Roles.ToList();
        return View(roles);
    }
    //[Authorize(Roles = "Admin")]
    public IActionResult Create()
    {
        return View(new IdentityRole());
    }
        
    //[Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<IActionResult> Create([Required]string name)
    {
        if (ModelState.IsValid)
        {
            IdentityResult result = await _roleManager.CreateAsync(new IdentityRole(name));
            if (result.Succeeded)
                return RedirectToAction("Index");
        }
        return View(name);
    }
        
    [HttpPost]
    public async Task<IActionResult> Delete(string id)
    {
        IdentityRole role = await _roleManager.FindByIdAsync(id);
        if (role != null)
        {
            IdentityResult result = await _roleManager.DeleteAsync(role);
            if (result.Succeeded)
                return RedirectToAction("Index");
        }
        else
            ModelState.AddModelError("", "No role found");
        return View("Index", _roleManager.Roles);
    }
}