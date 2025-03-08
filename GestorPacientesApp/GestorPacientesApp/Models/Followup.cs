using System.ComponentModel.DataAnnotations.Schema;


namespace GestorPacientesApp.Models
{
    [Table("followups", Schema = "public")]
    public class Followup
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("patientid")]
        public int PatientId { get; set; }

        [Column("note")]
        public string Note { get; set; } = string.Empty;

        [Column("date")]
        public DateTime Date { get; set; } = DateTime.UtcNow;

        // Propiedad de navegación
        public Patient? Patient { get; set; }
    }
}
