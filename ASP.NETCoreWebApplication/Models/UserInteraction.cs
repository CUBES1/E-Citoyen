using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace ASP.NETCoreWebApplication.Models
{
    public class UserInteraction
    {
        [JsonIgnore] public ApplicationUser User { get; set; }
        [JsonIgnore] public Ressource Ressource { get; set; }

        public string UserId { get; set; }
        public Guid RessourceId { get; set; }

        public UserInteractionType Type { get; set; } = UserInteractionType.None;
        [NotMapped] public string StringType
        {
            get => Type.ToString();
            set => Type = StringToUserInteractionType(value);
        }
        public DateTime? CreatedAt { get; set; } = DateTime.Now;

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

        public enum UserInteractionType
        {
            None = 0,
            Like,
            Favorite,
            Sharing
        }
    }
}