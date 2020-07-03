import React, { useState } from "react";
import axios from "axios";
import BookSearchForm from "../components/BookSearchForm";
import Loader from "../components/Loader";
import BooksList from "../components/BooksList";

function Search() {
    let API_URL = `https://www.googleapis.com/books/v1/volumes`;
    // Code to test bookAuthors function:
    // let authors = ['Param', 'Vennila', 'Afrin'];
    // bookAuthors(authors);
    // // Param, Vennila and Afrin
    // let authors = ['Param', 'Afrin'];
    // bookAuthors(authors);

    const [books, setBooks] = useState({ items: [] });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const [searchTerm, setSearchTerm] = useState('');
    const onInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const fetchBooks = async () => {
        // Books result
        //console.log(result.data);
        // set loading Before API operation starts
        setLoading(true);
        setError(false);
        try {
                // Ajax call to API using Axios
            const result = await axios.get(`${API_URL}?q=${searchTerm}`);
            setBooks(result.data);
        }
        catch (error) {
            setError(true);
        }
        // After API operation end
        setLoading(false);
    }

    // const bookAuthors = (authors) => {
	// 	if (authors) {
	// 		if (authors.length <= 2) {
	// 			authors = authors.join(" and ");
	// 		} else if (authors.length > 2) {
	// 			let lastAuthor = " and " + authors.slice(-1);
	// 			authors.pop();
	// 			authors = authors.join(", ");
	// 			authors += lastAuthor;
	// 		}
	// 	} else {
	// 		authors = "Author not provided";
	// 	}
	// 	return authors;
	// };

    const onSubmitHandler = (e) => {
        // Prevent browser refreshing after form submission
        e.preventDefault();
        // Call fetch books async function
        fetchBooks();
    }

    return (
        <>
        <BookSearchForm
            onSubmitHandler={onSubmitHandler}
            onInputChange={onInputChange}
            searchTerm={searchTerm}
            error={error}
        />
        <Loader searchTerm={searchTerm} loading={loading} />
        <BooksList books={books} />
    </>
    )
}    

export default Search;
