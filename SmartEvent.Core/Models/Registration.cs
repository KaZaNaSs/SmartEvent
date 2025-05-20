using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartEvent.Core.Models;

public class Registration
{
    public int Id { get; set; }
    public int EventId { get; set; }
    public string Email { get; set; } = null!;
}
