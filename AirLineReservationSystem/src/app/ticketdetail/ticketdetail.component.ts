import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ticketdetail',
  templateUrl: './ticketdetail.component.html',
  styleUrls: ['./ticketdetail.component.css']
})
export class TicketdetailComponent implements OnInit {

  photopath = 'assets/Images/bye.gif';
  constructor(private priceobj:FlightSearchService,private route:Router) { }

  ngOnInit() {
  }
  
  Print()
  {
    window.print();
  }
}
