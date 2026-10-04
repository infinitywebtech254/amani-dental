import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Braces",
    description:
      "Orthodontic treatment for improving tooth alignment and bite.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyZQQtduUOJSh-Lm0liteU1HW54eNbImyu15SvPpY8g&s=10",
    url: "/services/braces"
  },
  {
    name: "Teeth Whitening",
    description:
      "Professional treatment designed to brighten your natural smile.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYB618qXYt-Ere2dN7-qvxTGytynsGqFXg1S7Vc1zOA&s=10",
    url: "/services/teeth-whitening"
  },
  {
    name: "Veneers",
    description:
      "Cosmetic treatment for improving tooth shape, colour and appearance.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtBMgPP7kORLmxlNAhVgrsb-N3uJT5OHZ6h7-uxYVHg&s=10",
    url: "/services/veneers"
  },
  {
    name: "Dental Implants",
    description:
      "Long-term tooth replacement options for missing teeth.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVJqzdg_vMNuWXk6Uh99Jr-0oY3E2TcmnsihPoUGEtA&s=10",
    url: "/services/dental-implants"
  },
  {
    name: "Teeth Cleaning",
    description:
      "Professional cleaning to support healthy teeth and gums.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQqRGZQuW6kY1MUso8Jkc9ogmOGiLcjVn47N37Fd_GQ&s=10",
    url: "/services/teeth-cleaning"
  },
  {
    name: "Root Canal",
    description:
      "Treatment focused on saving and restoring an infected or damaged tooth.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdgesgNuFJZezU_CaD-WBvxqgr-Z2FP9lhdXG0TjJbw&s=10",
    url: "/services/root-canal"
  }
];

export default function Services() {
  return (
    <main>
      <section className="page-hero">
        <span className="section-label">OUR SERVICES</span>

        <h1>
          Dental care for
          <br />
          <em>every smile.</em>
        </h1>

        <p>
          From preventive dentistry to orthodontics and cosmetic
          treatments, explore care designed around your individual needs.
        </p>
      </section>

      <section className="services-page section">
        <div className="services-page-grid">
          {services.map((service, index) => (
            <Link
              to={service.url}
              className="service-page-card"
              key={service.name}
            >
              <div className="service-image">
                <img src={service.image} alt={service.name} />
              </div>

              <div className="service-card-copy">
                <span>0{index + 1}</span>
                <h2>{service.name}</h2>
                <p>{service.description}</p>

                <strong>
                  Learn More <ArrowRight size={17} />
                </strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="simple-cta">
        <h2>Not sure which treatment you need?</h2>
        <p>
          Start with a consultation and we'll discuss your concerns,
          options and next steps.
        </p>

        <Link to="/book-consultation" className="btn btn-primary">
          Book Consultation <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}