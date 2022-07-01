using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Api.Models;

public class ApplicationUser : IdentityUser
{
    [PersonalData]
    public string? FirstName { get; set; }
        
    [PersonalData]
    public string? LastName { get; set; }
        
    [PersonalData]
    public string Country { get; set; } = null!;
        
    [PersonalData]
    public string? Region { get; set; }
        
    [PersonalData]
    public string? City { get; set; }
        
    [PersonalData]
    [DataType(DataType.Date)]
    [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
    public DateTime DateOfBirth { get; set; }  
        
    public int? Rating { get; set; }
    
    [JsonIgnore]
    public List<Resource>? Resources { get; set; }

    public byte[]? ProfilePicture { get; set; }
    
    [JsonIgnore]
    public virtual List<FriendShip>? Friends { get; set; }
        
    [JsonIgnore]
    public virtual List<FriendShip>? FriendsOf { get; set; }
    
    [JsonIgnore]
    public List<UserInteraction>? Interactions { get; set; }
}