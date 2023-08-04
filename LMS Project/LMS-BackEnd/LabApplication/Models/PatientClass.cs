using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;

namespace LabApplication.Models
{
    public class PatientClass
    {
        [Key]
        public int PatientId { get; set; }
        public string PatientName { get; set; }
        public string PatientDOB { get; set; }

        public int PatientAge { get; set; } 
        public string Date { get; set; }
        public string DoctorRef { get; set; }
        public string TestDetails { get; set; }
        public string status { get; set; }
        public string registeredBy { get; set; }


    }
}
