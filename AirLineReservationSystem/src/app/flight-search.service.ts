import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightSearch } from './flight-search.model';
import { TicketInfo } from './ticket-info.model';
import { Ticket } from './ticket.model';
import { SeatSelection } from './seat-selection.model';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  FormSearch: FlightSearch;
  ticketlist: Ticket[];
  searchlist: FlightSearch[];
  seatlist : SeatSelection[];
  seat:SeatSelection;
  index=1;
  ProfileID : any;
  FlightNo : any;
  ClassTypeService:number;
  NoOfSeatsService:number;
  PassengerNameService:string;
  PassengerAgeService:number;
  GenderService:string;
  PriceService:number;
  SourceLocation:string;
  DestinationLocation:string;
  TypeClass:string;
  DateofJourney:Date;
  fnum;
  FormBook:TicketInfo;
  SeatAvailablePerClass:number;
  tclass:string;
  DestPrice :number;
  ClassId:number;
  ProfileName;
  result:any[];
  readonly rootURL="http://localhost:58857/api"
  constructor(private http : HttpClient) { 
  //  this.FlightSearchList();
  }

  // this.rootURL+'/SeatSelection?fnum=22001'
  Onseat(fnum)
  {
    {{debugger}}
    this.http.get("http://localhost:58857/seats?fnum=22001")
     .subscribe((seats:any)=>{
       this.result = seats;
     });
     console.log(this.result);

    //  http://localhost:58857/api/SeatSelection?fnum=22001
  }

    FlightSearchList(jdate:Date,sloc:string,dloc:string):void
    {
      {{debugger}}
      this.SourceLocation=sloc;
      this.DestinationLocation = dloc;
      this.DateofJourney = jdate;
      if(this.ClassTypeService == 1)
      {
        this.TypeClass = "FirstClass";
      }
      else if(this.ClassTypeService == 2)
      {
        this.TypeClass = "Business";
      }
      else if(this.ClassTypeService == 3)
      {
        this.TypeClass = "Economy";
      }
     
      this.http.get(this.rootURL+'/Search?date='+jdate+'&sloc='+sloc+'&dloc='+dloc)
     .toPromise().then(res=>{
       if(res==0)
       {
         //alert("no flight found");
         this.index=res as number;
       }
       else{
       this.searchlist=res as FlightSearch[]
      }
      });
    }
    InsertPassenger(ClassType:number,NoOfSeats: number, PassengerName: string, PassengerAge: number, Gender: string,Price:number) 
    {
      {{debugger}}
      console.log(this.ClassTypeService);
      console.log(this.GenderService);
      console.log(this.NoOfSeatsService);
      console.log(this.PassengerNameService);
      console.log(this.PassengerAgeService);
      console.log(this.PriceService);
      console.log(this.ProfileID);
      console.log(this.FlightNo);
      this.FormBook.ProfileId = this.ProfileID;
      this.FormBook.FlightNumber=this.FlightNo;
      this.FormBook.PassengerName=this.PassengerNameService;
      this.FormBook.ClassId =this.ClassTypeService;
      this.FormBook.SeatNumber=10;
      this.FormBook.PassengerAge=this.PassengerAgeService;
      this.FormBook.nooftickets=this.NoOfSeatsService;
      this.FormBook.amount = this.PriceService;
      this.FormBook.Gender = this.GenderService;
      console.log(this.FormBook);

      this.PostTicketInfo(this.FormBook);

    //   this.http.get(this.rootURL+'/InserTickets?pid='+this.ProfileID+'&fnum='+this.FlightNo+'&pname'+this.PassengerNameService+
    //   '&cid='+this.ClassTypeService+'&pAge='+this.PassengerAgeService+'&sno='+14+'&nooftickets='+this.NoOfSeatsService+
    //   '&amt='+this.PriceService+'&gen='+this.GenderService)
    //  .subscribe();

      // PassengerPayment(NoOfSeats,PassengerName,PassengerAge,Gender);
    }



    PostTicketInfo(FormBook : TicketInfo)
    {
      {{debugger}}
      return this.http.post(this.rootURL+'/TicketInfoes',FormBook).subscribe();

      // http://localhost:58857/api/Ticketinfoes
    }  
    // InserTickets?pid=11111&fnum=22001&pname=Manjunath&cid=1&pAge=22&sno=12&nooftickets=1&amt=6000&gen=Male
    Login(ProfileId:number)
    {
        {{debugger}}
        console.log(ProfileId);
        console.log(this.ProfileID);

    }
    // postSearchService()
    // {
    //   {{debugger}}
      
    // }

    GetTicket():void
    {
      {{debugger}}
      this.http.get(this.rootURL+'/Tickets?pid='+this.ProfileID+'&age='+this.PassengerAgeService)
     .toPromise().then(res=>this.ticketlist=res as Ticket[]);
     console.log(this.ticketlist);
    }
  
}

