import React, { useState } from "react";
import { Mail, Github, Instagram, Phone } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-window">

        {/* macOS title bar */}
        <div className="contact-titlebar">
          <div className="window-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="window-title">Contact</span>
        </div>

        {/* Content */}
        <div className="contact-body">
          
          {/* Left: socials */}
          <div className="contact-left">
            <h2>Get in <span>Touch</span></h2>
            <p>Feel free to reach out through any platform.</p>

            <div className="contact-links">
              <a href="mailto:sanjanamadhavan2005@email.com"><Mail /> Gmail</a>
              <a href="https://github.com/MSanjana041" target="_blank"><Github /> GitHub</a>
              <a href="https://www.instagram.com/_ssanjj?igsh=ZHB2ZGJzdHFxMzA4" target="_blank"><Instagram /> Instagram</a>
              <a href="tel:+917358471835"><Phone /> Phone</a>
            </div>
          </div>

          {/* Right: form */}
          <form className="contact-right" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
