import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";

export default function TreatmentPage({
  eyebrow,
  title,
  intro,
  image,
  overview,
  benefits,
  steps,
  price
}) {
  return (
    <main>
      <section className="treatment-hero">
        <div className="treatment-hero-copy">
          <span className="section-label">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>

          <div className="hero-actions">
            <Link to="/book-consultation" className="btn btn-primary">
              Book Consultation <ArrowRight size={18} />
            </Link>

            <a href="tel:+254712345678" className="btn btn-outline">
              <Phone size={17} /> Call Clinic
            </a>
          </div>
        </div>

        <div className="treatment-hero-image">
          <img src={image} alt={title} />
        </div>
      </section>

      <section className="treatment-overview section">
        <div>
          <span className="section-label">ABOUT THE TREATMENT</span>
          <h2>Care designed around your smile.</h2>
        </div>

        <div>
          <p className="large-copy">{overview}</p>

          <div className="benefit-list">
            {benefits.map((benefit) => (
              <div key={benefit}>
                <Check size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="treatment-process section">
        <div className="section-heading">
          <span className="section-label">WHAT TO EXPECT</span>
          <h2>Your treatment journey.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <article key={step}>
              <span>0{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="treatment-price">
        <div>
          <span className="section-label">INDICATIVE PRICE</span>
          <h2>{price}</h2>
          <p>
            Final treatment costs depend on your individual dental needs
            and are confirmed after consultation.
          </p>
        </div>

        <Link to="/book-consultation" className="btn btn-dark">
          Start With a Consultation <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}