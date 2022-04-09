using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace ASP.NETCoreWebApplication.Models
{
    public class FriendShip
    {
        public string? UserId { get; set; }
        
        [ForeignKey("UserId")]
        [JsonIgnore]
        public virtual ApplicationUser User { get; set; }
        
        public string? UserFriendId { get; set; }
        
        [ForeignKey("UserFriendId")]
        [JsonIgnore]
        public virtual ApplicationUser UserFriend { get; set; }
    }
}