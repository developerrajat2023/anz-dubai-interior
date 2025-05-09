import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "./footer.css";

export function Footer() {
  return (
    <div className='footer'>
      <div className='f-info'>
        <section className='f-social-medias'>
          <div className='f-logo-text'>
            <Link style={{ display: "flex" }} to='/'>
              <div className='f-logo'>
                <img src={logo} alt='logo'></img>
              </div>
            </Link>
          </div>
          <div className='f-about-text'>
            <p>
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
          </div>
          <div className='f-smedia'>
            <ul>
              <li>
                <a href='https://www.facebook.com/'>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/'>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href='https://www.twitter.com/'>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/'>
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className='f-pages'>
          <p>Pages</p>
          <ul>
            <li>
              <Link to={`/aboutus`}>About Us</Link>
            </li>
            <li>
              <Link to={`/projects`}>Our Projects</Link>
            </li>
            <li>
              <Link to={`/team`}>Our Team</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact Us</Link>
            </li>
            <li>
              <Link to={`/services`}>Services</Link>
            </li>
          </ul>
        </section>
       
        <section className='f-contact'>
          <p>Contact</p>
          <p>PO Box Dubai-UAE 14885</p>
          <p>
            <a href='mailto: contact@interno.com'>contact@interno.com</a>
          </p>
          <p>+97-04-236-6477</p>
        </section>
      </div>
      <div className='terms'>
        <ul>
          <ol>
            <Link to={`/terms`}>&bull; Terms & Conditions</Link>
          </ol>
          <ol>
            <Link to={`/privacy-policy`}>&bull; Privacy Policy</Link>
          </ol>
         
          <ol>
            <Link to={`/faq`}>&bull; FAQ</Link>
          </ol>
        </ul>
      </div>
      <div className='f-copyright'>
        <p>
          Copyright © ANZ | Designed by{" "}
          <a href='https://theopensoft.com'> The Open-Soft</a>
        </p>
      </div>
    </div>
  );
}
