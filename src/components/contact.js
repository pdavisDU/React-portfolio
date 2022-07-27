import React, { useState } from "react";
import validator from "validator";
import "../Styles/about.css";
import "../Styles/portfolio.css";

// const Contact = () => {
//   return (
// <div className="container">
//   <form action="action_page.php">
//     <label htmlFor="name">Name</label>
//     <input
//       type="text"
//       id="myName"
//       className="name"
//       placeholder="John Smith.."
//     ></input>
//     <label htmlFor="email">E-mail</label>
//     <input
//       type="text"
//       id="e-mail"
//       className="userEmail"
//       placeholder="Email.."
//     ></input>
//     <label htmlFor="message">Leave a message</label>
//     <textarea
//       id="message-area"
//       className="msg"
//       placeholder="Message.."
//     ></textarea>
//     <input type="submit" value="submit"></input>
//   </form>
// </div>
function Contact() {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <form id="contact">
      <div className="contact-form">
        <label for="name">Name</label>
        <input type="text" className="form-control" placeholder="Bruce Wayne" />
      </div>
      <div className="form-group">
        <label for="email">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={(e) => validateEmail(e)}
        ></input>{" "}
        <br />
        <span
          style={{
            color: "green",
          }}
        >
          {emailError}
        </span>
      </div>

      <div className="form-group">
        <label for="message">Message</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="How did you get so awesome?"
          rows="3"
        ></textarea>
      </div>
      <button id="submitBtn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Contact;
