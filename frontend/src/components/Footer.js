import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>
          Copyright &copy; 2021 <span className="text-primary">ECell NSUT</span>
          , All Rights Reserved.
        </p>
        <div className="social-links">
          <div className="social">
            <SocialIcon
              url="https://facebook.com/ecell.nsut/"
              target="_blank"
            />
          </div>
          <div className="social">
            <SocialIcon
              url="https://www.instagram.com/ecell.nsut/?hl=en"
              target="_blank"
            />
          </div>
          <div className="social">
            <SocialIcon
              url="https://www.linkedin.com/company/ecell-nsit-the-entrepreneurship-cell-of-nsit-/mycompany/"
              target="_blank"
            />
          </div>
          <div className="social">
            <SocialIcon url="mailto:ecell.care@gmail.com" target="_blank" />
          </div>
          <div className="social">
            <SocialIcon
              url="https://open.spotify.com/show/4Lp3Ypv6cQXHoQE0NN6Q73?si=R9EysJ9TSuaY1TUd58fYAw&utm_source=copy-link&nd=1"
              target="_blank"
            />
          </div>
          <div className="social">
            <SocialIcon
              url="https://www.youtube.com/channel/UC7oScLX2Ce5JibTF93Xtaxg"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
