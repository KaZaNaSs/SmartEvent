using Microsoft.AspNetCore.Mvc;
using SmartEvent.Core.Interfaces;
using SmartEvent.Core.Models;

namespace SmartEvent.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventsController : ControllerBase
{
    private readonly IEventService _service;

    public EventsController(IEventService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll() =>
        Ok(await _service.GetAllAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var ev = await _service.GetByIdAsync(id);
        if (ev == null) return NotFound();
        return Ok(ev);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Event ev) =>
        Ok(await _service.CreateAsync(ev));

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Event updatedEvent)
    {
        var success = await _service.UpdateAsync(id, updatedEvent);
        if (!success) return NotFound();
        return Ok("Événement modifié avec succès.");
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var success = await _service.DeleteAsync(id);
        if (!success) return NotFound();
        return Ok("Événement supprimé avec succès.");
    }
}
