using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ASP.NETCoreWebApplication.Data;
using ASP.NETCoreWebApplication.Models;

namespace ASP.NETCoreWebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DebatController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DebatController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Debat
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Debate>>> GetDebate()
        {
            return await _context.Debate.ToListAsync();
        }

        // GET: api/Debat/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Debate>> GetDebate(Guid id)
        {
            var debate = await _context.Debate.FindAsync(id);

            if (debate == null)
            {
                return NotFound();
            }

            return debate;
        }

        // PUT: api/Debat/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id:guid}")]
        public async Task<IActionResult> PutDebate(Guid id, Debate debate)
        {
            if (id != debate.Id)
            {
                return BadRequest();
            }
            
            _context.Entry(debate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DebateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        
            return NoContent();
        }

        // POST: api/Debat
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Debate>> PostDebate(Debate debate)
        {
            debate.ReleaseDate = DateTime.Now;
            _context.Debate.Add(debate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDebate", new { id = debate.Id }, debate);
        }

        // DELETE: api/Debat/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDebate(Guid id)
        {
            var debate = await _context.Debate.FindAsync(id);
            if (debate == null)
            {
                return NotFound();
            }

            _context.Debate.Remove(debate);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DebateExists(Guid id)
        {
            return _context.Debate.Any(e => e.Id == id);
        }
    }
}
