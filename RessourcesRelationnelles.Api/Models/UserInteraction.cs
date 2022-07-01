using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations.Schema;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Api.Models;

public enum UserInteractionType
{
    None = 0,
    Like,
    Favorite,
    Sharing
}

public class UserInteraction
{
    public string UserId { get; set; }

    [JsonIgnore]
    public ApplicationUser User { get; set; }

    public Guid RessourceId { get; set; }

    [JsonIgnore]
    public Resource Resource { get; set; }

    [JsonIgnore]
    public UserInteractionType Type { get; set; } = UserInteractionType.None;
    
    public DateTime CreatedAt { get; } = DateTime.Now;

    [NotMapped]
    public string StringType
    {
        get => Type.ToString();
        set => Type = StringToUserInteractionType(value);
    }
    
    [NotMapped]
    public Int32 Iterator => HashCode.Combine(UserId, RessourceId, Type);

    /// <summary>
    /// Parse a string to an UserInteractionType object.
    /// </summary>
    /// <param name="type">String of the name of the corresponding enum field.</param>
    /// <returns>UserInteractionType object corresponding to the enum, or UserInteractionType.None if it doesn't exists.</returns>
    public static UserInteractionType StringToUserInteractionType(string type)
    {
        UserInteractionType res;
        return Enum.TryParse<UserInteractionType>(type, false, out res) ? res : UserInteractionType.None;
    }
}