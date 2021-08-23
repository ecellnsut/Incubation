import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="contact-info">
          <div className="incubation-head">
            <h2 className="large">Contact Us</h2>
            <div className="head-card">
              <img
                src="https://randomuser.me/api/portraits/men/73.jpg"
                alt="Incubation Head"
                className="round-img"
              />
              <h3>John Doe</h3>
              <p className="position">Incubation Head</p>
              <p>Mob: 9999xxxxxx</p>
            </div>
          </div>
          <div className="contact-form">
            <form className="form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Enter Message..."></textarea>
              <button type="submit" className="btn btn-dark btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
