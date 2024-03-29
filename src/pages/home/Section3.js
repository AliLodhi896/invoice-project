import React, { useState } from 'react';
import Infos from './Infos';
import invoiceScreen from '../../assets/images/invoiceScreen.png';
import paymentsScreen from '../../assets/images/paymentsScreen.png';
import accountingScreen from '../../assets/images/accountingScreen.png';
import payrollScreen from '../../assets/images/payrollScreen.png';
import advisorsScreen from '../../assets/images/advisorsScreen.png';

function Section3() {
    const [active, setActive] = useState('Invoicing');
    const sectionClass = `section section3 section3-${active.toLowerCase()}`;

    const infoContent = {
        Invoicing: {
          heading: "Invoicing",
          image: invoiceScreen,
          boldText: "Stop chasing clients for money",
          text: "Reduce unpaid invoices, keep tabs on your income, and get paid faster."
        },
        Payments: {
          heading: "Payments",
          image: paymentsScreen,
          boldText: "Get paid faster",
          text: "Monitor your cash flow, stay organized, and stop sweating tax season. Say #sorrynotsorry to your spreadsheets and shoeboxes."
        },
        Accounting: {
            heading: "Accounting",
            image: accountingScreen,
            boldText: "Track your income & expenses, painlessly",
            text: "Monitor your cash flow, stay organized, and stop sweating tax season. Say #sorrynotsorry to your spreadsheets and shoeboxes."
        },
        Payroll: {
            heading: "Payroll",
            image: payrollScreen,
            boldText: "Pay your staff, and yourself, in minutes",
            text: "Didn't go to school for payroll? No worries. We built our Payroll tool for small business owners, so it’s easy to use AND teaches you as you go."
        },
        Advisors: {
            heading: "Advisors",
            image: advisorsScreen,
            boldText: "Get by with a little 1:1 help",
            text: "Our (non-judgmental) team of bookkeeping, accounting, and payroll experts is standing by to coach you—or do the work for you."
        }
      };

  return (
    <section className={sectionClass}>
        <h2 className="heading">Our tools work together,<br></br>so you work less.</h2>
        <ul className="infos-list">
            {Object.keys(infoContent).map((key) => (
            <li 
                key={key} 
                className={active === key ? 'active' : ''} 
                onClick={() => setActive(key)}
            >
                {key}
            </li>
            ))}
        </ul>
        <Infos 
            heading={infoContent[active].heading}
            image={infoContent[active].image}
            boldText={infoContent[active].boldText}
            text={infoContent[active].text}
        />
    </section>
  )
}

export default Section3
