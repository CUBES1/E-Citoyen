using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ASP.NETCoreWebApplication.Models
{
    public enum Visibility
    {
        Public = 0,
        Protected = 1,
        Private = 2,
        Archived = 3
    }

    public class Ressource
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public Guid Id { get; set; }

        public string Title { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        
        public string? Genre { get; set; }
        public DateTime? ReleaseDate { get; set; } = DateTime.Now;

        public DateTime? UpdatedAt { get; set; }
        public int? Age { get; set; }

        public Visibility Visibility { get; set; } = Visibility.Public;

        public string UserId { get; set; }
        
        [JsonIgnore]
        public ApplicationUser User { get; set; }

        [NotMapped]
        public string DisplayState => Visibility switch
        {
            Visibility.Public => "Public",
            Visibility.Protected => "Protégé",
            Visibility.Private => "Privé",
            Visibility.Archived => "Archivé",
            _ => throw new ArgumentOutOfRangeException()
        };
        [NotMapped] public string UserName => User.UserName;
        //public List<MainComment>? MainComments { get; set; }
    }
}