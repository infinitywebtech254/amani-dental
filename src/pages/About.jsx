import { Link } from "react-router-dom";
import { ArrowRight, Heart, MessageCircle, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <span className="section-label">ABOUT AMANI</span>

        <h1>
          Good dentistry starts
          <br />
          with <em>trust.</em>
        </h1>

        <p>
          A modern dental centre concept built around comfortable care,
          clear communication and treatment tailored to the individual.
        </p>
      </section>

      <section className="about-story section">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1300&q=85"
            alt="Dental clinic"
          />
        </div>

        <div className="about-story-copy">
          <span className="section-label">OUR APPROACH</span>

          <h2>
            Your smile. Your questions.
            <br />
            Your treatment plan.
          </h2>

          <p>
            We believe patients should understand their dental care. That
            means taking time to listen, explain treatment options and
            create a plan that makes sense for your needs.
          </p>

          <p>
            Whether you're visiting for routine care or considering a
            larger smile transformation, the goal is the same: thoughtful,
            professional treatment delivered with respect.
          </p>
        </div>
      </section>

      <section className="values section">
        <div>
          <Heart />
          <h3>Care</h3>
          <p>We treat every patient as an individual.</p>
        </div>

        <div>
          <MessageCircle />
          <h3>Communication</h3>
          <p>We explain your options clearly before treatment begins.</p>
        </div>

        <div>
          <ShieldCheck />
          <h3>Professionalism</h3>
          <p>Thoughtful clinical care with attention to safety and hygiene.</p>
        </div>
      </section>

      <section className="simple-cta">
        <h2>Come and talk to us.</h2>
        <p>
          Your first consultation is an opportunity to discuss your smile
          and understand your options.
        </p>

        <Link to="/book-consultation" className="btn btn-primary">
          Book Consultation <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}