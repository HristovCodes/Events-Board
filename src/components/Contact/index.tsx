// eslint-disable-next-line
import React, { useState } from "react";
import Wrapper from "../Wrapper/index";
import emailjs from "emailjs-com";
import Reaptcha from "reaptcha";
import "./style.scss";

interface ContactProps {
  onClick: any;
  userData: any;
}

export default function Contact({ onClick, userData }: ContactProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(false);

  let sendEmail = (e: any) => {
    if (captcha) {
      let form = e.target;
      e.preventDefault();

      let templateParams = {
        from_name: name,
        from_email: userData.email,
        messageForm: message,
      };
      emailjs
        .send(
          "service_7kutrc2",
          "template_0aan5qq",
          templateParams,
          "user_iO7iJq15zyR93hwn516Jd"
        )
        .then(() => {
          // clears the form is the message is sent succesfuly
          form.reset();
        });
    }
  };

  return (
    <Wrapper onClick={onClick} cssClass="contact">
      <form className="contactform" onSubmit={sendEmail}>
        <h1>Get in touch with us</h1>
        <div>
          <label htmlFor="user_name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="user_name"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
        </div>
        <Reaptcha
          className="captcha"
          sitekey="6LeBcOQZAAAAAMJoVuzrOicNjxO-Y2PksCxNYaAd"
          onVerify={() => setCaptcha(true)}
        />
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </Wrapper>
  );
}
