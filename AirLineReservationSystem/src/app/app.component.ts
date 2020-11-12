import { Component } from '@angular/core';
import { CitysearchService } from './citysearch.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AirLineReservationSystem';
  photopath = 'assets/Images/logo.png';

  constructor(private data:CitysearchService) { }
  ngOnInit() {
  }
}

