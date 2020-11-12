import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  photopath = 'assets/Images/FlightBG-1.jpg';

  search:any[];
  Noflight:number;
  constructor(private searchlistobj:FlightSearchService,private route:Router) { }

  ngOnInit() {
    this.search = this.searchlistobj.searchlist;
  }

  OnSelect(fnumber)
  {
    
    
    {{debugger}}
    this.searchlistobj.fnum=fnumber;
    this.searchlistobj.Onseat(fnumber);
    for (let val of this.searchlistobj.searchlist) 
    {
      console.log(val);
      this.searchlistobj.FlightNo = val.FlightNumber;
    }  
    if(this.searchlistobj.ProfileID == null)
    {
      this.route.navigate(['/login']);
    }
    else
    {
      this.route.navigate(['/flightbooking']);
    }

  }
  // OnSeat(this.searchlistobj.FlightNo)
  // {

  // }
  
  OnSearch(jdate:Date,sloc:string,dloc:string)
  {
    
    this.searchlistobj.FlightSearchList(jdate,sloc,dloc);
    
  }

  FlightSearchComp(jdate:Date,sloc:string,dloc:string)
  {
    this.searchlistobj.FlightSearchList(jdate,sloc,dloc);
  }

}
