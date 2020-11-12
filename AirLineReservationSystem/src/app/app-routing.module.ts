import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { RegisterListComponent } from './register-list/register-list.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { TermsandConditionsComponent } from './termsand-conditions/termsand-conditions.component';
import { PaymentComponent } from './payment/payment.component';
import { PriceCheckComponent } from './price-check/price-check.component';
import { TicketdetailComponent } from './ticketdetail/ticketdetail.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomePageComponent},
  {path:'registers',component:RegisterComponent},
  {path:'listregister',component:RegisterListComponent},
  {path:'searchflight',component:FlightSearchComponent},
  {path:'flightbooking',component:FlightBookingComponent},
  {path:'termsandconditions',component:TermsandConditionsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'payment',component:PaymentComponent},
  {path:'pricecheck',component:PriceCheckComponent},
  {path:'ticketdetail',component:TicketdetailComponent },
  {path:'about',component:AboutUsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
