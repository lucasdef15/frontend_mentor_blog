import React from "react";
import "../styles/NewsletterPage.css";
import { useState, useRef, useEffect } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState();

  const titleNewsletterRef = useRef();
  const formRef = useRef();
  const spanRef = useRef();
  const errorRef = useRef();
  const subscribedRef = useRef();

  // Animation for the title and intro text
  useGSAP(() => {
    gsap.fromTo(
      titleNewsletterRef.current,
      {
        rotation: -180,
        scale: 0,
        opacity: 0,
      },
      {
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );

    gsap.fromTo(
      ".animeted-text-newsL",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        stagger: 0.25,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  // Animation for form elements (email input and unsubscribe text)
  useGSAP(() => {
    const formChildren = Array.from(formRef.current.children);
    const targets = [...formChildren, spanRef.current];

    gsap.fromTo(
      targets,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, stagger: 0.25, ease: "back.out(1.7)" }
    );
  }, []);

  // Animation for error and subscription message appearance
  useEffect(() => {
    if (errorRef.current) {
      gsap.fromTo(
        errorRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
        }
      );
    }

    if (subscribedRef.current) {
      gsap.fromTo(
        subscribedRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
        }
      );
    }
  }, [error, subscribed]);

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
      <h2 ref={titleNewsletterRef}>Newsletter</h2>
      <p className="animeted-text-newsL">
        Want to stay updated on my latest articles, coding tutorials, and
        personal adventures? Sign up for my newsletter! It’s a simple way to
        keep track of new posts and occasional coding tips I discover. Just drop
        your email in the sign-up box, and I’ll send you updates whenever
        there’s something new to share.
      </p>
      <h4 className="animeted-text-newsL">
        <strong>
          I’d love to have you along for the ride and also hear about your own
          journey!
        </strong>
      </h4>
      <form ref={formRef} className="newslettter_form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
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
          <p ref={errorRef} className={"error-text-red"}>
            <IoIosInformationCircleOutline
              style={{ display: "grid", placeContent: "center" }}
            />
            {error}
          </p>
        )}
        {subscribed && (
          <p ref={subscribedRef} className={"error-text-green"}>
            <CiCircleCheck
              style={{ display: "grid", placeContent: "center" }}
            />
            {subscribed}
          </p>
        )}
        <button>Stay updated</button>
      </form>
      <span ref={spanRef}>Unsubscribe anytime. No spam, I promise 🙂</span>
    </main>
  );
};

export default NewsletterPage;
