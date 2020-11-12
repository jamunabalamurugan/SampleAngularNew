using Airline_Registration_.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Airline_Registration_.Controllers
{
    public class InserTicketsController : ApiController
    {
        private AirlineReservationSystemEntities db = new AirlineReservationSystemEntities();

        //public int Get(Nullable<int> pid, Nullable<int> fnum, string pname, Nullable<int> cid, Nullable<int> pAge, Nullable<int> sno, Nullable<int> nooftickets, Nullable<int> amt, string gen)
        //{
        //    return db.PostInsert(pid, fnum, pname, cid, pAge, sno, nooftickets, amt, gen);
        //}

        public IHttpActionResult Get(Nullable<int> pid, Nullable<int> fnum, string pname, Nullable<int> cid, Nullable<int> pAge, Nullable<int> sno, Nullable<int> nooftickets, Nullable<int> amt, string gen)
        {
            //Registration registration = db.Registrations.Find(id);
       
            db.PostInsert(pid, fnum, pname, cid, pAge, sno, nooftickets, amt, gen);
            return Ok();
        }

    }
}
