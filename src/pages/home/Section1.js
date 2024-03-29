import React from 'react';
import entrepreneur_conductor from '../../assets/images/entrepreneur_conductor.png';

function Section1() {
  return (
    <section className="section section1">
        <div className="heading">
            <h1>Manage your Invoices like a boss.</h1>
            <p>Create beautiful invoices, accept online payments, and make accounting easy—all in one<br></br>place—with Wave's suite of money management tools.</p>
        </div>
        <div className="content">
            <div className="cta-form">
                <h3>Create free account now!</h3>
                <input type="email" placeholder="Enter your email" />
                <input type="email" placeholder="Enter your email" />
                <button>Create account</button>
                <small>By signing up, you are indicating that you have read and agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</small>
            </div>
            <div className="illustration">
                <img src={entrepreneur_conductor} alt="Manage Invoices Illustration" />
            </div>
        </div>
    </section>
  )
}

export default Section1
