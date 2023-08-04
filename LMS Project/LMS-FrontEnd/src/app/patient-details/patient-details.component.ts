import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent {
  PatientArray:any=[];
  isResultLoaded=false;
  isUpdateFormActive=false;

  patientId:number=0; 
  patientName: string ="";
  patientDOB: string ="";
  patientAge: number=0;
  date: string ="";
  doctorRef: string="";
  testDetails: string="";
  status:  string="";
  registeredBy: string="";

  currentPatientID:number=0;
  constructor(private http:HttpClient) {
   
  }

  ngOnInit(){
    this.getAllPatientDetails();
  }

  readonly APIUrl="https://localhost:7001/api/Patient/";

  //GET Method
  getAllPatientDetails(){
    this.http.get(this.APIUrl+"getpatient").subscribe(data=>{
      this.isResultLoaded=true;
      this.PatientArray=data;
    })
  }
  
  //POST Method
  register(){
    let bodyData = {

  "patientId": this.patientId,
  "patientName": this.patientName,
  "patientDOB": this.patientDOB,
  "patientAge":  this.patientAge,
  "date": this.date,
  "doctorRef":  this.doctorRef,
  "testDetails": this.testDetails,
  "status": this.status,
  "registeredBy":this.registeredBy
    
    };
    this.http.post(this.APIUrl+"addpatient",bodyData).subscribe(data=>{
      // console.log(data);
      alert("Patient-Info Registered Successfully");
      this.getAllPatientDetails();
    })

  }

  //PUT Method
  UpdateRecords(){
    let bodyData = {

      "patientId": this.patientId,
      "patientName": this.patientName,
      "patientDOB": this.patientDOB,
      "patientAge":  this.patientAge,
      "date": this.date,
      "doctorRef":  this.doctorRef,
      "testDetails": this.testDetails,
      "status": this.status,
      "registeredBy":this.registeredBy
        
        };
        this.http.patch(this.APIUrl+"updatepatient/"+this.currentPatientID,bodyData).subscribe(data=>{
          // console.log(data);
          alert("Patient-Info Updated Successfully")
          this.getAllPatientDetails();
        })
  }

  setUpdate(data: any) 
  {
    this.patientId=data.patientId;
    this.patientName = data.patientName;
    this.patientDOB=data.patientDOB;
    this.patientAge=data.patientAge;
    this.date=data.date;
    this.doctorRef=data.doctorRef;
    this.testDetails=data.testDetails;
    this.status=data.status;
    this.registeredBy=data.registeredBy;
   

   this.currentPatientID = (data.patientId);
 
  }

  save()
  {
    if(this.currentPatientID>=0)
    {
      this.register();
    }
    else
    {
      this.UpdateRecords();
    }
  }

  setDelete(data: any)
  {
    this.http.delete(this.APIUrl+"deletepatient/"+data.patientId).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Patient Deleted")
        this.getAllPatientDetails();
    });
  }
}
