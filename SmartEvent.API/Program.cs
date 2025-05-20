using Microsoft.EntityFrameworkCore;
using SmartEvent.Core.Interfaces;
using SmartEvent.Data;
using SmartEvent.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Ajout des services métiers
builder.Services.AddScoped<IEventService, EventService>();
builder.Services.AddScoped<IRegistrationService, RegistrationService>();

// 🔥 Ajout de CORS pour autoriser React (http://localhost:3000)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Middleware
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

// 🔥 Appliquer la politique CORS AVANT les contrôleurs
app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
