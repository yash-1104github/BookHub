import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";


const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br/>
          <p className="header-text fs-18 fw-3">
            {" "}
            At BookHub, we believe that every book tells a unique story, and we
            strive to bring those stories to life by providing up-to-date
            details on a vast collection of books. From bestsellers and classic
            literature to emerging authors and niche genres, our platform helps
            you easily find information about books that suit your interests.
          </p> 
          <SearchForm />
        </div>
      </header>
    </>
  );
}

export default Header