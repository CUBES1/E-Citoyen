using Newtonsoft.Json;

namespace ASP.NETCoreWebApplication.Models
{
    public class FriendShip
    {
        public string UserId { get; set; }
        
        [JsonIgnore]
        public virtual ApplicationUser User { get; set; }
        
        public string UserFriendId { get; set; }
        
        [JsonIgnore]
        public virtual ApplicationUser UserFriend { get; set; }
    }
}