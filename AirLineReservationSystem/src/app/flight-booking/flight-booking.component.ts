import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {

  photopath = 'assets/Images/FlightBG-2.jpg';

  constructor(private details:FlightSearchService,private route:Router) {
    this.details.FormBook = {
      ProfileId:null,
    FlightNumber:null,
    PassengerName:null,
    ClassId:null,
    PassengerAge:null,
    SeatNumber:null,
    nooftickets:null,
    amount:null,
    Gender:null

    }
   }
  ClassType1:number;
  NoOfSeats=1;
  PassengerName:string;
  PassengerAge:number;
  Gender:string;
  Price1:number;

  ngOnInit() {
  }

  seat:any={};
  Count(index)
  {
    {{debugger}}
    alert(this.seat);

    this.seat.x = index;

    alert(this.seat);
  }

  OnPayment(ClassType:HTMLInputElement,NoOfSeats:number,PassengerName:string, PassengerAge:number,Gender:string)
  {
    {{debugger}}
    this.details.tclass = ClassType.value;
    if(ClassType.value == 'FirstClass')
    {
      this.details.ClassTypeService = 1;
      this.details.PriceService = 12000;
    }
    else if(ClassType.value =='Business')
    {
      this.details.ClassTypeService = 2;
      this.details.PriceService=10000;

    }
    else if(ClassType.value == 'Economy')
    {
      this.details.ClassTypeService = 3;
      this.details.PriceService=7000;
    }
    this.details.NoOfSeatsService = NoOfSeats;
    this.details.PassengerNameService = PassengerName;
    this.details.PassengerAgeService = PassengerAge;
    this.details.GenderService = Gender;

    console.log(ClassType);
    console.log(NoOfSeats);
    console.log(PassengerName);
    console.log(PassengerAge);
    console.log(Gender);
    if(ClassType == null){
      alert("Please Choose the  ClassType");
    }
    else if(NoOfSeats == 0)
    {
      alert("Please Select the seats");
    }
    else if(PassengerName == null)
    {
      alert("Please Enter the Passenger Name");
    }
    else if(PassengerAge == 0)
    {
      alert("Please Enter Valid Age");
    }
    else if(Gender == null)
    {
      alert("Please select the Gender");
    }
    else{
      this.details.InsertPassenger(this.ClassType1,NoOfSeats,PassengerName,PassengerAge,Gender,this.Price1);
      this.route.navigate(['/pricecheck']);
    }
    this.details.GetTicket();
  }

}
