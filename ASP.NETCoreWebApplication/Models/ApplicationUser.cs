using System;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.AspNet.Identity;

namespace ASP.NETCoreWebApplication.Models
{
    public class ApplicationUser : IdentityUser, IUser<string>
    {
        [PersonalData]
        public string? FirstName { get; set; }
        
        [PersonalData]
        public string? LastName { get; set; }
        
        [PersonalData]
        public string Country { get; set; }
        
        [PersonalData]
        public string? Region { get; set; }
        
        [PersonalData]
        public string? City { get; set; }
        
        [PersonalData]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }
        
        public int? Rating { get; set; }
        
        public List<Ressource>? Ressources { get; set; }
        public List<ApplicationUser> Contacts { get; set; }
        [JsonIgnore] public List<UserInteraction>? Interactions { get; set; }
    }
}