import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';

@Component({
  selector: 'app-termsand-conditions',
  templateUrl: './termsand-conditions.component.html',
  styleUrls: ['./termsand-conditions.component.css']
})
export class TermsandConditionsComponent implements OnInit {

  constructor(private terms:FlightSearchService) { }

  ngOnInit() {
  }

}
