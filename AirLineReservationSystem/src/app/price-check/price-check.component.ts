import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-check',
  templateUrl: './price-check.component.html',
  styleUrls: ['./price-check.component.css']
})
export class PriceCheckComponent implements OnInit {
  photopath = 'assets/Images/FlightBG-2.jpg';

  constructor(private priceobj:FlightSearchService,private route:Router) { }

  ngOnInit() {
  }

  PriceCheck()
  {
      this.route.navigate(['/ticketdetail']);
  }
}
