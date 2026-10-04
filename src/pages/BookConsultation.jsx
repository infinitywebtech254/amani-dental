import { CalendarDays, Phone } from "lucide-react";

export default function BookConsultation() {
  return (
    <main>
      <section className="booking-page">
        <div className="booking-copy">
          <span className="section-label">BOOK A CONSULTATION</span>

          <h1>
            Your smile journey
            <br />
            starts <em>here.</em>
          </h1>

          <p>
            Tell us what you'd like help with and your preferred
            appointment details. Our clinic team can then contact you to
            confirm availability.
          </p>

          <div className="booking-contact">
            <Phone size={19} />
            <div>
              <span>Prefer to call?</span>
              <strong>+254 712 345 678</strong>
            </div>
          </div>
        </div>

        <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-heading">
            <CalendarDays />
            <div>
              <span>APPOINTMENT REQUEST</span>
              <h2>Book your visit</h2>
            </div>
          </div>

          <div className="form-row">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>

          <div className="form-row">
            <input type="tel" placeholder="Phone number" />
            <input type="email" placeholder="Email address" />
          </div>

          <select defaultValue="">
            <option value="" disabled>Select treatment</option>
            <option>Braces</option>
            <option>Teeth Whitening</option>
            <option>Veneers</option>
            <option>Dental Implants</option>
            <option>Teeth Cleaning</option>
            <option>Root Canal</option>
            <option>General Consultation</option>
          </select>

          <div className="form-row">
            <input type="date" />
            <select defaultValue="">
              <option value="" disabled>Preferred time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>

          <textarea placeholder="Anything you'd like the dentist to know?" />

          <button className="btn btn-primary">
            Request Consultation
          </button>

          <small>
            This is an appointment request. The clinic will confirm the
            final date and time.
          </small>
        </form>
      </section>
    </main>
  );
}