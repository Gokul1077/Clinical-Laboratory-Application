using Microsoft.EntityFrameworkCore;

namespace LabApplication.Models
{
    public class DbContextClass: DbContext
    {
        public DbContextClass(DbContextOptions<DbContextClass> options) : base(options){ }

        //table refernce here
        public DbSet<PatientClass> PatientClass { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=LAPTOP-QFQTU8TO;Database=PatientDB;Trusted_Connection=true;TrustServerCertificate=Yes");
        }
    }
}
