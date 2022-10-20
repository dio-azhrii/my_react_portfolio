import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>Coming Soon</span>
          </h2>
        </a>

        <a
          href="https://wa.me/62895335209060"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+62 895 3352 09060</span>
          </h2>
        </a>

        <a href="#" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>azhriixty</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
