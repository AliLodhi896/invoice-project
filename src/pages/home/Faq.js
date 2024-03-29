import React from 'react';

function Faq() {
    const faqs = [
        {
          question: "Is Wave's software something I need to install?",
          answer: "No, Wave's software is cloud-based, so you can access it online without any installation."
        },
        {
          question: "What if I just want to try Wave to see if it works for my business?",
          answer: "Wave offers a free trial that you can use to test its features before committing to a plan."
        },
        {
          question: "Can I change plans easily?",
          answer: "Yes, Wave allows you to upgrade or downgrade your plan at any time through your account settings."
        },
        {
          question: "Do you provide customer support?",
          answer: "We provide different levels of support, depending on the plan and/or the add-on features you choose. Learn more about how Wave support works here."
        }
    ];

  return (
    <div className="section faq-container">
        <h2>Frequently <br></br>Asked <br></br>Questions</h2>
        <div className="faq-items">
            {faqs.map((faq, index) => (
                <details className="faq-item" key={index}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                </details>
            ))}
        </div>
    </div>
  )
}

export default Faq