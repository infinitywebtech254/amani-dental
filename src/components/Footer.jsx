import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="logo footer-logo">
            <div className="logo-mark">A</div>
            <div>
              <strong>AMANI</strong>
              <span>DENTAL CENTRE</span>
            </div>
          </Link>

          <p>
            Modern, thoughtful dental care for healthy smiles and
            confident patients in Nairobi.
          </p>

          <Link to="/book-consultation" className="footer-book">
            Book a Consultation <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-column">
          <h4>Treatments</h4>
          <Link to="/services/braces">Braces</Link>
          <Link to="/services/teeth-whitening">Teeth Whitening</Link>
          <Link to="/services/veneers">Veneers</Link>
          <Link to="/services/dental-implants">Dental Implants</Link>
          <Link to="/services/teeth-cleaning">Teeth Cleaning</Link>
          <Link to="/services/root-canal">Root Canal</Link>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact</h4>
          <span><Phone size={16} /> +254 712 345 678</span>
          <span><Mail size={16} /> hello@amanidental.co.ke</span>
          <span><MapPin size={16} /> Nairobi, Kenya</span>
          <span><Clock size={16} /> Mon–Sat, 8 AM–6 PM</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Amani Dental Centre. Demo website.</span>
        <span>Website concept by Alpha Infinity WebTech</span>
      </div>
    </footer>
  );
}