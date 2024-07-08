import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <form>
        <div className="contact-info">
          <input type="text" placeholder="Your Name" name="Your Name" />
          <input type="email" placeholder="Your Email" name="Your Email" />
        </div>
        <input type="text" name="subject" id="subject" placeholder="subject" />
        <textarea rows="5" placeholder="Your Message" name="Your Message" />
        <button className="btn">Send</button>
      </form>
    </div>
  );
}

export default Contact;

