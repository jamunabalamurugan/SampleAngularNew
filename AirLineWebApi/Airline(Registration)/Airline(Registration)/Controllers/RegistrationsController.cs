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
    public class RegistrationsController : ApiController
    {
        private AirlineReservationSystemEntities db = new AirlineReservationSystemEntities();

        // GET: api/Registrations
        public IQueryable<Registration> GetRegistrations()
        {
            return db.Registrations;
        }

        // GET: api/Registrations/5
        [ResponseType(typeof(Registration))]
        public IHttpActionResult GetRegistration(int id)
        {
            Registration registration = db.Registrations.Find(id);
            if (registration == null)
            {
                return NotFound();
            }

            return Ok(registration);
        }

        // PUT: api/Registrations/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRegistration(int id, Registration registration)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != registration.ProfileId)
            {
                return BadRequest();
            }

            db.Entry(registration).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegistrationExists(id))
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

        // POST: api/Registrations
        [ResponseType(typeof(Registration))]
        public IHttpActionResult PostRegistration(Registration registration)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Registrations.Add(registration);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = registration.ProfileId }, registration);
        }

        // DELETE: api/Registrations/5
        [ResponseType(typeof(Registration))]
        public IHttpActionResult DeleteRegistration(int id)
        {
            Registration registration = db.Registrations.Find(id);
            if (registration == null)
            {
                return NotFound();
            }

            db.Registrations.Remove(registration);
            db.SaveChanges();

            return Ok(registration);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RegistrationExists(int id)
        {
            return db.Registrations.Count(e => e.ProfileId == id) > 0;
        }
    }
}