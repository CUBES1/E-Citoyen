using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class FavoritesFeature : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Favorite",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RessourceId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId1 = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Favorite", x => new { x.UserId, x.RessourceId });
                    table.ForeignKey(
                        name: "FK_Favorite_AspNetUsers_UserId1",
                        column: x => x.UserId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Favorite_Ressources_RessourceId",
                        column: x => x.RessourceId,
                        principalTable: "Ressources",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Favorite_RessourceId",
                table: "Favorite",
                column: "RessourceId");

            migrationBuilder.CreateIndex(
                name: "IX_Favorite_UserId1",
                table: "Favorite",
                column: "UserId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Favorite");
        }
    }
}
