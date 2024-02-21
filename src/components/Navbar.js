import React from 'react';

import {Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top p-3">
            <div className="container p-0 px-lg-3">
                <a className="navbar-brand" href="/">
                    <img src="https://squbix.com/static/media/logo_textbyside_white.957885beec0bbcc5053bd2c30ce2b396.svg" alt="logo" style={{ width: '200px', filter: "hue-rotate(0deg) saturate(0)" }} />
                </a>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ backgroundColor: 'rgb(23, 25, 50)', width: '100%' }}>
                    <div className="offcanvas-header">
                        <a href="/">
                            <img src="https://squbix.com/static/media/logo_textbyside_white.957885beec0bbcc5053bd2c30ce2b396.svg" alt="logo" style={{ width: '200px' }} />
                        </a>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body justify-content-end">
                        <ul className="navbar-nav align-items-center gap-4">
                            <li className="nav-item py-1 text-nowrap" data-bs-dismiss="offcanvas">
                            <Link className="nav-link link-light nav-link-ltr" to="/update-form">Admin Panel</Link>
                            </li>
                            <li className="nav-item py-1 text-nowrap" data-bs-dismiss="offcanvas">
                                <a className="nav-link link-light nav-link-ltr" href="/blockchain">Blockchain</a>
                            </li>
                            <li className="nav-item py-1 dropdown" id="servicesDropdown">
                                <a className="nav-link link-light dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/services">Services</a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li data-bs-dismiss="offcanvas"><a className="dropdown-item" href="/services">All</a></li>
                                    <li data-bs-dismiss="offcanvas"><a className="dropdown-item" href="/webdevelopment">Web Development</a></li>
                                    <li data-bs-dismiss="offcanvas"><a className="dropdown-item" href="/mobiledevelopment">Mobile App Development</a></li>
                                    <li data-bs-dismiss="offcanvas"><a className="dropdown-item" href="/cloudaws">Cloud & Automation</a></li>
                                    <li data-bs-dismiss="offcanvas"><a className="dropdown-item" href="/digitalmarketing">Digital Marketing</a></li>
                                </ul>
                            </li>
                            <li className="nav-item py-1 dropdown" id="engagement-dropdown">
                                <a className="nav-link link-light dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/engagements">Engagement</a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li data-bs-dismiss="offcanvas"><a className="dropdown-item" href="/engagements">All</a></li>
                                    <li data-bs-dismiss="offcanvas"><a className="dropdown-item" href="/hire-dev/frontend">Front-end Developer</a></li>
                                    <li data-bs-dismiss="offcanvas"><a className="dropdown-item" href="/hire-dev/backend">Back-end Developer</a></li>
                                    <li data-bs-dismiss="offcanvas"><a className="dropdown-item" href="/hire-dev/cloud">Cloud Developer</a></li>
                                    <li data-bs-dismiss="offcanvas"><a className="dropdown-item" href="/hire-dev/blockchain">Blockchain Developer</a></li>
                                </ul>
                            </li>
                            <li className="nav-item py-1 text-nowrap" data-bs-dismiss="offcanvas">
                                <a className="nav-link link-light nav-link-ltr" href="/blogs">Blogs</a>
                            </li>
                            <li className="nav-item py-1 text-nowrap" data-bs-dismiss="offcanvas">
                                <a className="nav-link link-light nav-link-ltr" href="/training">Training</a>
                            </li>
                            <li className="nav-item py-1 text-nowrap" data-bs-dismiss="offcanvas">
                                <a className="nav-link link-light nav-link-ltr" href="/webinar">Webinar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
