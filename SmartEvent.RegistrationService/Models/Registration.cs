namespace SmartEvent.RegistrationService.Models;

public class Registration
{
    public int Id { get; set; }
    public int EventId { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}
