using SmartEvent.RegistrationService.Models;

namespace SmartEvent.RegistrationService.Services;

public class RegistrationService : IRegistrationService
{
    private static readonly List<Registration> _registrations = new();

    public Task<bool> RegisterAsync(Registration registration)
    {
        bool alreadyRegistered = _registrations.Any(r =>
            r.Email == registration.Email && r.EventId == registration.EventId);

        if (alreadyRegistered)
            return Task.FromResult(false);

        _registrations.Add(registration);
        return Task.FromResult(true);
    }
}
