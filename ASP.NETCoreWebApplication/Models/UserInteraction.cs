using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace ASP.NETCoreWebApplication.Models
{
    public class UserInteraction
    {
        [JsonIgnore] public ApplicationUser User { get; set; }
        [JsonIgnore] public Ressource Ressource { get; set; }

        public string UserId { get; set; }
        public Guid RessourceId { get; set; }
        public DateTime? CreatedAt { get; set; } = DateTime.Now;
    }
}