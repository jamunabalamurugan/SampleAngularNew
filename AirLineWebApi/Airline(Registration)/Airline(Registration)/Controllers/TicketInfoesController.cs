using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Airline_Registration_.Models;

namespace Airline_Registration_.Controllers
{
    public class TicketInfoesController : ApiController
    {
        private AirlineReservationSystemEntities db = new AirlineReservationSystemEntities();

        // GET: api/TicketInfoes
        public IQueryable<TicketInfo> GetTicketInfoes()
        {
            return db.TicketInfoes;
        }

        // GET: api/TicketInfoes/5
        [ResponseType(typeof(TicketInfo))]
        public IHttpActionResult GetTicketInfo(int id)
        {
            TicketInfo ticketInfo = db.TicketInfoes.Find(id);
            if (ticketInfo == null)
            {
                return NotFound();
            }

            return Ok(ticketInfo);
        }

        // PUT: api/TicketInfoes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTicketInfo(int id, TicketInfo ticketInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ticketInfo.Ticketid)
            {
                return BadRequest();
            }

            db.Entry(ticketInfo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TicketInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TicketInfoes
        [ResponseType(typeof(TicketInfo))]
        public IHttpActionResult PostTicketInfo(TicketInfo ticketInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.PostInsert(ticketInfo.ProfileId, ticketInfo.FlightNumber, ticketInfo.PassengerName, ticketInfo.ClassId, ticketInfo.PassengerAge, ticketInfo.SeatNumber, ticketInfo.nooftickets, ticketInfo.amount, ticketInfo.Gender);
           // db.TicketInfoes.Add(ticketInfo);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = ticketInfo.Ticketid }, ticketInfo);

        }

        // DELETE: api/TicketInfoes/5
        [ResponseType(typeof(TicketInfo))]
        public IHttpActionResult DeleteTicketInfo(int id)
        {
            TicketInfo ticketInfo = db.TicketInfoes.Find(id);
            if (ticketInfo == null)
            {
                return NotFound();
            }

            db.TicketInfoes.Remove(ticketInfo);
            db.SaveChanges();

            return Ok(ticketInfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TicketInfoExists(int id)
        {
            return db.TicketInfoes.Count(e => e.Ticketid == id) > 0;
        }
    }
}