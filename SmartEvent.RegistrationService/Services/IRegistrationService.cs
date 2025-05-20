using SmartEvent.RegistrationService.Models;

namespace SmartEvent.RegistrationService.Services;

public interface IRegistrationService
{
    Task<bool> RegisterAsync(Registration registration);
}