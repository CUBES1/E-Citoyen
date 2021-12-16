using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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
        public DateTime? ReleaseDate { get; set; }

        public DateTime? UpdatedAt { get; set; }
        public int? Age { get; set; }

        public Visibility Visibility { get; set; } = Visibility.Public;

        public String UserId { get; set; }
        
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
        //public List<MainComment>? MainComments { get; set; }
    }
}