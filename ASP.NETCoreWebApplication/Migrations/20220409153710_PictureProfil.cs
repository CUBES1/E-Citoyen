using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class PictureProfil : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c1"));

            migrationBuilder.AddColumn<byte[]>(
                name: "ProfilePicture",
                table: "AspNetUsers",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5",
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "SecurityStamp" },
                values: new object[] { "d6b742a8-526c-4934-9cfe-87cb15e560ef", new DateTime(2022, 4, 9, 17, 37, 9, 239, DateTimeKind.Local).AddTicks(150), "78f756d2-95bb-4a08-869e-be238220583f" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827d5",
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "Email", "SecurityStamp" },
                values: new object[] { "91da9955-556d-43ac-88e3-51339d5c4aeb", new DateTime(2022, 4, 9, 17, 37, 9, 244, DateTimeKind.Local).AddTicks(5166), "phil@exemple.com", "43b6602f-1b6f-4bc3-ac65-ea91f38d054d" });

            migrationBuilder.UpdateData(
                table: "ResourceCategories",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827e3"),
                columns: new[] { "Description", "Label" },
                values: new object[] { "Exercices / Atelier", "Intelligence émotionnelle" });

            migrationBuilder.UpdateData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c4"),
                columns: new[] { "Description", "ReleaseDate", "Title" },
                values: new object[] { "L’objectif de cet exercice est de reconnaître les émotions sur soi. Pour ce faire, nous noterons dans un petit cahier prévu à cet effet, à des moments prédéfinis de la journée, comment nous nous senton émotionnellement. Quelle émotion nous habite ? Cette émotion est-elle positive ou négative ? Quel a été le facteur déclencheur ? Nous répèterons la démarche durant une semaine.", new DateTime(2022, 4, 9, 17, 37, 9, 245, DateTimeKind.Local).AddTicks(2672), "Reconnaître ses émotions" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProfilePicture",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5",
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "SecurityStamp" },
                values: new object[] { "9b68028b-c9a6-4c31-92ce-dbb4c55a9bb6", new DateTime(2022, 4, 9, 0, 19, 41, 765, DateTimeKind.Local).AddTicks(9946), "b5462071-27bf-4cad-86e4-28e12c51b6da" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827d5",
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "Email", "SecurityStamp" },
                values: new object[] { "c529d70f-0798-4dbe-b697-519a0520fa72", new DateTime(2022, 4, 9, 0, 19, 41, 772, DateTimeKind.Local).AddTicks(5442), "bertrand@exemple.com", "ee54df0b-931c-419d-94b2-6bbd4119bb96" });

            migrationBuilder.UpdateData(
                table: "ResourceCategories",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827e3"),
                columns: new[] { "Description", "Label" },
                values: new object[] { "Racontez tous vos voyages", "Voyage" });

            migrationBuilder.UpdateData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c4"),
                columns: new[] { "Description", "ReleaseDate", "Title" },
                values: new object[] { "Trop bien le soleil, je vous conseille leur fameuse feta", new DateTime(2022, 4, 9, 0, 19, 41, 773, DateTimeKind.Local).AddTicks(3216), "Mon voyage en Crète" });

            migrationBuilder.InsertData(
                table: "Ressources",
                columns: new[] { "Id", "Description", "Discriminator", "ReleaseDate", "ResourceCategoryId", "Title", "UpdatedAt", "UserId", "Visibility" },
                values: new object[] { new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c1"), "C'était vraiment sympa les promenades en dromadaire, le thé à le menthe est bon", "Post", new DateTime(2022, 4, 9, 0, 19, 41, 773, DateTimeKind.Local).AddTicks(6320), new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827e3"), "Mon voyage au maroc", null, "6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5", 0 });
        }
    }
}
