using Airline_Registration_.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Airline_Registration_.Controllers
{
    public class FlightSearchController : ApiController
    {
        private AirlineReservationSystemEntities db = new AirlineReservationSystemEntities();

        public dynamic Get(DateTime date, string sloc, string dloc)
        {
            var res = db.FinalFlightSearch(date, sloc, dloc);
            if (res.Count() == 0)
            {
                return 0;
            }
            //Registration registration = db.Registrations.Find(id);
            return db.FinalFlightSearch(date, sloc, dloc);
        }

    }
}
