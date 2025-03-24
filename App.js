import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BrowseBooks from "./components/BrowseBooks";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import NotFound from "./components/NotFound"; // Import the 404 page
import "./styles.css";

const App = () => {
  return (
    <Router>
      <nav>
        <a href="/"> Home</a>
        <a href="/browse"> Browse</a>
        <a href="/add"> Add Book</a>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
        
        {/* Add the 404 Page Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
