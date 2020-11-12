using Airline_Registration_.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Airline_Registration_.Controllers
{
    public class SeatSelectionController : ApiController
    {
        private AirlineReservationSystemEntities db = new AirlineReservationSystemEntities();

        [HttpGet]
        [Route("seats")]
        public dynamic Get(int fnum)
        {
            //Registration registration = db.Registrations.Find(id);
            return db.SeatsAvailable(fnum);
        }
    }
}
