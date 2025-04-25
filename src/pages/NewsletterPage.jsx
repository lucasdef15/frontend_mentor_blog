import React from "react";
import "../styles/NewsletterPage.css";

const NewsletterPage = () => {
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
      <p>
        <strong>
          I’d love to have you along for the ride and also hear about your own
          journey!
        </strong>
      </p>
      <form className="newslettter_form">
        <label htmlFor="emael">Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email@example.com"
        />

        <button>Stay updated</button>
      </form>
      <span>Unsubscribe anytime. No spam, I promise 🙂</span>
    </main>
  );
};

export default NewsletterPage;
