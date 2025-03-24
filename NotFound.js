import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>Go Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#d9534f",
  },
  text: {
    fontSize: "1.2rem",
    color: "#555",
  },
  link: {
    fontSize: "1.2rem",
    color: "#0275d8",
    textDecoration: "none",
    marginTop: "20px",
    display: "inline-block",
  },
};

export default NotFound;
