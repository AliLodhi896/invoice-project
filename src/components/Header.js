import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import logoImage from '../assets/images/invoicing_logo.png';

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <header className="header">
        <div className="logo">
            <Link to="/"><img src={logoImage} alt="Invoicing Logo" /></Link>
        </div>
        <nav className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
            <Link to="/" onClick={() => setIsNavExpanded(false)}>Home</Link>
            <Link to="#" onClick={() => setIsNavExpanded(false)}>Customers</Link>
            <Link to="#" onClick={() => setIsNavExpanded(false)}>Products</Link>
            <Link to="#" onClick={() => setIsNavExpanded(false)}>Invoices</Link>
            <Link to="#" onClick={() => setIsNavExpanded(false)}>Transactions</Link>
            <Link to="#" onClick={() => setIsNavExpanded(false)}>Settings</Link>
            <div className="mobile-auth-buttons">
                <button className="sign-in">Sign in</button>
                <button className="sign-up">Sign up</button>
            </div>
        </nav>
        <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
            <span>{isNavExpanded ? '✖' : '☰'}</span>
        </button>
        <div className="auth-buttons">
            <button className="sign-in">Sign in</button>
            <button className="sign-up">Sign up</button>
        </div>
        </header>
    );
}

export default Header