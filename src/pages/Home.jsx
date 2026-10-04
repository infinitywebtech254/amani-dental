import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ShieldCheck,
  Heart,
  Sparkles,
  Star
} from "lucide-react";

const treatments = [
  {
    name: "Braces",
    text: "Orthodontic treatment designed to gradually improve tooth alignment and your bite.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMNDu36ZtSi4vN0tWz34f_5uGzr85SI5Q3cVmdEHg8g&s=10",
    url: "/services/braces"
  },
  {
    name: "Teeth Whitening",
    text: "Professional whitening options for a noticeably brighter, refreshed smile.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsQGFf5IRpwDTvwf_tmboPowDQSit6m4PHbm118dXzQ&s=10",
    url: "/services/teeth-whitening"
  },
  {
    name: "Veneers",
    text: "A cosmetic option for improving the shape, colour and overall appearance of your smile.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczCR8Tv1Nu55TGSfclpwfgHnf_4gETVy4Y9mjlDzI-A&s=10",
    url: "/services/veneers"
  }
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-image">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1800&q=90"
            alt="Dental consultation"
          />
        </div>

        <div className="hero-overlay" />

        <div className="home-hero-copy">
          <span className="hero-kicker">
            MODERN DENTAL CARE • NAIROBI
          </span>

          <h1>
            CONFIDENT SMILES
            <br />
            START WITH <em>GREAT CARE.</em>
          </h1>

          <p>
            From routine dental care to braces, whitening and cosmetic
            treatments, we're here to help you feel comfortable,
            informed and confident about your smile.
          </p>

          <div className="hero-actions">
            <Link to="/book-consultation" className="btn btn-primary">
              Book Consultation <ArrowRight size={18} />
            </Link>

            <Link to="/services" className="btn btn-hero-outline">
              Explore Treatments
            </Link>
          </div>
        </div>

        <div className="hero-trust">
          <div>
            <strong>Personal</strong>
            <span>Care built around you</span>
          </div>

          <div>
            <strong>Modern</strong>
            <span>Thoughtful treatment options</span>
          </div>

          <div>
            <strong>Convenient</strong>
            <span>Easy consultation booking</span>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div className="intro-heading">
          <span className="section-label">WELCOME TO AMANI</span>

          <h2>
            Dentistry that puts
            <br />
            <em>people first.</em>
          </h2>
        </div>

        <div className="intro-copy">
          <p>
            Visiting the dentist should feel reassuring, not intimidating.
            At Amani Dental Centre, our approach combines clear
            communication, thoughtful treatment planning and modern dental
            care.
          </p>

          <Link to="/about" className="text-link">
            Discover our approach <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="featured section">
        <div className="section-heading">
          <div>
            <span className="section-label">POPULAR TREATMENTS</span>
            <h2>Care for every smile.</h2>
          </div>

          <Link to="/services" className="text-link">
            View all services <ArrowRight size={17} />
          </Link>
        </div>

        <div className="treatment-cards">
          {treatments.map((item) => (
            <Link to={item.url} className="treatment-card" key={item.name}>
              <div className="treatment-card-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="treatment-card-copy">
                <span>DENTAL TREATMENT</span>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <strong>
                  Explore Treatment <ArrowRight size={16} />
                </strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="why-us">
        <div className="why-image">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1300&q=85"
            alt="Modern dental clinic"
          />
        </div>

        <div className="why-copy">
          <span className="section-label light-label">WHY AMANI?</span>

          <h2>
            Dental care should feel
            <br />
            <em>comfortable.</em>
          </h2>

          <p>
            We want every patient to understand their options and feel
            comfortable throughout their treatment journey.
          </p>

          <div className="why-points">
            <div>
              <Heart />
              <h3>Patient-first care</h3>
              <p>Clear conversations and treatment centred around you.</p>
            </div>

            <div>
              <ShieldCheck />
              <h3>Professional standards</h3>
              <p>A thoughtful approach to safety, hygiene and care.</p>
            </div>

            <div>
              <Sparkles />
              <h3>Modern dentistry</h3>
              <p>Treatment options for both oral health and confidence.</p>
            </div>

            <div>
              <CalendarDays />
              <h3>Easy appointments</h3>
              <p>Book your consultation online or reach us on WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial section">
        <span className="section-label">PATIENT EXPERIENCE</span>

        <div className="stars">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} size={18} fill="currentColor" />
          ))}
        </div>

        <blockquote>
          “A dental visit should leave you feeling informed, cared for and
          confident about what comes next.”
        </blockquote>

        <p>THE AMANI APPROACH</p>
      </section>

      <section className="home-cta">
        <div>
          <span>READY WHEN YOU ARE.</span>
          <h2>Let's talk about your smile.</h2>
        </div>

        <Link to="/book-consultation" className="btn btn-light">
          Book Your Consultation <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}