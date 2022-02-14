using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace ASP.NETCoreWebApplication.Models
{
    public class Favorite
    {
        [JsonIgnore] public ApplicationUser User { get; set; }
        [JsonIgnore] public Ressource Ressource { get; set; }

        public Guid UserId { get; set; }
        public Guid RessourceId { get; set; }
    }
}