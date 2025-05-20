using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SmartEvent.Core.Interfaces;
using SmartEvent.Core.Models;
using SmartEvent.Data;

namespace SmartEvent.Services;

public class EventService : IEventService
{
    private readonly AppDbContext _context;

    public EventService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Event>> GetAllAsync() =>
        await _context.Events.ToListAsync();

    public async Task<Event?> GetByIdAsync(int id) =>
        await _context.Events.FindAsync(id);

    public async Task<Event> CreateAsync(Event ev)
    {
        _context.Events.Add(ev);
        await _context.SaveChangesAsync();
        return ev;
    }

    public async Task<bool> UpdateAsync(int id, Event updatedEvent)
    {
        var existing = await _context.Events.FindAsync(id);
        if (existing == null) return false;

        existing.Title = updatedEvent.Title;
        existing.Description = updatedEvent.Description;
        existing.Date = updatedEvent.Date;

        _context.Events.Update(existing);
        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var ev = await _context.Events.FindAsync(id);
        if (ev == null) return false;
        _context.Events.Remove(ev);
        await _context.SaveChangesAsync();
        return true;
    }
}
