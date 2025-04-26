import React from "react";
import "../styles/NewsletterPage.css";
import { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setSubscribed("");
      setError("Please enter a valid email address.");
    } else {
      setError("");
      setSubscribed("You’re subscribed! Check your inbox for updates.");
    }
  };

  return (
    <main className="newsletter_page_wrapper">
      <h2>Newsletter</h2>
      <p>
        Want to stay updated on my latest articles, coding tutorials, and
        personal adventures? Sign up for my newsletter! It’s a simple way to
        keep track of new posts and occasional coding tips I discover. Just drop
        your email in the sign-up box, and I’ll send you updates whenever
        there’s something new to share.
      </p>
      <h4>
        <strong>
          I’d love to have you along for the ride and also hear about your own
          journey!
        </strong>
      </h4>
      <form className="newslettter_form" onSubmit={handleSubmit}>
        <label htmlFor="emael">Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${
            error ? "border-red-500" : subscribed ? "border-green-500" : ""
          }`}
        />

        {error && (
          <p className={"error-text-red"}>
            <IoIosInformationCircleOutline
              style={{ display: "grid", placeContent: "center" }}
            />
            {error}
          </p>
        )}
        {subscribed && (
          <p className={"error-text-green"}>
            <CiCircleCheck
              style={{ display: "grid", placeContent: "center" }}
            />
            {subscribed}
          </p>
        )}

        <button>Stay updated</button>
      </form>
      <span>Unsubscribe anytime. No spam, I promise 🙂</span>
    </main>
  );
};

export default NewsletterPage;
