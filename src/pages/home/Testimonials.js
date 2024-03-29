import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carlosDelMoral from "../../assets/images/carlosDelMoral.png";
import estelleTracy from "../../assets/images/estelleTracy.png";
import tatiyanaW from "../../assets/images/tatiyanaW.png"

const testimonials = [
    {
      image: tatiyanaW,
      name: "Tatiyanna W.",
      title: "TruCretes.com",
      quote: "Wave invoicing makes your life a whole lot easier and takes that worry off you. I've tried Quickbooks—it's a bit more complicated and technical, and takes more time to set up."
    },
    {
      image: carlosDelMoral,
      name: "Carlos Del Moral",
      title: "Freelance UX Designer",
      quote: "It's allows me to work remotely without hassle, ensuring easy invoicing and payment, saving time for more important tasks."
    },
    {
      image: estelleTracy,
      name: "Estelle Tracy",
      title: "37 Chocolates",
      quote: "Most of my clients pay with credit cards using the secure link on the invoice. That is a massive time saver and helps me get paid faster!"
    }
];

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2, // On smaller screens, show 2 slides at once
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1, // On very small screens, show 1 slide at once
              slidesToScroll: 1,
            }
          }
        ]
    };

  return (
    <section className="section testimonials-section">
      <div className='testimonials-container'>
        <div className='heading'>
          <div>
            <h2>WHY THEY<br></br>LOVE INVOICE</h2>
            <p>Hear from our beloved users.</p>
          </div>
          <div>
            <button className="sign-up-button">Sign up today</button>
          </div>
        </div>
        <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial" key={index}>
                  <div className="testimonial-content">
                    <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image" />
                    <p className="name">{testimonial.name}</p>
                    <p className="title">{testimonial.title}</p>
                    <p className="quote">"{testimonial.quote}"</p>
                  </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
