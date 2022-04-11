using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class MoreSeederData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5",
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "SecurityStamp" },
                values: new object[] { "699ca40b-a02f-4fae-82b4-ad0fe6779229", new DateTime(2022, 4, 11, 12, 35, 22, 641, DateTimeKind.Local).AddTicks(3497), "ca67b13e-a486-4e3d-946e-99c04ea32bf1" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827d5",
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "SecurityStamp" },
                values: new object[] { "cc431d84-fba1-4fa0-954d-bbb68ef3fc50", new DateTime(2022, 4, 11, 12, 35, 22, 645, DateTimeKind.Local).AddTicks(6140), "1cb22b39-3986-4446-be16-c4c17c772f56" });

            migrationBuilder.InsertData(
                table: "ResourceCategories",
                columns: new[] { "Id", "Description", "Label" },
                values: new object[] { new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827a3"), "Article", "Un article" });

            migrationBuilder.UpdateData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c4"),
                column: "ReleaseDate",
                value: new DateTime(2022, 4, 11, 12, 35, 22, 646, DateTimeKind.Local).AddTicks(4076));

            migrationBuilder.InsertData(
                table: "Ressources",
                columns: new[] { "Id", "Description", "Discriminator", "ReleaseDate", "ResourceCategoryId", "Title", "UpdatedAt", "UserId", "Visibility" },
                values: new object[] { new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823a4"), "La Russie a attaqué l'ukraine, ce qui déclenche des probléme partout dans le monde Quel a été le facteur déclencheur ? Dans ma série d'article vous trouverez les raisons de cette invasion.", "Post", new DateTime(2022, 4, 11, 12, 35, 22, 646, DateTimeKind.Local).AddTicks(7510), new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827a3"), "La situation en ukraine", null, "6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5", 0 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823a4"));

            migrationBuilder.DeleteData(
                table: "ResourceCategories",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac827a3"));

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
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "SecurityStamp" },
                values: new object[] { "91da9955-556d-43ac-88e3-51339d5c4aeb", new DateTime(2022, 4, 9, 17, 37, 9, 244, DateTimeKind.Local).AddTicks(5166), "43b6602f-1b6f-4bc3-ac65-ea91f38d054d" });

            migrationBuilder.UpdateData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c4"),
                column: "ReleaseDate",
                value: new DateTime(2022, 4, 9, 17, 37, 9, 245, DateTimeKind.Local).AddTicks(2672));
        }
    }
}
