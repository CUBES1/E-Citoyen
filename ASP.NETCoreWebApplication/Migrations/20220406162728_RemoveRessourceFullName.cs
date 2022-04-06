using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class RemoveRessourceFullName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FullName",
                table: "Ressources");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "Ressources",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
