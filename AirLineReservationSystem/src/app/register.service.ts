import { Injectable } from '@angular/core';
import { Registration } from './register.model';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  FormData: Registration;
  FormDatalogin: Registration;
  list: Registration[];

  readonly rootURL="http://localhost:58857/api"
  constructor(private http : HttpClient) { this.refreshList();}

    PostRegistration(FormData : Registration)
    {
      {{debugger}}
      return this.http.post(this.rootURL+'/Registrations',FormData);
    }  
  
    refreshList():void
    {
      {{debugger}}
      this.http.get(this.rootURL+'/Registrations')
     .toPromise().then(res=>this.list=res as Registration[]);
    }
  
    // PutRegistration(FormData:Registration)
    // {

    //   const headers = new HttpHeaders().set('content-type', 'application/json');
    //   // const params = new HttpParams().set('ID', FormData.ProfileId.toString());
    //     {
    //       return this.http.put<Registration>(this.rootURL+'/Registrations/'+FormData.ProfileId,FormData,{headers,params});
    //     }
    // }
    DeleteRegistration(id:number)
    {
      return this.http.delete(this.rootURL+'/Registrations/'+id);
    }



    //Stored Procedure part.....................................................................................................................
    //..........................................................................................................................................
     // spList: spLogin_Result[];

    // fillList():void
    // {
      
    //   this.http.get(this.rootURL+'/Home')
    //  .toPromise().then(res=>this.list=res as Registration[]);
    // }
}
