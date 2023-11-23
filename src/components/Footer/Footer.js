// src/components/Footer/Footer.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center mb-0">
                            <li className="mx-2">
                                <a className="text-dark text-decoration-none hover-effect" href="/about">About</a>
                            </li>
                            <li className="mx-2">
                                <a className="text-dark text-decoration-none hover-effect" href="/privacy-policy">Privacy policy</a>
                            </li>
                            <li className="mx-2">
                                <a className="text-dark text-decoration-none hover-effect" href="/terms-of-service">Terms of service</a>
                            </li>
                            <li className="mx-2">
                                <a className="text-dark text-decoration-none hover-effect" href="/copy-rights">Copy rights</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
