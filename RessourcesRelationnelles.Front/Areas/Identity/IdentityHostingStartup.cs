using RessourcesRelationnelles.Front.Areas.Identity;

[assembly: HostingStartup(typeof(IdentityHostingStartup))]
namespace RessourcesRelationnelles.Front.Areas.Identity
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