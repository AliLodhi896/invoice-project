import React from 'react';
import featureImage1 from '../../assets/images/featureImage1.png';
import featureImage2 from '../../assets/images/featureImage2.png';
import featureImage3 from '../../assets/images/featureImage3.png';

function Section4() {
  return (
    <section className="section section4">
        <h2>Pocket- and small business-<br></br>friendly perks</h2>
        <p>Ready to invoice in style, bookkeep less, and get paid fast? You're in the right place.</p>
        <div className="features-container">
            <div className="feature">
                <h3>Look professional with customizable invoices</h3>
                <p>Description of feature one...</p>
                <img src={featureImage1} alt="Customizable Invoices" />
            </div>
            <div className="feature">
                <h3>Make tax time a breeze</h3>
                <p>Description of feature two...</p>
                <img src={featureImage2} alt="Track Time" />
            </div>
            <div className="feature">
                <h3>Enjoy customers paying you 3x faster</h3>
                <p>Description of feature three...</p>
                <img src={featureImage3} alt="Online Payments" />
            </div>
        </div>
    </section>
  )
}

export default Section4
