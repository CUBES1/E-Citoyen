using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using RessourcesRelationnelles.Api.Models;
using RessourcesRelationnelles.Api.Data;
using RessourcesRelationnelles.Api.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Db
builder.Services.AddDbContext<AppDbContext>(optionsBuilder =>
{
    optionsBuilder.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

// Identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders()
    .AddDefaultUI();

builder.Services.AddIdentityServer()
    .AddApiAuthorization<ApplicationUser, AppDbContext>();

builder.Services.AddRazorPages();

builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddAuthentication()
    .AddIdentityServerJwt(); 

builder.Services
    .AddControllersWithViews()
    .AddRazorRuntimeCompilation();

builder.Services.AddSpaStaticFiles(options =>
{
    options.RootPath = "ClientApp/build";
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseSpaStaticFiles();
app.UseRouting();

app.UseCors(policyBuilder => policyBuilder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .WithHeaders("authorization", "accept", "content-type", "origin", "common"));

app.UseAuthentication();
app.UseIdentityServer();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        "default",
        "{controller}/{action=Index}/{id?}");
    endpoints.MapRazorPages();
});

app.UseSpa(spaBuilder =>
{
    spaBuilder.Options.SourcePath = "ClientApp";
    
    if (app.Environment.IsDevelopment())
        spaBuilder.UseReactDevelopmentServer("start");
});

app.Run();