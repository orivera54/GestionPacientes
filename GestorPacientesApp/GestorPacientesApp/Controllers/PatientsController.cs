using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GestorPacientesApp.Data;
using GestorPacientesApp.Models;
using GestorPacientesApp.Services;

namespace GestorPacientesApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly RandomUserService _randomUserService;

        public PatientsController(ApplicationDbContext context, RandomUserService randomUserService)
        {
            _context = context;
            _randomUserService = randomUserService;
        }

        // Endpoint para obtener la lista de pacientes: GET api/patients
        [HttpGet]
        public async Task<IActionResult> GetPatients()
        {
            var patients = await _context.Patients.ToListAsync();
            return Ok(patients);
        }

        // Endpoint para registrar un paciente: POST api/patients
        [HttpPost]
        public async Task<IActionResult> CreatePatient([FromBody] Patient patient)
        {
            // Validación externa (por ejemplo, comparación de email)
            bool existe = await _randomUserService.ValidatePatient(patient);
            if (existe)
            {
                return BadRequest("El paciente con información similar ya existe.");
            }

            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPatients), new { id = patient.Id }, patient);
        }
    }
}
