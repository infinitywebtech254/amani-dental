import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const prices = [
  ["Dental Consultation", "From KES 1,500"],
  ["Teeth Cleaning", "From KES 4,000"],
  ["Teeth Whitening", "From KES 12,000"],
  ["Root Canal Treatment", "From KES 15,000"],
  ["Veneers", "From KES 20,000 / tooth"],
  ["Braces", "From KES 30,000"],
  ["Dental Implants", "From KES 80,000"]
];

export default function Pricing() {
  return (
    <main>
      <section className="page-hero">
        <span className="section-label">TREATMENT PRICING</span>

        <h1>
          Clear information.
          <br />
          <em>Personal treatment.</em>
        </h1>

        <p>
          These indicative prices help you understand potential treatment
          costs before your consultation.
        </p>
      </section>

      <section className="pricing section">
        <div className="pricing-list">
          {prices.map(([name, price], index) => (
            <div className="price-row" key={name}>
              <span>0{index + 1}</span>
              <h2>{name}</h2>
              <strong>{price}</strong>
            </div>
          ))}
        </div>

        <div className="price-note">
          <h3>Please note</h3>
          <p>
            Prices shown are for demonstration purposes and represent
            indicative starting points only. Final treatment costs depend
            on individual needs and are confirmed following assessment.
          </p>

          <Link to="/book-consultation" className="btn btn-primary">
            Book Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}