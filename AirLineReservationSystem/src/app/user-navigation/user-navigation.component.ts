import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.css']
})
export class UserNavigationComponent implements OnInit {

  constructor(private profile:FlightSearchService,private route:Router) { }

  ngOnInit() {
  }

  Logout()
  {
    this.profile.ProfileID = null;
    this.route.navigate(['/home']);
  }
}
