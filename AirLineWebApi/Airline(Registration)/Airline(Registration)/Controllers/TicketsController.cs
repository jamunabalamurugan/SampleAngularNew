using Airline_Registration_.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Airline_Registration_.Controllers
{
    public class TicketsController : ApiController
    {
        private AirlineReservationSystemEntities db = new AirlineReservationSystemEntities();

        public dynamic Get(Nullable<int> pid,Nullable<int> age)
        {
            return db.DisplayTicket(pid,age);
        }

    }
}
