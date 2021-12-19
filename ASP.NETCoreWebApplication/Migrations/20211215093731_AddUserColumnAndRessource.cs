using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class AddUserColumnAndRessource : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Debate",
                table: "Debate");

            migrationBuilder.RenameTable(
                name: "Debate",
                newName: "Ressources");

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Rating",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Sex",
                table: "AspNetUsers",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Ressources",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Ressources",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "Ressources",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Ressources",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Visibility",
                table: "Ressources",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Ressources",
                table: "Ressources",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Ressources_UserId",
                table: "Ressources",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ressources_AspNetUsers_UserId",
                table: "Ressources",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ressources_AspNetUsers_UserId",
                table: "Ressources");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Ressources",
                table: "Ressources");

            migrationBuilder.DropIndex(
                name: "IX_Ressources_UserId",
                table: "Ressources");

            migrationBuilder.DropColumn(
                name: "Age",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Rating",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Sex",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Age",
                table: "Ressources");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Ressources");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "Ressources");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Ressources");

            migrationBuilder.DropColumn(
                name: "Visibility",
                table: "Ressources");

            migrationBuilder.RenameTable(
                name: "Ressources",
                newName: "Debate");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Debate",
                table: "Debate",
                column: "Id");
        }
    }
}
