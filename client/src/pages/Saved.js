import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


function Saved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid className="saved">
      <Row>
        <Col size="md-0"><h4>Saved Books</h4></Col>
      </Row>
         {books.length ? (
            books.map(book => (
              <>
              <Row>  
              <Col size="md-6" key={book._id}>
                {book.title}
              </Col>
              <Col size="md-6">
                 <button onClick={() => deleteBook(book._id)} className="delete">Delete</button>
                 <button><a href={book.link} styletarget="_blank" rel="noopener noreferrer" className="view">View</a></button>
               </Col>
              </Row>
              <Row>
                <Col size="md-6">{book.author}</Col>
              </Row> 
              <Row>
                <Col size="md-3">
                <img alt={`${book.title} book`}
           src={book.image} />
                </Col>
                <Col size="md-9">
          <span className="text">{book.description}</span> 
                </Col>
              </Row>
              </>  
            ))) : (<h4>No Results to Display</h4>)} 
    </Container >
  );
}

export default Saved;
