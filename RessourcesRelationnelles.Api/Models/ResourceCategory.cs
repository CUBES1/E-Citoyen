using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RessourcesRelationnelles.Api.Models;

public class ResourceCategory
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }
    
    public string Label { get; set; }
    
    public string Description { get; set; }
}