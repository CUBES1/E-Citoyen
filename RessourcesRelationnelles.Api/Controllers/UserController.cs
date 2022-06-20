using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using RessourcesRelationnelles.Api.Models;
using RessourcesRelationnelles.Api.Data;

namespace RessourcesRelationnelles.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserController(AppDbContext context)
    {
        _context = context;
    }
    
    // GET: api/User
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetUsers()
        => await _context.Users
            .ToListAsync();

    
    // GET: api/User/5
    [HttpGet("{id}", Name = "Get")]
    public async Task<ActionResult<ApplicationUser>> Get(string id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            return NotFound();
        }

        return user;
    }

    // POST: api/User/authenticate
    [AllowAnonymous]
    [HttpPost("authenticate")]
    public IActionResult Authenticate([FromBody]AuthenticateModel model)
    {
        ApplicationUser Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = _context.Users.SingleOrDefault(x => x.UserName == username);

            // check if username exists
            if (user == null)
                return null;

            // check if password is correct

            // authentication successful
            return user;
        }
        var user = Authenticate(model.Username, model.Password);

        if (user == null)
            return BadRequest(new { message = "Username or password is incorrect" });

        var tokenHandler = new JwtSecurityTokenHandler();
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Name, user.Id.ToString())
            }),
            Expires = DateTime.UtcNow.AddDays(7)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        var tokenString = tokenHandler.WriteToken(token);

        // return basic user info and authentication token
        return Ok(new
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Country = user.Country,
            Token = tokenString
        });
    }
}
