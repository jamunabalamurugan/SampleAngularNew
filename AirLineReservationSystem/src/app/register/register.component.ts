import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Registration } from '../register.model';
import { Router } from '@angular/router';
import { FlightSearchService } from '../flight-search.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public empids:number[];
  EmailId:string;
  reg:Registration;
  public res:Registration[];
  constructor(private serve :RegisterService,private route:Router,private search:FlightSearchService) { 
    this.serve.refreshList();
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
   
   this.res=this.serve.list;

  }
  form;

  ngOnInit() {
    this.serve.refreshList();
    this.res=this.serve.list;
    this.resetForm();
  }

  Register(title:string,fname:string,lname:string,pwd:string,email:string,phno:string,secque:HTMLInputElement,secans:string,age:number,form:NgForm)
  {
    if(title == null)
    {
      alert("Please Enter The Title");
      this.route.navigate(['/register']);
    }
    else if(fname == null)
    {
      alert("Please Enter the FirstName");
      this.route.navigate(['/register']);
    }
    else if(lname == null)
    {
      alert("Please Enter the LastName");
      return;
    }
    else if(pwd == null)
    {
      alert("Please Enter the Password");
      return;
    }
    else if(email == null)
    {
      alert("Please Enter the Email");
      return;
    }
    else if(phno == null)
    {
      alert("Please Enter the PhoneNumber");
      return;
    }
    else if(secque == null)
    {
      alert("Please Select the Security Question");
      return;
    }
    else if(secans == null)
    {
      alert("Please Enter the Security Answer");
      return;
    }
    else if(age < 1)
    {
      alert("Please Enter the Valid Age");
      return;
    }
    else{
      this.EmailId=form.value.EmailId;
    console.log(this.EmailId);
    console.log(this.serve.list.length);
  // console.log(this.res.length);
    this.reg=this.serve.list.find(e=>e.EmailId==this.EmailId);
    console.log(this.reg);
    console.log(this.EmailId);
     if(this.reg==null)
     // if(form.value.eid=this.employeeid)
      {
       this.InsertRecord(form);
       this.route.navigate(['/login']);
      }
      // else
      // {
      //   this.UpdateRecord(form);
      // }

    }
  }

  // OnSubmit(form:NgForm)
  // {
  //   {{debugger}}
  //   this.EmailId=form.value.EmailId;
  //   console.log(this.EmailId);
  //   console.log(this.serve.list.length);
  // // console.log(this.res.length);
  //   this.reg=this.serve.list.find(e=>e.EmailId==this.EmailId);
  //   console.log(this.reg);
  //   console.log(this.EmailId);
  //    if(this.reg==null)
  //    // if(form.value.eid=this.employeeid)
  //     {
  //      this.InsertRecord(form);
  //     }
  //     else
  //     {
  //       this.UpdateRecord(form);
  //     }

  //    // this.InsertRecord(form);
  //   }
  InsertRecord(form:NgForm)
  {
      {{debugger}}
      this.serve.PostRegistration(form.value).subscribe(res=>{
      this.resetForm(form);
      this.serve.refreshList();
      });
  }

  // UpdateRecord(form:NgForm)
  //   {
  //     {{debugger}}
  //     this.serve.PutRegistration(form.value).subscribe(res=>{
  //     this.resetForm(form)
  //     this.serve.refreshList();
  // });
  // }
   
  

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
