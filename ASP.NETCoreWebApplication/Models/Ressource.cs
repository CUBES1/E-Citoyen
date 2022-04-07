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
        public Visibility Visibility { get; set; } = Visibility.Public;

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        
        public DateTime? ReleaseDate { get; set; } = DateTime.Now;

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime? UpdatedAt { get; set; }

        public virtual string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }

        public Guid ResourceCategoryId { get; set; }
        [JsonIgnore] public ResourceCategory ResourceCategory { get; set; }
        [JsonIgnore] public List<UserInteraction> Favorites { get; set; }

        [NotMapped] public string DisplayState => Visibility.ToString();
    }
}