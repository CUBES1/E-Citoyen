using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using RessourcesRelationnelles.Api.Models;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Api.Data;

public class AppDbContext : ApiAuthorizationDbContext<ApplicationUser>
{
    public AppDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // UserInteraction build
            modelBuilder.Entity<UserInteraction>(mb =>
            {
                mb.HasKey(ui => new { ui.UserId, ui.RessourceId, ui.Type });
                mb  
                    .HasOne(ui => ui.User)
                    .WithMany(au => au.Interactions)
                    .HasForeignKey(ui => ui.UserId)
                    .OnDelete(DeleteBehavior.Cascade);
                mb
                    .HasOne(ui => ui.Resource)
                    .WithMany(r => r.Interactions)
                    .HasForeignKey(ui => ui.RessourceId)
                    .OnDelete(DeleteBehavior.Cascade);;
            });

            // ApplicationUser build
            modelBuilder.Entity<ApplicationUser>()
                .HasMany(u => u.Interactions)
                .WithOne(ui => ui.User)
                .OnDelete(DeleteBehavior.NoAction);

            // FriendShip build
            modelBuilder.Entity<FriendShip>(mb =>
            {
                mb.HasKey(fs => new {fs.UserId, fs.UserFriendId});
                mb
                    .HasOne(fs => fs.UserFriend)
                    .WithMany(u => u.FriendsOf)
                    .HasForeignKey(fs => fs.UserFriendId)
                    .OnDelete(DeleteBehavior.NoAction);

                mb
                    .HasOne(fs => fs.User)
                    .WithMany(u => u.Friends)
                    .HasForeignKey(fs => fs.UserId)
                    .OnDelete(DeleteBehavior.NoAction);
            });
            
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

          var categorie1 = new ResourceCategory()
          {
              Id = new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827a3"),
              Description = "Un Article",
              Label = "Article"
          };
          
          var Publication1 = new Publication()
          {
              Id = new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c4"),
              Title = "Reconnaître ses émotions",
              Visibility = Visibility.Public,
              Body = "L’objectif de cet exercice est de reconnaître les émotions sur soi. Pour ce faire, nous noterons dans un petit cahier prévu à cet effet, à des moments prédéfinis de la journée, comment nous nous senton émotionnellement. Quelle émotion nous habite ? Cette émotion est-elle positive ou négative ? "
               + "Quel a été le facteur déclencheur ? Nous répèterons la démarche durant une semaine.",
              ReleaseDate = DateTime.Now,
              UserId = Phillip.Id,
              ResourceCategoryId = categorie.Id
          };
          
          var Publication2 = new Publication()
          {
              Id = new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823a4"),
              Title = "La situation en ukraine",
              Visibility = Visibility.Public,
              Body = "La Russie a attaqué l'ukraine, ce qui déclenche des probléme partout dans le monde "
                            + "Quel a été le facteur déclencheur ? Dans ma série d'article vous trouverez les raisons de cette invasion.",
              ReleaseDate = DateTime.Now,
              UserId = bertrand.Id,
              ResourceCategoryId = categorie1.Id
          };

          builder.Entity<ApplicationUser>().HasData(bertrand);  
          builder.Entity<ApplicationUser>().HasData(Phillip);  
          builder.Entity<ResourceCategory>().HasData(categorie);  
          builder.Entity<ResourceCategory>().HasData(categorie1);  
          builder.Entity<Publication>().HasData(Publication1);  
          builder.Entity<Publication>().HasData(Publication2);  
        }  

    // public DbSet<ApplicationUser> Users { get; set; }
    public DbSet<Resource> Resources { get; set; }
    public DbSet<Publication> Publications { get; set; }
    public DbSet<ImagePublication> ImagePublications { get; set; }
    public DbSet<ResourceCategory> ResourceCategories { get; set; }
    public DbSet<UserInteraction> UserInteractions { get; set; }
    public DbSet<FriendShip> FriendShips { get; set; }
}