import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BrowseBooks = () => {
  const books = useSelector((state) => state.books.filteredBooks);

  return (
    <div>
      <h2>Browse Books</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>
                <Link to="/add-book">
                <button>Add New Book </button>
                </Link>  {/* Link to BookDetails */}
              </h3>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <p>Rating: ⭐ {book.rating}/5</p> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BrowseBooks;
