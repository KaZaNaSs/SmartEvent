using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SmartEvent.Core.Models;

namespace SmartEvent.Core.Interfaces;

public interface IEventService
{
    Task<IEnumerable<Event>> GetAllAsync();
    Task<Event?> GetByIdAsync(int id);
    Task<Event> CreateAsync(Event ev);
    Task<bool> UpdateAsync(int id, Event updatedEvent);
    Task<bool> DeleteAsync(int id);
}
