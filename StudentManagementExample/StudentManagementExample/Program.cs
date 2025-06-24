using Microsoft.EntityFrameworkCore;
using StudentApiMssql.Data;
using StudentApiMssql.Services;
using StudentManagementExample.Data;
using StudentManagementExample.Services;

var builder = WebApplication.CreateBuilder(args);

// Register EF Core + SQL Server
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Register custom service
builder.Services.AddScoped<StudentService>();

// Add controllers
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Swagger support
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
