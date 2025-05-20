using Microsoft.AspNetCore.Mvc;
using SmartEvent.RegistrationService.Models;
using SmartEvent.RegistrationService.Services;

namespace SmartEvent.RegistrationService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RegistrationsController : ControllerBase
{
    private readonly IRegistrationService _service;

    public RegistrationsController(IRegistrationService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<IActionResult> Register([FromBody] Registration registration)
    {
        var success = await _service.RegisterAsync(registration);
        if (!success)
            return BadRequest("Déjà inscrit à cet événement.");

        return Ok("Inscription réussie !");
    }
}
