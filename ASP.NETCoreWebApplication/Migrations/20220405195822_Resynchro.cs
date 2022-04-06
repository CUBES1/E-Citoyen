using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class Resynchro : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ressources_Categories_CategorieId",
                table: "Ressources");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Ressources_CategorieId",
                table: "Ressources");

            migrationBuilder.DropColumn(
                name: "CategorieId",
                table: "Ressources");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ressources_ResourceCategories_ResourceCategoryId",
                table: "Ressources");

            migrationBuilder.AddColumn<Guid>(
                name: "CategorieId",
                table: "Ressources",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CategorieName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });
        }
    }
}
