import React, { useRef, useState } from "react";
import ReactiveButton from "reactive-button";
import "./ContactForm.css";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();
  const [state, setState] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setState("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setState("success");
          form.current.reset(); // form field reset
        },
        (error) => {
          console.log("FAILED...", error.text);
          setState("error");
        }
      );

    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <div className="contact-form-container">
      {/* Location Section on the Left */}
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11806.80362674868!2d4.850186399999999!3d52.379189499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609d3f0c1d399%3A0xd4f2f1c4eaa08cfc!2sAmsterdam!5e0!3m2!1sen!2snl!4v1684242212328!5m2!1sen!2snl"
          width="300"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h6 style={{color: "#4B0082", fontFamily: "Hey-comic"}}>Location: Amsterdam, Netherlands, NH</h6>
        {/* <p style={{color: "#4B0082", fontFamily: "Hey-comic"}}>Amsterdam, Netherlands, NH</p> */}
      </div>

      {/* Contact Form Section on the Right */}
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="name-email">
          <div className="name">
            <input
              type="text"
              name="to_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="email">
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="message-field">
          <textarea
            name="message"
            placeholder="Send your question here—I'm ready to impress!"
            required
          />
        </div>

        <div className="send-button">
          <ReactiveButton
            buttonState={state}
            color="blue"
            idleText="Send Message"
            loadingText="Sending..."
            successText="Sent!"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
