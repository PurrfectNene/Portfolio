import React, { useRef, useState } from "react";
import ReactiveButton from "reactive-button";
import "./ContactForm.css";
import emailjs from 'emailjs-com';


export default function ContactForm() {
  const form = useRef();
  const [state, setState] = useState('idle');


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
            form.current.reset(); //form field reset
          },
          (error) => {
            console.log("FAILED...", error.text);
            setState("error");
          }
        )
  
      setTimeout(() => {
        setState("success");
      }, 2000);
    };

  return (
    <div className="contact-form-container">


      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
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
            <textarea name="message" placeholder="Your Message" required />
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
    </div>
  );
}
