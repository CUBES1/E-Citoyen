using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class Test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FriendShips_AspNetUsers_UserFriendId",
                table: "FriendShips");

            migrationBuilder.DropForeignKey(
                name: "FK_FriendShips_AspNetUsers_UserId",
                table: "FriendShips");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "City", "ConcurrencyStamp", "Country", "DateOfBirth", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "Rating", "Region", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5", 0, "Paris", "370cd39f-8d8d-41cc-a245-4c8b46f27601", "France", new DateTime(2022, 4, 8, 23, 51, 47, 557, DateTimeKind.Local).AddTicks(2709), "bertrand@exemple.com", false, "Bertrand", "Didier", false, null, null, null, null, null, false, null, "Ile de France", "65140ed1-bd47-4fe6-bd60-80400159c220", false, "DidierB" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "City", "ConcurrencyStamp", "Country", "DateOfBirth", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "Rating", "Region", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "6c6f5a3c-f8dc-42f5-afb5-805f3ac827d5", 0, "Tours", "65e35666-207e-4ca1-965d-beaca41ccec2", "France", new DateTime(2022, 4, 8, 23, 51, 47, 563, DateTimeKind.Local).AddTicks(1358), "bertrand@exemple.com", false, "Phillip", "Du Chateau", false, null, null, null, null, null, false, null, "Centre Val de Loire", "9ac9743c-0117-4903-b183-8902c200d331", false, "Phillipo" });

            migrationBuilder.InsertData(
                table: "ResourceCategories",
                columns: new[] { "Id", "Description", "Label" },
                values: new object[] { new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827e3"), "Racontez tous vos voyages", "Voyage" });

            migrationBuilder.InsertData(
                table: "Ressources",
                columns: new[] { "Id", "Description", "Discriminator", "ReleaseDate", "ResourceCategoryId", "Title", "UpdatedAt", "UserId", "Visibility" },
                values: new object[] { new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c4"), "Trop bien le soleil, je vous conseille leur fameuse feta", "Post", new DateTime(2022, 4, 8, 23, 51, 47, 563, DateTimeKind.Local).AddTicks(9440), new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827e3"), "Mon voyage en Crète", null, "6c6f5a3c-f8dc-42f5-afb5-805f3ac827d5", 0 });

            migrationBuilder.InsertData(
                table: "Ressources",
                columns: new[] { "Id", "Description", "Discriminator", "ReleaseDate", "ResourceCategoryId", "Title", "UpdatedAt", "UserId", "Visibility" },
                values: new object[] { new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c1"), "C'était vraiment sympa les promenades en dromadaire, le thé à le menthe est bon", "Post", new DateTime(2022, 4, 8, 23, 51, 47, 564, DateTimeKind.Local).AddTicks(2397), new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827e3"), "Mon voyage au maroc", null, "6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5", 0 });

            migrationBuilder.AddForeignKey(
                name: "FK_FriendShips_AspNetUsers_UserFriendId",
                table: "FriendShips",
                column: "UserFriendId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FriendShips_AspNetUsers_UserId",
                table: "FriendShips",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FriendShips_AspNetUsers_UserFriendId",
                table: "FriendShips");

            migrationBuilder.DropForeignKey(
                name: "FK_FriendShips_AspNetUsers_UserId",
                table: "FriendShips");

            migrationBuilder.DeleteData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c1"));

            migrationBuilder.DeleteData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c4"));

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827d5");

            migrationBuilder.DeleteData(
                table: "ResourceCategories",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827e3"));

            migrationBuilder.AddForeignKey(
                name: "FK_FriendShips_AspNetUsers_UserFriendId",
                table: "FriendShips",
                column: "UserFriendId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_FriendShips_AspNetUsers_UserId",
                table: "FriendShips",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
