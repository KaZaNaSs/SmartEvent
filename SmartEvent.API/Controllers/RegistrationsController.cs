using Microsoft.AspNetCore.Mvc;
using SmartEvent.Core.Interfaces;
using SmartEvent.Core.Models;

namespace SmartEvent.API.Controllers;

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
    public async Task<IActionResult> Register(Registration registration)
    {
        var result = await _service.RegisterAsync(registration);
        if (result == null) return BadRequest("Already registered");
        return Ok(result);
    }

    [HttpGet("{eventId}")]
    public async Task<IActionResult> GetRegistrations(int eventId) =>
        Ok(await _service.GetByEventIdAsync(eventId));
}
