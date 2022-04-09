using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class Syncro2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "SecurityStamp" },
                values: new object[] { "c529d70f-0798-4dbe-b697-519a0520fa72", new DateTime(2022, 4, 9, 0, 19, 41, 772, DateTimeKind.Local).AddTicks(5442), "ee54df0b-931c-419d-94b2-6bbd4119bb96" });

            migrationBuilder.UpdateData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c1"),
                column: "ReleaseDate",
                value: new DateTime(2022, 4, 9, 0, 19, 41, 773, DateTimeKind.Local).AddTicks(6320));

            migrationBuilder.UpdateData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c4"),
                column: "ReleaseDate",
                value: new DateTime(2022, 4, 9, 0, 19, 41, 773, DateTimeKind.Local).AddTicks(3216));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImagePost_Description",
                table: "Ressources");

            migrationBuilder.DropColumn(
                name: "Link",
                table: "Ressources");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5",
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "SecurityStamp" },
                values: new object[] { "547d08e4-6ef3-4e5d-a88d-a61c76839113", new DateTime(2022, 4, 9, 0, 1, 49, 645, DateTimeKind.Local).AddTicks(8941), "7c165458-80ab-4c82-8f63-d2e123ece01c" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827d5",
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "SecurityStamp" },
                values: new object[] { "508608c6-4759-4e09-a948-9151881746c7", new DateTime(2022, 4, 9, 0, 1, 49, 652, DateTimeKind.Local).AddTicks(9955), "a76fefd9-79e3-4274-b680-97ddca915e6c" });

            migrationBuilder.UpdateData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c1"),
                column: "ReleaseDate",
                value: new DateTime(2022, 4, 9, 0, 1, 49, 654, DateTimeKind.Local).AddTicks(5127));

            migrationBuilder.UpdateData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c4"),
                column: "ReleaseDate",
                value: new DateTime(2022, 4, 9, 0, 1, 49, 654, DateTimeKind.Local).AddTicks(840));
        }
    }
}
