import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main>
      <section className="page-hero">
        <span className="section-label">CONTACT US</span>

        <h1>
          We're here when
          <br />
          you're <em>ready.</em>
        </h1>

        <p>
          Ask a question, enquire about treatment or arrange your first
          consultation with our dental team.
        </p>
      </section>

      <section className="contact-page section">
        <div className="contact-details">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Talk to Amani Dental Centre.</h2>

          <div className="contact-item">
            <Phone />
            <div>
              <span>PHONE</span>
              <strong>+254 712 345 678</strong>
            </div>
          </div>

          <div className="contact-item">
            <Mail />
            <div>
              <span>EMAIL</span>
              <strong>hello@amanidental.co.ke</strong>
            </div>
          </div>

          <div className="contact-item">
            <MapPin />
            <div>
              <span>LOCATION</span>
              <strong>Nairobi, Kenya</strong>
            </div>
          </div>

          <div className="contact-item">
            <Clock />
            <div>
              <span>OPENING HOURS</span>
              <strong>Monday–Saturday, 8:00 AM–6:00 PM</strong>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <span className="section-label">SEND AN ENQUIRY</span>
          <h2>How can we help?</h2>

          <div className="form-row">
            <input type="text" placeholder="Your name" />
            <input type="tel" placeholder="Phone number" />
          </div>

          <input type="email" placeholder="Email address" />

          <select defaultValue="">
            <option value="" disabled>
              Treatment you're interested in
            </option>
            <option>Braces</option>
            <option>Teeth Whitening</option>
            <option>Veneers</option>
            <option>Dental Implants</option>
            <option>Teeth Cleaning</option>
            <option>Root Canal</option>
            <option>General Consultation</option>
          </select>

          <textarea placeholder="Tell us how we can help..." />

          <button className="btn btn-primary">Send Enquiry</button>
        </form>
      </section>

      <section className="map-placeholder">
        <div>
          <MapPin size={30} />
          <strong>AMANI DENTAL CENTRE</strong>
          <span>Nairobi, Kenya</span>
          <small>Interactive Google Map can be connected here</small>
        </div>
      </section>
    </main>
  );
}