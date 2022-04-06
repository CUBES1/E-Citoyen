using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class RemoveNullableUserIdAndAddResourceCategories : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ResourceCategoryId",
                table: "Ressources",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "ResourceCategories",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ResourceCategories", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ressources_ResourceCategoryId",
                table: "Ressources",
                column: "ResourceCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ressources_ResourceCategories_ResourceCategoryId",
                table: "Ressources",
                column: "ResourceCategoryId",
                principalTable: "ResourceCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ressources_ResourceCategories_ResourceCategoryId",
                table: "Ressources");

            migrationBuilder.DropTable(
                name: "ResourceCategories");

            migrationBuilder.DropIndex(
                name: "IX_Ressources_ResourceCategoryId",
                table: "Ressources");

            migrationBuilder.DropColumn(
                name: "ResourceCategoryId",
                table: "Ressources");
        }
    }
}
