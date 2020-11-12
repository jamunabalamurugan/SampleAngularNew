import { Component, OnInit } from '@angular/core';
import { CitysearchService } from '../citysearch.service';
import { FlightSearchService } from '../flight-search.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  photopath = 'assets/Images/giphy.gif';
  cardbng = 'assets/Images/card-2bng.jpg';
  cardchn = 'assets/Images/chnn.jpg';
  cardhyd = 'assets/Images/hyd.jpg';
  cardpune = 'assets/Images/pune.png';
  cardmum = 'assets/Images/mum.jpg';
  carddel = 'assets/Images/delhi.jpg';
  cardamr = 'assets/Images/amritsar.jpg';
  cardgoa = 'assets/Images/goa1.jpg';
  constructor(private data:CitysearchService, private searchobj:FlightSearchService,private route:Router) {

   this.searchobj.FormSearch={
    JourneyDate:null,
    FlightNumber:null,
    SourceLocation:null,
    DestinationLocation:null,
    DepartureTime:null,
    SeatAvailablePerClass:null
   }
   
   }

  // isCollapsed : boolean = true;
  // isCollapsed1 : boolean = true;
jdate:Date;
sloc:string;
dloc:string;
  ngOnInit() {

  }

  OnSearch(jdate:HTMLInputElement,sloc:HTMLInputElement,dloc:HTMLInputElement)
  {
    {{debugger}}
    console.log(jdate);
    console.log(sloc);

    if(sloc.value==null)
    {
      alert("Please Enter the Source Location");
    }
    else if(dloc.value==null)
    {
      alert("Please Enter the Destination Location");
    }
    else if(jdate.value=="")
    {
      alert("Please choose your Date");
    }
    else{
      this.searchobj.FlightSearchList(this.jdate,sloc.value,dloc.value);
      console.log(this.jdate);
      this.route.navigate(['/searchflight']);
    }
    
    
  }


  // dataToggle()
  // {
  //   this.isCollapsed = !this.isCollapsed;
  // }

  // dataToggle1()
  // {
  //   this.isCollapsed1 = !this.isCollapsed1;
  // }

}
