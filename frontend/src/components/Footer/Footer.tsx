import React, { ReactElement } from 'react'
import { Container } from './Footer.styled';
import { Logo } from 'components';

export default function Footer(): ReactElement {
  return (
    <Container>
      <div className="footer-container"> 
        <div className="footer__top">
          <div className="footer__top-menu">
            <h2 className="footer__top-menu__title">
              Learn More
            </h2>
            <ul className="footer__top-menu__list">
              <li><a className="p1" href="/blogs/news">Insights</a></li>
              <li><a className="p1" href="/blogs/press"> Press</a></li>
              <li><a className="p1" href="https://faq.soylent.com"> FAQ</a></li>
              <li><a className="p1" href="/products/gift-card"> Gift Cards</a></li>
              <li><a className="p1" href="/pages/soylent-discount-programs"> Discount Programs</a></li>
            </ul>
          </div>
          <div className="footer__top-menu">
            <h2 className="footer__top-menu__title">
              Support
            </h2>
            <ul className="footer__top-menu__list">
              <li><a className="p1" href="/pages/contact">Contact</a></li>
              <li><a className="p1" href="/pages/store-locator">Find a Store</a></li>
              <li><a className="p1" href="/pages/careers">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
        <div className="footer__menu-bottom">
          <div className="footer__menu-bottom-nav">
            <ul className="footer__menu-bottom-nav-inner">
              <li className="footer__menu-bottom-nav-item">
                <a className="f9" href="/pages/terms">Terms &amp; Conditions</a>
              </li>
              <li className="footer__menu-bottom-nav-item">
                <a className="f9" href="/pages/privacy">Privacy Policy</a>
              </li>
              <li className="footer__menu-bottom-nav-item">
                <a className="f9" href="/pages/ada-compliance">Accessibility Statement</a>
              </li>
              <li className="footer__menu-bottom-nav-item">
                <a className="f9" href="https://privacyportal.onetrust.com/webform/42d62055-811f-46cc-b684-258a71eb39a0/fe71117d-51b5-49ad-8960-ed96369b7283">Do Not Sell My Personal Information</a>
              </li>
              <li className="footer__menu-bottom-nav-item">
                <a className="f9" href="/pages/onetrust">Manage Cookies</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright-text f9">Copyright © 2021</p>
          <Logo width="97" color="white"/>
        </div>
      </div>
      </div>
   </Container>
  )
}
