import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInButton from '../SignInButton/SignInButton'; 
import './NavBar.css';

function NavBar() {
    const [isTop, setIsTop] = useState(true);
    useEffect(() => {
        document.addEventListener('scroll', () => {
        const isTopNow = window.scrollY < 5;
        if (isTopNow !== isTop) {
            setIsTop(isTopNow);
        }
        });
    }, [isTop]);

    return (
        <nav className={`navbar navbar-expand-lg navbar-light sticky-top navbar-custom ps-3 ${isTop ? '' : 'scrolled'}`}>
            <a className="navbar-brand" href="/">Medical Finder</a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">Home</a>
                    <a className="nav-item nav-link" href="/find-a-hospital">Find a hospital</a>
                    <a className="nav-item nav-link" href="/find-a-medication">Find a Medication</a>
                    <a className="nav-item nav-link" href="/find-a-pharmacy">Find a pharmacy</a>
                    <a className="nav-item nav-link" href="/resources">Resources</a>

                    <SignInButton />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
