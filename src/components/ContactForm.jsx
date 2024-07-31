import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(import.meta.env);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form className="Contactform" ref={form} onSubmit={sendEmail}>
      <div>
        <label>Name</label>
        <input type="text" name="to_name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="from_email" />
      </div>
      <div>
        <label>Message</label>
        <textarea name="message" />
      </div>
      <div>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};

export default ContactForm;
