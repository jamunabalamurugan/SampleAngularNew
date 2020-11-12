import { Injectable } from '@angular/core';
import { Payment_Result } from './payment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  readonly rootURL="http://localhost:58857/api"
  constructor(private http:HttpClient) { }
paymentlist:Payment_Result[];
PaymentServiceFunction(id:number):void
{
  {{debugger}}
  this.http.get(this.rootURL+'/paymentresult/'+id)
  .toPromise().then(res=>this.paymentlist=res as Payment_Result[]);
  console.log(this.paymentlist);
}


}
