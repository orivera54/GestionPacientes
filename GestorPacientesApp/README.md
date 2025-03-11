# Instrucciones para Instalar y Configurar el Backend en .NET C# MVC

## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes antes de comenzar:
- [Visual Studio](https://visualstudio.microsoft.com/) (preferiblemente la versión más reciente)
- [.NET SDK](https://dotnet.microsoft.com/download)

## Clonar el Repositorio

Primero, clona el repositorio del proyecto desde GitHub:


https://github.com/orivera54/ge.git](https://github.com/orivera54/GestionPacientes.git

Navega al directorio del proyecto:


cd GestionPacientes

## Configurar la Base de Datos

Asegúrate de tener una base de datos configurada. Puedes usar SQL Server o cualquier otra base de datos compatible. Actualiza el archivo appsettings.json con tu cadena de conexión a la base de datos:


{
  "ConnectionStrings": {
    "DefaultConnection": "Server=tu-servidor;Database=tu-base-de-datos;User Id=tu-usuario;Password=tu-contraseña;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*"
}

## Ejecutar la Aplicación
Abre el proyecto en Visual Studio y selecciona la configuración de depuración adecuada. Luego, ejecuta la aplicación presionando F5 o el botón de "Iniciar Depuración".

También puedes ejecutar la aplicación desde la línea de comandos:


dotnet run


## Usar Swagger para Probar los Servicios
Este proyecto incluye Swagger para facilitar la prueba de los servicios. Para acceder a la interfaz de Swagger, navega a la siguiente URL en tu navegador web:

http://localhost:5000/swagger    

El puerto puede diferir dependiendo de la configuración de la aplicación


Desde aquí, puedes ver la documentación de los endpoints disponibles y probarlos directamente desde la interfaz.

¡Listo!
Con estos pasos, deberías tener tu backend en .NET C# MVC configurado y listo para usar con Swagger para probar los servicios. Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarme.



