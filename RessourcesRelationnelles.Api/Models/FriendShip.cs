using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Api.Models;

public class FriendShip
{
    public string? UserId { get; set; }
        
    [JsonIgnore]
    [ForeignKey("UserId")]
    public virtual ApplicationUser User { get; set; }
        
    public string? UserFriendId { get; set; }
        
    [JsonIgnore]
    [ForeignKey("UserFriendId")]
    public virtual ApplicationUser UserFriend { get; set; }
}