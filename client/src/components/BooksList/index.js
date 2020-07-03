import React from 'react';
import "./style.css";

// Separate the UI specific transforming logic to utils folder
//import { bookAuthors } from '../utils';
const bookAuthors = (authors) => {
  if (authors) {
    if (authors.length <= 2) {
      authors = authors.join(" and ");
    } else if (authors.length > 2) {
      let lastAuthor = " and " + authors.slice(-1);
      authors.pop();
      authors = authors.join(", ");
      authors += lastAuthor;
    }
  } else {
    authors = "Author not provided";
  }
  return authors;
}

const Book = ({ book }) => {
  return (
    <div>
      <div className="row" key={book.id}>
          <div className="col">{book.volumeInfo.title}
            <button onClick={() => book.saveBook(book.id)} className="save">Save</button>
            <button onClick={() => book.viewBook(book.id)} className="view">View</button>
          </div>
      </div>
      <div className="row">  
        <div className="col">{book.volumeInfo.publishedDate}</div>
      </div>
      <div className="row">  
        <div className="col">{bookAuthors(book.volumeInfo.authors)}</div>
      </div>  
      <div className="row">
        <div className="col img-fluid" >
          <img alt={`${book.volumeInfo.title} book`}
           src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
          <span className="text">{book.volumeInfo.description}</span> 
        </div>
      </div>  
      </div>
  );
};

const BooksList = ({ books }) => {
  return (
    <ul>
      {books.items.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </ul>
  );
};

export default BooksList;