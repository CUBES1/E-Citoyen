using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.NETCoreWebApplication.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int? Rating { get; set; }
        public int? Age { get; set; }
        public bool? Sex { get; set; }

        public List<Ressource>? Ressources { get; set; }
        public List<Favorite>? Favorites { get; set; }
        
        [NotMapped] public string FullName => UserName;


    }
}