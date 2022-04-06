using ASP.NETCoreWebApplication.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ASP.NETCoreWebApplication.Models.Comments;
using Microsoft.AspNetCore.Builder;

namespace ASP.NETCoreWebApplication.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserInteraction>(mb =>
            {
                mb.HasKey(ui => new { ui.UserId, ui.RessourceId, ui.Type });
                mb  
                    .HasOne(ui => ui.User)
                    .WithMany(au => au.Interactions)
                    .HasForeignKey(ui => ui.UserId);
                mb
                    .HasOne(ui => ui.Ressource)
                    .WithMany(r => r.Favorites)
                    .HasForeignKey(ui => ui.RessourceId);
            });
            
            modelBuilder.Entity<FriendShip>()
                .HasKey(bc => new { bc.UserId, bc.UserFriendId });  
            
            modelBuilder.Entity<FriendShip>()
                .HasOne(pt => pt.UserFriend)
                .WithMany(p => p.FriendsOf) // <--
                .HasForeignKey(pt => pt.UserFriendId)
                .OnDelete(DeleteBehavior.Restrict); // see the note at the end

            modelBuilder.Entity<FriendShip>()
                .HasOne(pt => pt.User)
                .WithMany(t => t.Friends)
                .HasForeignKey(pt => pt.UserId); 
            
            base.OnModelCreating(modelBuilder);
        }

        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Debate> Debate { get; set; }
        public DbSet<Ressource> Ressources { get; set; }
        public DbSet<ResourceCategory> ResourceCategories { get; set; }
        public DbSet<MainComment> MainComments { get; set; }
        public DbSet<SubComment> SubComments { get; set; }
        public DbSet<UserInteraction> UserInteraction { get; set; }
        public DbSet<ApplicationUser> Users { get; set; }
        public DbSet<FriendShip> FriendShips { get; set; }
        public DbSet<Post> Posts { get; set; }
    }
}