import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
// custom hooks 
//will be responsible for redirecting users after performing a search.
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = () => {
  //setSearchTerm: Function to update the search term in the global state.
  //setResultTitle: Function to update the title of search results in the global state.
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  //It uses navigate to redirect users to another page (presumably a search results page) after they submit the search form.
  const navigate = useNavigate();

  //In a search form, it might be used to automatically focus on the search input field when the page or component is loaded.
  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    // This condition checks if the input is essentially empty or invalid contain special char
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate("/book");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="The Lost World ..."
                ref={searchText}
              />
              <button
                type="submit"
                className="flex flex-c"
                onClick={handleSubmit}
              >
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm