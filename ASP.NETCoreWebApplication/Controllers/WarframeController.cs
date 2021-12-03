using Microsoft.AspNetCore.Mvc;
using WarframeNET;

namespace ASP.NETCoreWebApplication.Controllers
{
    public class WarframeController : ControllerBase
    {
        protected static readonly WarframeClient Client = new WarframeClient();
    }
}