﻿using System;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNet.Identity;

namespace ASP.NETCoreWebApplication.Models
{
    public class ApplicationUser : IdentityUser, IUser<string>
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int? Rating { get; set; }
        public int? Age { get; set; }
        public bool? Sex { get; set; }

        public List<Ressource>? Ressources { get; set; }

        [NotMapped] public string FullName => UserName;


    }
}