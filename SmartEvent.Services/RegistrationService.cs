using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SmartEvent.Core.Interfaces;
using SmartEvent.Core.Models;
using SmartEvent.Data;

namespace SmartEvent.Services;

public class RegistrationService : IRegistrationService
{
    private readonly AppDbContext _context;

    public RegistrationService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<Registration?> RegisterAsync(Registration registration)
    {
        var exists = await _context.Registrations
            .AnyAsync(r => r.EventId == registration.EventId && r.Email == registration.Email);
        if (exists) return null;

        _context.Registrations.Add(registration);
        await _context.SaveChangesAsync();
        return registration;
    }

    public async Task<IEnumerable<Registration>> GetByEventIdAsync(int eventId) =>
        await _context.Registrations.Where(r => r.EventId == eventId).ToListAsync();
}
