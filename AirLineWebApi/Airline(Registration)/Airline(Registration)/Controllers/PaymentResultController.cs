using Airline_Registration_.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Airline_Registration_.Controllers
{
    public class PaymentResultController : ApiController
    {
        private AirlineReservationSystemEntities db = new AirlineReservationSystemEntities();

        public IEnumerable<Payment_Result> Get(int id)
        {
            //Registration registration = db.Registrations.Find(id);
            return db.Payment(id);
        }
    }
}
