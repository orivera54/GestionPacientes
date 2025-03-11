using GestorPacientesApp.Models;
using System.Net.Http.Json;

namespace GestorPacientesApp.Services
{
    public class RandomUserService
    {

        private readonly HttpClient _httpClient;

        public RandomUserService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        // Llama a Random User API y compara el email de los pacientes con el de los usuarios
        public async Task<bool> ValidatePatient(Patient patient)
        {
            // Solicitamos 5 usuarios aleatorios
            var response = await _httpClient.GetFromJsonAsync<RandomUserResponse>("https://randomuser.me/api/?results=5");

            if (response is not null && response.Results is not null)
            {
                foreach (var user in response.Results)
                {
                    if (string.Equals(user.Email, patient.Email, StringComparison.OrdinalIgnoreCase))
                    {
                        return true;
                    }
                }
            }
            return false;
        }

    }

    public class RandomUserResponse
    {
        public List<RandomUser>? Results { get; set; }
    }

    // Clase que representa cada uno de los usuarios de la respuesta
    public class RandomUser
    {
        // Propiedad anidada para el nombre
        public Name Name { get; set; } = new Name();

        // Correo electrónico del usuario
        public string Email { get; set; } = string.Empty;

        // Número de teléfono
        public string Phone { get; set; } = string.Empty;
    }

    // Clase para mapear la información del nombre, que viene dividida en first y last
    public class Name
    {
        public string First { get; set; } = string.Empty;
        public string Last { get; set; } = string.Empty;
    }
}
