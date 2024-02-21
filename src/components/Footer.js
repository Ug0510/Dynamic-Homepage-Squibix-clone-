import React from 'react';
import Heart from '../assets/images/heart.png';

const Footer = () => {
  return (
    <div className="container-fluid p-0 pt-5 main">
      <div className="container p-md-5 pt-2" style={{ color: 'var(--secondary-color)' }}>
        <div className="row">
          <div className="col-sm-6 custom-border">
            <div className="d-flex p-2 ps-4">
              <a href="/"><img src="https://squbix.com/static/media/squbix.51677a2c489c783b8066d875a17e7e22.svg" alt="icon" /></a>
              <div>
                <div className="fw-bold fs-2 ps-4">SQUBIX DIGITAL</div>
                <div className="fw-bold ps-4"></div>
              </div>
            </div>
            <div className="p-4">India | Singapore | Australia</div>
            <div className="ps-4 fw-bold fs-2">Socials</div>
            <div>
              <a target="_blank" href="https://www.instagram.com/squbixdigital/" rel="noreferrer">
                <img className="ps-4 pt-3" src="https://squbix.com/static/media/instagram.0e6d8a7f15157aa6720c538c2f73e32d.svg" alt="instagram" />
              </a>
              <a target="_blank" href="https://twitter.com/SqubixDigital" rel="noreferrer">
                <img className="ps-4 pt-3" src="https://squbix.com/static/media/twitter.33a8953ee5109a8198acfc0609db56ce.svg" alt="twitter" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/squbix/" rel="noreferrer">
                <img className="ps-4 pt-3" src="https://squbix.com/static/media/linkedin.bc055c885b187879b878dd5cb8af7a4b.svg" alt="linekdin" />
              </a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="text-lg-end fw-bold mt-4 fs-2 pe-3 ms-3">Quick Links</div>
            <div className="row">
              <div className="col links p-4 text-lg-end footer-links">
                <div className="p-2 "><a className="linkP2" href="/">About Us</a></div>
                <div className="p-2 "><a className="linkP2" href="/">Contact Us</a></div>
              </div>
              <div className="col links p-4 text-lg-end footer-links">
                <div className="p-2 "><a className="linkP2" href="/">dApps development</a></div>
                <div className="p-2 "><a className="linkP2" href="/">DeFi</a></div>
                <div className="p-2 "><a className="linkP2" href="/">Training</a></div>
              </div>
            </div>
          </div>
          <div className="links fs-6 p-4 pt-5 pb-2 text-center">
            Made with <img src={Heart} style={{maxWidth:'24px'}}></img> by <a target='_blank' href="https://www.linkedin.com/in/udit-gupta-ug0510/" style={{color:'#00ffc6', cursor:'pointer'}}>Udit Gupta</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
