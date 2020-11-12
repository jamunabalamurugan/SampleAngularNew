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
    public class CardDetailsController : ApiController
    {
        private AirlineReservationSystemEntities db = new AirlineReservationSystemEntities();

        // GET: api/CardDetails
        public IQueryable<CardDetail> GetCardDetails()
        {
            return db.CardDetails;
        }

        // GET: api/CardDetails/5
        [ResponseType(typeof(CardDetail))]
        public IHttpActionResult GetCardDetail(long id)
        {
            CardDetail cardDetail = db.CardDetails.Find(id);
            if (cardDetail == null)
            {
                return NotFound();
            }

            return Ok(cardDetail);
        }

        // PUT: api/CardDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCardDetail(long id, CardDetail cardDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cardDetail.CardNumber)
            {
                return BadRequest();
            }

            db.Entry(cardDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CardDetailExists(id))
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

        // POST: api/CardDetails
        [ResponseType(typeof(CardDetail))]
        public IHttpActionResult PostCardDetail(CardDetail cardDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CardDetails.Add(cardDetail);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CardDetailExists(cardDetail.CardNumber))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = cardDetail.CardNumber }, cardDetail);
        }

        // DELETE: api/CardDetails/5
        [ResponseType(typeof(CardDetail))]
        public IHttpActionResult DeleteCardDetail(long id)
        {
            CardDetail cardDetail = db.CardDetails.Find(id);
            if (cardDetail == null)
            {
                return NotFound();
            }

            db.CardDetails.Remove(cardDetail);
            db.SaveChanges();

            return Ok(cardDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CardDetailExists(long id)
        {
            return db.CardDetails.Count(e => e.CardNumber == id) > 0;
        }
    }
}