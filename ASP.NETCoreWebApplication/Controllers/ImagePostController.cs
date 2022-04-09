using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Data;
using ASP.NETCoreWebApplication.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImagePostController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ImagePostController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ImagePost>>> GetImagePosts()
            => await _context.ImagePosts
                .Include(ip => ip.User)
                .Include(ip => ip.ResourceCategory)
                .OrderByDescending(ip => ip.ReleaseDate)
                .ToListAsync();

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<ImagePost>> GetImagePost(Guid id)
            => (ActionResult<ImagePost>) await _context.ImagePosts
                .Include(ip => ip.User)
                .Include(ip => ip.ResourceCategory)
                .SingleAsync(ip => ip.Id == id) ?? NotFound($"No ImagePost with id {id}");

        [HttpPost]
        public async Task<ActionResult<ImagePost>> PostImagePost(ImagePost imagePost)
        {
            if(!await _context.ResourceCategories.AnyAsync(rc => rc.Id == imagePost.ResourceCategoryId))
                return BadRequest($"No ResourceCategory with id {imagePost.ResourceCategoryId}");

            imagePost.ReleaseDate = DateTime.Now;
            _context.ImagePosts.Add(imagePost);
            await _context.SaveChangesAsync();

            return base.CreatedAtAction("GetImagePost", new { id = imagePost.Id }, imagePost);
        }

        [HttpPut]
        public async Task<ActionResult> PutImagePost(ImagePost imagePost)
        {
            if (!await _context.ImagePosts.AnyAsync(ip => ip.Id == imagePost.Id))
                return NotFound($"No ImagePost with id {imagePost.Id}");

            if (!await _context.ResourceCategories.AnyAsync(rc => rc.Id == imagePost.ResourceCategoryId))
                return BadRequest($"No ResourceCategory with id {imagePost.ResourceCategoryId}");

            imagePost.UpdatedAt = DateTime.Now;
            _context.Entry(imagePost).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            
            return NoContent();
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult> DeleteImagePost(Guid id)
        {
            if (!await _context.ImagePosts.AnyAsync(ip => ip.Id == id))
                return NotFound($"No ImagePost with id {id}");

            _context.ImagePosts.Remove(await _context.ImagePosts.FindAsync(id));
            await _context.SaveChangesAsync();
            
            return NoContent();
        }
    }
}
