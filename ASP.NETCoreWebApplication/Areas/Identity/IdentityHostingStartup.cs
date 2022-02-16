using Microsoft.AspNetCore.Hosting;

[assembly: HostingStartup(typeof(ASP.NETCoreWebApplication.Areas.Identity.IdentityHostingStartup))]
namespace ASP.NETCoreWebApplication.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
            });
        }
    }
}