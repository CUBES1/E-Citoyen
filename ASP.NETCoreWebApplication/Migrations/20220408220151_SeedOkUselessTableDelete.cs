using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class SeedOkUselessTableDelete : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SubComments");

            migrationBuilder.DropTable(
                name: "MainComments");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MainComments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MainComments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SubComments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MainCommentId = table.Column<int>(type: "int", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubComments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SubComments_MainComments_MainCommentId",
                        column: x => x.MainCommentId,
                        principalTable: "MainComments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827c5",
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "SecurityStamp" },
                values: new object[] { "370cd39f-8d8d-41cc-a245-4c8b46f27601", new DateTime(2022, 4, 8, 23, 51, 47, 557, DateTimeKind.Local).AddTicks(2709), "65140ed1-bd47-4fe6-bd60-80400159c220" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6c6f5a3c-f8dc-42f5-afb5-805f3ac827d5",
                columns: new[] { "ConcurrencyStamp", "DateOfBirth", "SecurityStamp" },
                values: new object[] { "65e35666-207e-4ca1-965d-beaca41ccec2", new DateTime(2022, 4, 8, 23, 51, 47, 563, DateTimeKind.Local).AddTicks(1358), "9ac9743c-0117-4903-b183-8902c200d331" });

            migrationBuilder.UpdateData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c1"),
                column: "ReleaseDate",
                value: new DateTime(2022, 4, 8, 23, 51, 47, 564, DateTimeKind.Local).AddTicks(2397));

            migrationBuilder.UpdateData(
                table: "Ressources",
                keyColumn: "Id",
                keyValue: new Guid("6c6f5a3c-f8dc-42f5-afb5-805f3ac823c4"),
                column: "ReleaseDate",
                value: new DateTime(2022, 4, 8, 23, 51, 47, 563, DateTimeKind.Local).AddTicks(9440));

            migrationBuilder.CreateIndex(
                name: "IX_SubComments_MainCommentId",
                table: "SubComments",
                column: "MainCommentId");
        }
    }
}
