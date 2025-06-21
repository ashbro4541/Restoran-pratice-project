import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Column */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#!" className="text-light text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#!" className="text-light text-decoration-none">Contact Us</a></li>
              <li className="mb-2"><a href="#!" className="text-light text-decoration-none">Reservation</a></li>
              <li className="mb-2"><a href="#!" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#!" className="text-light text-decoration-none">Terms & Condition</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2">123 Street, New York, USA</li>
              <li className="mb-2">+012 345 67890</li>
              <li>info@example.com</li>
            </ul>
          </div>

          {/* Opening Column */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">Opening</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Monday - Saturday</li>
              <li className="mb-2">09AM - 09PM</li>
              <li className="mb-2">Sunday</li>
              <li>10AM - 08PM</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">Newsletter</h5>
            <p className="text-secondary">Dolor amet sit justo amet elitr citta ipsum elitr est.</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email" 
                aria-label="Email"
              />
              <button className="btn btn-primary" type="button">
                SIGNUP
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center py-4 mt-4 border-top border-secondary">
          <div className="mb-2">
            © Your Site Name, All Right Reserved. Designed By HTML Codex
          </div>
          <div className="mb-2">
            Distributed By ThemeWagon
          </div>
          <div className="d-flex justify-content-center gap-3">
            <a href="#!" className="text-light text-decoration-none">Home</a>
            <a href="#!" className="text-light text-decoration-none">Cookies</a>
            <a href="#!" className="text-light text-decoration-none">Help</a>
            <a href="#!" className="text-light text-decoration-none">FOAs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;