import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              Welcome to BookHub, your ultimate online destination for
              discovering and exploring the world of books! Whether you're a
              casual reader, an aspiring bibliophile, or a seasoned literary
              enthusiast, BookHub offers a comprehensive platform to access a
              wealth of information about your favorite books, authors, and
              genres.
            </p>

            <p>
              <h3> Key features of BookHub include:</h3> Extensive Book
              Database: Search through thousands of titles with detailed
              information on authors, publication dates, and reviews.
              <br />
              Personalized Recommendations: Discover new books based on your
              reading history and preferences. Author Profiles: Learn more about
              your favorite authors and their literary journeys.
              <br /> Community Reviews: Read reviews from fellow readers to help
              you make informed decisions about your next read.
            </p>
            <p>
              Whether you're looking for your next page-turner or want to
              explore a new genre, BookHub is here to guide you on your reading
              adventure. Join our community and let your literary exploration
              begin!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
