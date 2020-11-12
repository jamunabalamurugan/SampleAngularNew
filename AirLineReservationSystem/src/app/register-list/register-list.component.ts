import { Component, OnInit } from '@angular/core';
import { Registration } from '../register.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})
export class RegisterListComponent implements OnInit {

  constructor(public serve:RegisterService) { }

  ngOnInit() {
    this.serve.refreshList();
  }
  Populateform(reg:Registration)
  {
    {{debugger}}
    this.serve.FormData=Object.assign({},reg);
    console.log(this.serve.FormData);
  }

  onDelete(id:number)
 {
   {{debugger}}
   if(confirm("Are you sure to Delete this record?")){
     console.log(id);
     this.serve.DeleteRegistration(id).subscribe(res=>
     {
       this.serve.refreshList();
     });
   }
 }

}
