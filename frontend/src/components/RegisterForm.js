import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import './RegisterForm.css';

const RegisterForm = () => {
  const { formVisible, setFormVisible } = useGlobalContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startup: '',
    info: '',
  });
  const { name, email, startup, info } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (formVisible) {
    return (
      <div id="reg-form">
        <div className="dark-overlay">
          <div className="reg-card">
            <div className="reg-header">
              <h2 className="large">Register With Us</h2>
              <button
                className="btn btn-danger"
                onClick={() => setFormVisible(false)}
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="line"></div>
            </div>
            <div className="reg-body">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, blanditiis adipisci consequatur eaque voluptates vitae?
              </p>
              <form className="form">
                <div className="input-row">
                  <div className="form-group">
                    <label className="form-text" htmlFor="name">
                      Name
                    </label>
                    <div className="input-group">
                      <div className="input-icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-text" htmlFor="email">
                      Email
                    </label>
                    <div className="input-group">
                      <div className="input-icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-text" htmlFor="startup">
                      Name of Startup
                    </label>
                    <div className="input-group">
                      <div className="input-icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <input
                        type="text"
                        id="startup"
                        name="startup"
                        value={startup}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-text" htmlFor="info">
                    Breif about your startup
                  </label>
                  <div className="input-group">
                    <div className="input-icon">
                      <i className="fas fa-user"></i>
                    </div>
                    <textarea
                      type="text"
                      id="info"
                      name="info"
                      value={info}
                      onChange={(e) => onChange(e)}
                    ></textarea>
                  </div>
                </div>
                <div className="line"></div>
                <button
                  className="btn btn-success"
                  onClick={() => setFormVisible(false)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default RegisterForm;
