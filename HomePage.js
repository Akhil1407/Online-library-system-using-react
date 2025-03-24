import React from "react";

const HomePage = () => {
  // Sample categories
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Biography"];

  // Sample popular books
  const popularBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Online Library</h1>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/browse" className="hover:underline">Browse Books</a>
          <a href="/add" className="hover:underline">Add Book</a>
        </div>
      </nav>

      {/* Welcome Message */}
      <header className="text-center my-8">
        <h2 className="text-3xl font-semibold">Welcome to the Online Library</h2>
        <p className="text-lg text-gray-700">Explore a vast collection of books across various genres.</p>
      </header>

      {/* Book Categories */}
      <section className="max-w-4xl mx-auto my-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Book Categories</h3>
        <ul className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <li key={index} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              {category}
            </li>
          ))}
        </ul>
      </section>

      {/* Popular Books */}
      <section className="max-w-4xl mx-auto my-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Popular Books</h3>
        <ul className="space-y-3">
          {popularBooks.map((book) => (
            <li key={book.id} className="border-b pb-2 flex justify-between">
              <span>{book.title} by {book.author}</span>
              <a href={`/book/${book.id}`} className="text-blue-600 hover:underline">View Details</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
