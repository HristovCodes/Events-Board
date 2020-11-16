// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/index";
import "./style.scss";

interface FaqProps {
  onClick: any;
}

export default function Faq({ onClick }: FaqProps) {
  return (
    <Wrapper onClick={onClick} cssClass="faq">
      <h1>Frequently asked questions</h1>
      <details>
        <summary>Account</summary>
        <ul>
          <li>
            <details>
              <summary>How do I change my username?</summary>
              <p>
                You cannot. Whatever you have set it to when registering that
                will be it forever.
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary>How do I change my email?</summary>
              <p>
                You can go to your profile page (your username) from the menu
                that you can open by pressing the button in the bottom right
                corner. When you are there click on <em>update email</em> and
                there you can type your new email.
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary>How do I change my password?</summary>
              <p>
                You can go to your profile page (your username) from the menu
                that you can open by pressing the button in the bottom right
                corner. When you are there click on <em>update password</em> and
                there you can type your new password.
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary>How do I change my profile picture?</summary>
              <p>
                You can go to your profile page (your username) from the menu
                that you can open by pressing the button in the bottom right
                corner. When you are there click on <em>update photo</em> and
                there you can type the url of your new profile picture.
              </p>
            </details>
          </li>
        </ul>
      </details>
      <details>
        <summary>Events</summary>
        <ul>
          <li>
            <details>
              <summary>How do I add an event?</summary>
              <p>
                Open the menu by pressing the button in the bottom right corner
                and click on <em>Submit</em>. There you can type your details
                like location, date, description and so on.
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary>Can I edit an event I posted?</summary>
              <p>
                No you cannot, so make sure to check for typos and that all
                details are right before posting. In rare cases where your event
                needs to be edited no matter what you can contact us and we'll
                assist you from there. You can do so by going to{" "}
                <Link to="/Events-Board/Contacts">Contacts</Link>
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary>How can I share an event with my friends?</summary>
              <p>
                You can go to said event and click on <em>share</em> and then
                pick the social media to share to.
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary>
                I don't see the event that I posted, is something wrong?
              </summary>
              <p>
                All events need to be reviewed before they go public. This is to
                filter out potential scams and such.
              </p>
            </details>
          </li>
        </ul>
      </details>
    </Wrapper>
  );
}
