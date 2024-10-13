import React from 'react';
import '../Styles/footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <section className="footer1 mt-4 bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="text-xl font-bold">Link</h3>
              <br/>
              <h5>You want to join with me then
                  you connect with linkedin account</h5>

            </div>

            <div className="col-md-4 ml-10">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <p className="mt-2">Junagadh</p>
              <p>Phone: +91 7574970964</p>
              <p>Email: info@webai.com</p>
            </div>

            <div className="col-md-4">
              <h3 className="text-xl font-bold">Social Media</h3>
              <ul className="list-unstyled d-flex mt-4">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100080620182402" className="d-flex align-items-center justify-content-center rounded-circle bg-black text-white me-2" style={{ width: '48px', height: '48px' }}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/milan-tarapara-a0160b294/" className="d-flex align-items-center justify-content-center rounded-circle bg-black text-white me-2" style={{ width: '48px', height: '48px' }}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/tarapara_milan/" className="d-flex align-items-center justify-content-center rounded-circle bg-black text-white" style={{ width: '48px', height: '48px' }}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Web Ai. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
