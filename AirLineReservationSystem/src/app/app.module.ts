import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

import { RegisterComponent } from './register/register.component';
import { RegisterListComponent } from './register-list/register-list.component';
import { RegisterService } from './register.service';
import { CitysearchService } from './citysearch.service';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { TermsandConditionsComponent } from './termsand-conditions/termsand-conditions.component';
import { PaymentComponent } from './payment/payment.component';
import { PriceCheckComponent } from './price-check/price-check.component';
import { TicketdetailComponent } from './ticketdetail/ticketdetail.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    RegisterComponent,
    RegisterListComponent,
    FlightSearchComponent,
    FlightBookingComponent,
    TermsandConditionsComponent,
    PaymentComponent,
    PriceCheckComponent,
    TicketdetailComponent,
    UserNavigationComponent,
    HomeNavComponent,
    AboutUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegisterService,CitysearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
