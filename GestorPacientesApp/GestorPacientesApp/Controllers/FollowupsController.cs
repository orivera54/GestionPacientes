using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GestorPacientesApp.Data;
using GestorPacientesApp.Models;
using GestorPacientesApp.Services;

namespace GestorPacientesApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FollowupsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public FollowupsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Obtener el historial de seguimiento de un paciente:
        // GET api/followups/{patientId}
        [HttpGet("{patientId}")]
        public async Task<IActionResult> GetFollowups(int patientId)
        {
            var followups = await _context.Followups
                .Where(f => f.PatientId == patientId)
                .OrderBy(f => f.Date)
                .ToListAsync();

            return Ok(followups);
        }

        // Registrar un seguimiento: POST api/followups
        [HttpPost]
        public async Task<IActionResult> AddFollowup([FromBody] Followup followup)
        {
            // Verificar que el paciente exista
            var patient = await _context.Patients.FindAsync(followup.PatientId);
            if (patient == null)
            {
                return NotFound("Paciente no encontrado");
            }

            _context.Followups.Add(followup);
            await _context.SaveChangesAsync();
            return Ok(followup);
        }
    }
}
