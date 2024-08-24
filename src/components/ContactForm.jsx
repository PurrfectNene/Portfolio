import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"
import ReactiveButton from 'reactive-button';


const ContactForm = () => {

  const [state, setState] = useState('idle');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setState('loading');

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
          setState('success');
          form.current.reset(); //form field reset
        },
        (error) => {
          console.log("FAILED...", error.text);
          setState('error');
        }
      );
  };


  return (
  <div>
    
    <div className="contact-me-text">
    <img src="../../public/Images/contact-me.png" alt="contact-me" />
    </div>


<div className="contact-form">
    <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="to_name" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="from_email" required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" required />
        </div>

  <div className="send-button">
  <ReactiveButton
            buttonState={state}
            color="primary"
            idleText="Send"
            loadingText="Sending..."
            successText="Sent!"
            type="submit"
          />
    </div>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;