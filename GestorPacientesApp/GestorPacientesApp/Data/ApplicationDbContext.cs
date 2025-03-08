using Microsoft.EntityFrameworkCore;
using GestorPacientesApp.Models;

namespace GestorPacientesApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
          : base(options)
        { }

        public DbSet<Patient> Patients { get; set; }
        public DbSet<Followup> Followups { get; set; }
    }
}
