import React from "react";
import "./App.css";
import { useState } from "react";
import Rating from "./Rating";
import ThankYou from "./ThankYou";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (activeButton === null) {
      alert("Please select a rating!");
      return;
    }
    setIsSubmitted(true);
  }

  function handleRatingSelect(rating) {
    setActiveButton(rating);
  }

  return (
    <>
    <main>
      <CustomCard />
    </main>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Jenny-Eikens" target="_blank">
          Jennifer Eikens
        </a>
        .
      </footer>
    </>
  );

  function CustomCard() {
    return (
      <div className="card">
        <div className="card-body">
          {isSubmitted ? (
            <ThankYou selectedRating={activeButton} />
          ) : (
            <>
              <div className="star-wrapper">
                <svg
                  id="star"
                  width="17"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                    fill="#FC7614"
                  />
                </svg>
              </div>
              <h1 className="card-title">How did we do?</h1>
              <div className="card-text">
                <p>Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!</p>
              </div>
              <Rating
                activeButton={activeButton}
                onRatingSelect={handleRatingSelect}
              />
              <button className="submit" onClick={handleSubmit}>
                SUBMIT
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}
