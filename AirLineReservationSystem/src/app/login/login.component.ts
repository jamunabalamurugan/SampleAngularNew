import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Registration } from '../register.model';
import { FlightSearchService } from '../flight-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reslogin:Registration[];
  EmailId:string;
  PWD:string;
 

  constructor(private serve :RegisterService,private search : FlightSearchService,private route:Router) {
    this.serve.FormData={
     
      ProfileId:null,
      Title:null,
      FirstName:null,
      LastName : null,
      EmailId : null,
      PWD :null,
      Age :null,
      PhoneNumber:null,
     securityquestion :null,
     SecurityAns:null
     }
     this.serve.refreshList();
     //console.log(this.serve.list.length);
    //  this.reslogin=this.serve.list;
  
   }

  ngOnInit() { 
    {{debugger}}
    this.serve.refreshList();
    // this.resetForm();
  }

  errormsg = null;

// ProfileID:any;
loginfunction(form1:NgForm)
{
  {{debugger}}
  this.EmailId=form1.value.EmailId;
  this.PWD=form1.value.PWD;
  console.log(this.EmailId);
  // if(this.reslogin!=null){
  for (let val of this.serve.list) 
  {
    console.log(val); 
    var indexE = val.EmailId.localeCompare(this.EmailId);
    var indexP = val.PWD.localeCompare(this.PWD);
    
    console.log(indexE);
    console.log(indexP);
    if(indexE==0 && indexP==0)
    {
      this.search.ProfileID = val.ProfileId;
      this.search.Login(val.ProfileId);
      this.search.ProfileName = this.EmailId;
      if(this.search.FlightNo == null)
      {
        this.route.navigate(['/home']);
      }
      else{
        this.route.navigate(['/flightbooking']);
      }
      break;
    }
    else
    {
      this.errormsg = "Login Unsuccessful! Please Try Again";
      this.route.navigate(['/login']);
    }
    
  }

  // this.email=this.serve.list.find(e=>e.EmailId==this.EmailId);
  // this.pwd=this.serve.list.find(e=>e.PWD==this.PWD);
  // console.log(this.email);
  // console.log(this.EmailId);
  //  if(this.email==null && this.pwd==null )
  //  // if(form.value.eid=this.employeeid)
  //   {
  //    document.write("true");
  //    console.log("true");

  //   }
  //   else
  //   {
  //     document.write("false");
  //     console.log("false");
  //   }

   // this.InsertRecord(form);
}
resetForm(form?:NgForm)
{
  if(form!=null)
    form.resetForm();
  this.serve.FormData={
  ProfileId:null,
  Title:null,
  FirstName:null,
  LastName : null,
  EmailId : null,
  PWD :null,
  PhoneNumber:null,
  securityquestion :null,
  SecurityAns:null,
  Age :null,
}
}

}
