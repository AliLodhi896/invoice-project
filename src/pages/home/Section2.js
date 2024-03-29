import React from 'react';
import dashboardScreen from '../../assets/images/dashboardScreen.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFolderClosed } from '@fortawesome/free-solid-svg-icons';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

function Section2() {
  return (
    <section className="section section2">
        <h2 className="heading">One less thing to worry about</h2>
        <div className="image-container">
            <img src={dashboardScreen} alt="Dashboard" />
        </div>
        <p>Your Wave account gets you access to all this<br></br>and more:</p>
        <ul className="features-list">
            <li>
                <FontAwesomeIcon icon={faHeart} size='2x' /> A user-friendly dashboard built for you,<br></br>not your accountant.
            </li>
            <li>
                <FontAwesomeIcon icon={faFolderClosed} size='2x' /> Peace of mind that you’re always<br></br>organized ahead of tax season.
            </li>
            <li>
                <FontAwesomeIcon icon={faTableCells} size='2x' /> A complete picture of your business health,<br></br>wherever you are.
            </li>
            <li>
                <FontAwesomeIcon icon={faUserGroup} size='2x' /> Our in-house team of bookkeeping,<br></br>accounting, and payroll coaches.
            </li>
        </ul>
    </section>
  )
}

export default Section2
