import React from 'react';
//This hook is likely used to access global state or context provided by a Context API setup
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  //array of books, boolean indicator, resulttitle
  const { books, loading, resultTitle } = useGlobalContext();
  //Iterates over the books array with the map function.For each singleBook in the array, it returns a new book object with updated properties
  const booksWithCovers = books.map((singleBook) => {
    return {
      //deep copy ...obj 
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  if (loading) return <Loading />;
  //resultTitle => Your search result
  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        
        <div className="booklist-content grid">
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default BookList
// ...item will copy all the nested obj  => deep copy concept //Dynamic Book Rendering
//{...item}: Uses the spread operator to pass all properties of the item object as props to the Book component. This allows the Book component to receive and use all the properties of each book.