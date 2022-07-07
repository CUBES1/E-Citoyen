using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication;
using ASP.NETCoreWebApplication.Models;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

namespace TestProject1
{
    public class UnitTest1 : IClassFixture<WebApplicationFactory<Startup>>
    {
        private readonly WebApplicationFactory<Startup> _factory;

        public UnitTest1(WebApplicationFactory<Startup> factory)
        {
            _factory = factory;
            _factory.ClientOptions.BaseAddress = new Uri("https://localhost:5001");
        }

        [Fact]
        public async Task CreatePostAsync()
        {
            var categorie = new ResourceCategory()
            {
                Id = new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827e3"),
                Description = "Exercices / Atelier",
                Label = "Intelligence émotionnelle"
            };
            
            var httpClient = _factory.CreateClient();
            
            var result = await httpClient.PostAsJsonAsync("/api/Post", new Post
            {
                Id = new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823d4"),
                Title = "Reconnaître ses émotions",
                Visibility = Visibility.Public,
                Description = "L’objectif de cet exercice est de reconnaître les émotions sur soi. Pour ce faire, nous noterons dans un petit cahier prévu à cet effet, à des moments prédéfinis de la journée, comment nous nous senton émotionnellement. Quelle émotion nous habite ? Cette émotion est-elle positive ou négative ? "
                              + "Quel a été le facteur déclencheur ? Nous répèterons la démarche durant une semaine.",
                ReleaseDate = DateTime.Now,
                UserId = "6c6f5a3c-f8dc-42f5-afb5-805f3ac827d5",
                ResourceCategoryId = categorie.Id
            });
            
            Assert.Equal(HttpStatusCode.Created, result.StatusCode);
        }

        [Theory]
        [InlineData("api/Relation")]
        [InlineData("api/Ressource/usr")]
        [InlineData("api/Ressource")]
        [InlineData("api/Post")]
        [InlineData("api/User")]
        [InlineData("api/ImagePost")]
        public async Task All_api_endpoint_returns_success_and_correct_content_type(string url)
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync(url);

            // Assert
            response.EnsureSuccessStatusCode(); // Status Code 200-299;
            Assert.Equal("application/json; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        [Theory]
        [InlineData("api/User/6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5")]
        [InlineData("api/Post/6c6f5a3c-f8dc-42f5-afb5-805f3ac823a4")]
        public async Task GetOnePostAndUserAsync(string url)
        {
            var httpClient = _factory.CreateClient();

            var response = await httpClient.GetAsync(url);

            response.EnsureSuccessStatusCode();
            Assert.Equal("application/json; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }
        
        [Fact]
        public async Task PutPostAsync()
        {
            var post = new Post
            {
                Id = new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823d4"),
                Title = "Reconnaître ses émotions",
                Visibility = Visibility.Public,
                Description = "La Russie a attaqué l'ukraine, ce qui déclenche des probléme partout dans le monde "
                              + "Quel a été le facteur déclencheur ? Dans ma série d'article vous trouverez les raisons de cette invasion.",
                ReleaseDate = DateTime.Now,
                UserId = "6c6f5a3c-f8dc-42f5-afb5-805f3ac827d5",
                ResourceCategoryId = new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827e3")
            };
            
            var httpClient = _factory.CreateClient();
          
            var result = await httpClient.PutAsJsonAsync("/api/Post/6c6f5a3c-f8dc-42f5-afb5-805f3ac823d4", post);
            
            Assert.Equal(HttpStatusCode.NoContent, result.StatusCode);
        }
        
        [Fact]
        public async Task DeletePostAsync()
        {
            var httpClient = _factory.CreateClient();

            var result = await httpClient.DeleteAsync($"/api/Post/6c6f5a3c-f8dc-42f5-afb5-805f3ac823d4");
            
            Assert.Equal(HttpStatusCode.NoContent, result.StatusCode);
        }
        /*
        [Theory]
        [InlineData("")]
        [InlineData("condition-utilisation")]
        [InlineData("ressource/f997c2e4-fc44-4d9f-2465-08da4a1138ef")]
        public async Task Get_EndpointsReturnSuccessAndCorrectContentType(string url)
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync(url);

            // Assert
            response.EnsureSuccessStatusCode(); // Status Code 200-299
            Assert.Equal("text/html; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }
        */
    }
}
 