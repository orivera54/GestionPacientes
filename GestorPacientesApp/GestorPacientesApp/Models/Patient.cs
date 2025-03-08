using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestorPacientesApp.Models
{
    [Table("patients", Schema = "public")]
    public class Patient
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("name")]
        public string Name { get; set; } = string.Empty;

        [Column("email")]
        public string Email { get; set; } = string.Empty;

        [Column("contactnumber")]
        public string ContactNumber { get; set; } = string.Empty;

        [Column("disease")]
        public string Disease { get; set; } = string.Empty;

        // Relación uno-a-muchos con seguimiento
        public ICollection<Followup>? Followups { get; set; }
    }
}
