using Microsoft.EntityFrameworkCore.Migrations;

namespace Models.Migrations
{
    public partial class add_vrijeme_to_termin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "VrijemeTermina",
                table: "Termin",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VrijemeTermina",
                table: "Termin");
        }
    }
}
