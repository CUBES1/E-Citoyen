using ASP.NETCoreWebApplication.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
                mb.HasKey(f => new { f.UserId, f.RessourceId });
                mb  
                    .HasOne(f => f.User)
                    .WithMany(u => u.Favorites)
                    .HasForeignKey(f => f.UserId);
                mb
                    .HasOne(f => f.Ressource)
                    .WithMany(r => r.Favorites)
                    .HasForeignKey(f => f.RessourceId);
            });

            base.OnModelCreating(modelBuilder);
        }

        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Debate> Debate { get; set; }
        public DbSet<Ressource> Ressources { get; set; }
        public DbSet<MainComment> MainComments { get; set; }
        public DbSet<SubComment> SubComments { get; set; }
        public DbSet<UserInteraction> Favorite { get; set; }
    }
}