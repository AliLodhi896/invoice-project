import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/Footer.css";
import invoicingIcon from "../assets/images/invoicingIcon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faInvision } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <img src={invoicingIcon} alt="invoicing logo icon" className="footer-logo" />
            <div className="footer-social-media">
              <Link to='#'><FontAwesomeIcon icon={faFacebook} className="icon" /></Link>
              <Link to='#'><FontAwesomeIcon icon={faInstagram} className="icon" /></Link>
              <Link to='#'><FontAwesomeIcon icon={faInvision} className="icon" /></Link>
            </div>
          </div>
          <div className="footer-column">
            <h4>FEATURES</h4>
            <ul>
              <Link to='#'><li>Accounting software</li></Link>
              <Link to='#'><li>Invoicing software</li></Link>
              <Link to='#'><li>Invoicing app</li></Link>
              <Link to='#'><li>Payments</li></Link>
              <Link to='#'><li>Payroll software</li></Link>
              <Link to='#'><li>Wave advisors</li></Link>
              <Link to='#'><li>Pricings</li></Link>
              <Link to='#'><li>Credit card payments</li></Link>
              <Link to='#'><li>Bank payments</li></Link>
              <Link to='#'><li>Recurring billing</li></Link>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Invoicing App</h4>
            <ul>
              <Link to='#'><li>About Us</li></Link>
              <Link to='#'><li>Careers</li></Link>
              <Link to='#'><li>Press</li></Link>
              <Link to='#'><li>Sitemap</li></Link>

              <Link to='/admin/dashboard'><li>Dashboard</li></Link>
              <Link to='/admin/invoices'><li>Invoices</li></Link>
              <Link to='/admin/customers'><li>Customers</li></Link>
              <Link to='/admin/transactions'><li>Trasactions</li></Link>

            </ul>
          </div>
          <div className="footer-column">
            <h4>SUPPORT & TOOLS</h4>
            <ul>
              <Link to='#'><li>How support works</li></Link>
              <Link to='#'><li>System status</li></Link>
              <Link to='#'><li>Accounting calculators</li></Link>
              <Link to='#'><li>Invoicing generators</li></Link>
              <Link to='#'><li>Payroll calculators</li></Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <p>Copyright © 2023-2024 Invoicing app. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
