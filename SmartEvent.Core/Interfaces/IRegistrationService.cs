using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SmartEvent.Core.Models;

namespace SmartEvent.Core.Interfaces;

public interface IRegistrationService
{
    Task<Registration?> RegisterAsync(Registration registration);
    Task<IEnumerable<Registration>> GetByEventIdAsync(int eventId);
}