import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    category: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!bookData.title) newErrors.title = "Title is required";
    if (!bookData.author) newErrors.author = "Author is required";
    if (!bookData.description) newErrors.description = "Description is required";
    if (!bookData.rating || bookData.rating < 1 || bookData.rating > 5) {
      newErrors.rating = "Rating must be between 1 and 5";
    }
    if (!bookData.category) newErrors.category = "Category is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addBook(bookData)); // Dispatch action to Redux
      navigate("/browse"); // Redirect to Browse Books
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={bookData.title}
          onChange={handleChange}
        />
        {errors.title && <p className="error">{errors.title}</p>}

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={bookData.author}
          onChange={handleChange}
        />
        {errors.author && <p className="error">{errors.author}</p>}

        <textarea
          name="description"
          placeholder="Description"
          value={bookData.description}
          onChange={handleChange}
        />
        {errors.description && <p className="error">{errors.description}</p>}

        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={bookData.rating}
          onChange={handleChange}
        />
        {errors.rating && <p className="error">{errors.rating}</p>}

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={bookData.category}
          onChange={handleChange}
        />
        {errors.category && <p className="error">{errors.category}</p>}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
