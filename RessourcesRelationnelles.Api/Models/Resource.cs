using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Api.Models;

public enum Visibility
{
    Public = 0,
    Protected,
    Private,
    Archived
}

public class Resource
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

    public string UserId { get; set; }
    
    [JsonIgnore]
    public ApplicationUser User { get; set; }

    public Guid ResourceCategoryId { get; set; }
    
    [JsonIgnore]
    public ResourceCategory ResourceCategory { get; set; }
    
    [JsonIgnore]
    public List<UserInteraction> Interactions { get; set; }

    [NotMapped]
    public string DisplayState => Visibility.ToString();
}