import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../style";
import "../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.checkValidity()) {
      emailjs
        .sendForm(
          "service_6o9fvui",
          "template_e9dy0pp",
          form.current,
          "CpeKlxFqBgC6HdwuS"
        )
        .then(
          (result) => {
            toast.success("Email sent successfully!");
            form.current.reset();
          },
          (error) => {
            toast.error(`Email failed to send: ${error}`);
          }
        );
    } else {
      toast.error("Please fill in all required fields");
    }
  };

  return (
    <div id="contact">
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input
          placeholder="whats your name?"
          className="inputbox"
          type="text"
          name="user_name"
          autoComplete="none"
          required
        />

        <label htmlFor="user_email">Email</label>
        <input
          placeholder="whats your email?"
          className="inputbox"
          autoComplete="none"
          type="email"
          name="user_email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          className="textarea"
          placeholder="whats your message?"
          autoComplete="none"
          name="message"
          required
        />

        <input className={`${styles.sendBtn}`} type="submit" value="Send" />

        <ToastContainer />
      </form>
    </div>
  );
};

export default Form;
