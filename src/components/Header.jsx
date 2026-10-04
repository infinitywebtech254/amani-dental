import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";

const serviceLinks = [
  ["Braces", "/services/braces"],
  ["Teeth Whitening", "/services/teeth-whitening"],
  ["Veneers", "/services/veneers"],
  ["Dental Implants", "/services/dental-implants"],
  ["Teeth Cleaning", "/services/teeth-cleaning"],
  ["Root Canal", "/services/root-canal"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div>
            <span><Phone size={13} /> +254 712 345 678</span>
            <span><Mail size={13} /> hello@amanidental.co.ke</span>
          </div>

          <div>
            <span><MapPin size={13} /> Nairobi, Kenya</span>
            <span><Clock size={13} /> Mon–Sat: 8:00 AM–6:00 PM</span>
          </div>
        </div>
      </div>

      <header className="header">
        <Link to="/" className="logo" onClick={close}>
          <div className="logo-mark">A</div>

          <div>
            <strong>AMANI</strong>
            <span>DENTAL CENTRE</span>
          </div>
        </Link>

        <nav className={open ? "nav nav-open" : "nav"}>
          <NavLink to="/" onClick={close}>Home</NavLink>

          <div className="services-nav">
            <button
              className="services-trigger"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={15} />
            </button>

            <div
              className={
                servicesOpen
                  ? "services-dropdown dropdown-open"
                  : "services-dropdown"
              }
            >
              <Link to="/services" onClick={close}>
                <strong>All Dental Services</strong>
                <small>Explore our complete range of treatments</small>
              </Link>

              {serviceLinks.map(([label, url]) => (
                <Link key={url} to={url} onClick={close}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/pricing" onClick={close}>Pricing</NavLink>
          <NavLink to="/about" onClick={close}>About Us</NavLink>
          <NavLink to="/contact" onClick={close}>Contact Us</NavLink>
        </nav>

        <Link to="/book-consultation" className="header-cta">
          Book Consultation
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Open navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}