using System;
using ASP.NETCoreWebApplication.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace ASP.NETCoreWebApplication.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

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
                    .WithMany(r => r.Interactions)
                    .HasForeignKey(ui => ui.RessourceId);
            });
            
            modelBuilder.Entity<FriendShip>()
                .HasKey(bc => new { bc.UserId, bc.UserFriendId });  
            
            modelBuilder.Entity<FriendShip>()
                .HasOne(pt => pt.UserFriend)
                .WithMany(p => p.FriendsOf)
                .HasForeignKey(pt => pt.UserFriendId)
                .OnDelete(DeleteBehavior.NoAction); 

            modelBuilder.Entity<FriendShip>()
                .HasOne(pt => pt.User)
                .WithMany(t => t.Friends)
                .HasForeignKey(pt => pt.UserId)
                .OnDelete(DeleteBehavior.NoAction);
            
            base.OnModelCreating(modelBuilder);
            SeedUsers(modelBuilder); 
        }
        
        private void SeedUsers(ModelBuilder builder)  
        {  
            var bertrand = new ApplicationUser
            {
                Id = "6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5",
                Email = "bertrand@exemple.com",
                FirstName = "Bertrand",
                LastName = "Didier",
                City = "Paris",
                Country = "France",
                Region = "Ile de France",
                UserName = "DidierB",
                DateOfBirth = DateTime.Now
            };
            
            var Phillip = new ApplicationUser()
          {
              Id = "6c6f5a3c-f8dc-42f5-afb5-805f3ac827d5",
              Email = "phil@exemple.com",
              FirstName = "Phillip",
              LastName = "Du Chateau",
              City = "Tours",
              Country = "France",
              Region = "Centre Val de Loire",
              UserName = "Phillipo",
              DateOfBirth = DateTime.Now,
          };
          
          var categorie = new ResourceCategory()
          {
              Id = new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827e3"),
              Description = "Exercices / Atelier",
              Label = "Intelligence émotionnelle"
          };

          
          var Post1 = new Post()
          {
              Id = new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c4"),
              Title = "Reconnaître ses émotions",
              Visibility = Visibility.Public,
              Description = "L’objectif de cet exercice est de reconnaître les émotions sur soi. Pour ce faire, nous noterons dans un petit cahier prévu à cet effet, à des moments prédéfinis de la journée, comment nous nous senton émotionnellement. Quelle émotion nous habite ? Cette émotion est-elle positive ou négative ? "
               + "Quel a été le facteur déclencheur ? Nous répèterons la démarche durant une semaine.",
              ReleaseDate = DateTime.Now,
              UserId = Phillip.Id,
              ResourceCategoryId = categorie.Id
          };

          builder.Entity<ApplicationUser>().HasData(bertrand);  
          builder.Entity<ApplicationUser>().HasData(Phillip);  
          builder.Entity<ResourceCategory>().HasData(categorie);  
          builder.Entity<Post>().HasData(Post1);  
        }  
        
        public DbSet<Ressource> Ressources { get; set; }
        public DbSet<ResourceCategory> ResourceCategories { get; set; }
        public DbSet<UserInteraction> UserInteraction { get; set; }
        public DbSet<ApplicationUser> Users { get; set; }
        public DbSet<FriendShip> FriendShips { get; set; } // friendships = amitiés
        public DbSet<Post> Posts { get; set; }
        public DbSet<ImagePost> ImagePosts { get; set; }
    }
}