import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private searchPassenger:FlightSearchService,private paymentobj:PaymentService) { 
  }

  ngOnInit() {
   
  }
  PassengerPayment()
  {
    {{debugger}}
    // this.searchPassenger.postSearchService();
    this.searchPassenger.ProfileID;
    this.paymentobj.PaymentServiceFunction(this.searchPassenger.ProfileID);
    console.log(this.searchPassenger.ProfileID);
    console.log(this.paymentobj.paymentlist);
  }

}
