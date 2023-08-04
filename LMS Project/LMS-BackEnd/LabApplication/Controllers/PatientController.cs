using LabApplication.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LabApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
       private readonly DbContextClass _dbContext;

        public PatientController(DbContextClass dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("getpatient")]
        public async Task<IEnumerable<PatientClass>> GetPatientDetails()
        {
            return await _dbContext.PatientClass.ToListAsync();
        }

        [HttpPost]
        [Route("addpatient")]
        public  async Task<PatientClass> addPatient(PatientClass patobject)
        {
            _dbContext.PatientClass.Add(patobject);
            await _dbContext.SaveChangesAsync();
            return patobject;
        }


        [HttpPut]
        [Route("updatepatient/{id}")]
        public async Task<PatientClass> updatePatient(PatientClass patobject)
        {
            _dbContext.Entry(patobject).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return patobject;
        }

        [HttpDelete]
        [Route("deletepatient/{id}")]
        public bool deletePatient(int id )
        {
            bool flag = false;
            var patient=_dbContext.PatientClass.Find(id);
            if(patient != null)
            {
                flag = true;
                _dbContext.Entry(patient).State = EntityState.Deleted;
                _dbContext.SaveChanges();
                return flag;
            }
            return flag;
        }
    }
}
