using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class FavoritesFeature_JoinFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId1",
                table: "Favorite");

            migrationBuilder.DropIndex(
                name: "IX_Favorite_UserId1",
                table: "Favorite");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Favorite");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Favorite",
                table: "Favorite");
            
            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Favorite",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Favorite",
                columns: new[] { "UserId", "RessourceId" },
                table: "Favorite");

            migrationBuilder.AddForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId",
                table: "Favorite",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId",
                table: "Favorite");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "Favorite",
                type: "uniqueidentifier",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Favorite",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Favorite_UserId1",
                table: "Favorite",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId1",
                table: "Favorite",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
