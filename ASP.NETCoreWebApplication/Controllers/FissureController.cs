using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WarframeNET;

namespace ASP.NETCoreWebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FissureController : WarframeController
    {
        public IEnumerable<Fissure> Get() => Client.GetFissuresAsync(Platform.PC).Result;
    }
}