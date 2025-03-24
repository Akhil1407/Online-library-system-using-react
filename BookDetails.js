import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams(); // Get book ID from URL
  const book = useSelector((state) =>
    state.books.allBooks.find((b) => b.id === parseInt(id))
  );

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{book.title}</h2>
      <p style={styles.author}><strong>Author:</strong> {book.author}</p>
      <p style={styles.description}><strong>Description:</strong> {book.description}</p>
      <p style={styles.rating}><strong>Rating:</strong> ⭐ {book.rating}/5</p>

      {/* Back to Browse Button */}
      <Link to="/browse" style={styles.backButton}>
        ← Back to Browse
      </Link>
    </div>
  );
};

// Simple inline CSS styling
const styles = {
  container: { padding: "20px", maxWidth: "600px", margin: "auto", textAlign: "center" },
  title: { fontSize: "24px", fontWeight: "bold" },
  author: { fontSize: "18px", color: "#555" },
  description: { fontSize: "16px", marginTop: "10px" },
  rating: { fontSize: "16px", fontWeight: "bold", color: "#e67e22" },
  backButton: { display: "inline-block", marginTop: "20px", textDecoration: "none", color: "white", backgroundColor: "#007bff", padding: "10px 15px", borderRadius: "5px" },
};

export default BookDetails;
