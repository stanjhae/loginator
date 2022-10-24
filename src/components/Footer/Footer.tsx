import React from 'react';
import './footer.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Footer: React.FC = () => {
  return (
    <div className={'footer-container'}>
      <div className={'row justify-space-between footer-main-body'}>
        <Fade delay={1000} duration={2000} cascade bottom>
          <div className={'footer-logo-container'}>
            <h5>
              <img
                className={'logo'}
                src={'/images/logo/logo.png'}
                alt={'cashew logo'}
              />
            </h5>
            <div>
              <p>+971 4 5616811</p>
              <p>Maze Tower, Sheikh Zayed Road, Dubai, United Arab Emirates</p>
            </div>
          </div>
        </Fade>
        <div className={'row footer-links-container'}>
          <Fade delay={1000} duration={2000} cascade bottom>
            <div>
              <h5>Company</h5>
              <p>T&C’s</p>
              <p>Privacy Policy</p>
              <p>Careers</p>
            </div>
          </Fade>

          <Fade delay={1000} duration={2000} cascade bottom>
            <div>
              <h5>Shoppers</h5>
              <p>Customer login</p>
              <p>Shop directory</p>
              <p>FAQ</p>
            </div>
          </Fade>

          <Fade delay={1000} duration={2000} cascade bottom>
            <div>
              <h5>Merchants</h5>
              <p>Merchant login</p>
              <p>For business</p>
              <p>Ways to pay</p>
              <p>Partner with us</p>
            </div>
          </Fade>

          <Fade delay={1000} duration={2000} cascade bottom>
            <div>
              <h5>Subscribe</h5>
              <div className={'footer-input-right-action'} data-action={'Send'}>
                <input
                  placeholder={'Enter your e-mail'}
                  data-required="(required)"
                />
              </div>
              <div className={'row footer-socials'}>
                <img src={'/images/socials/facebook.png'} alt={'facebook'} />
                <img src={'/images/socials/instagram.png'} alt={'instagram'} />
                <img src={'/images/socials/linkedin.png'} alt={'linkedin'} />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className={'row justify-space-between footer-fine-print'}>
        <p>Cashew, 2022, All rights reserved ®</p>
        <p>Design by Embacy</p>
      </div>
      <div className={'footer-decoration '}>
        <img src={'/images/footer-decoration.png'} alt={'footer-decoration'} />
      </div>
    </div>
  );
};

export default Footer;
