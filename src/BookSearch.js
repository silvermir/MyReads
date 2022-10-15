import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class BookSearch extends Component {
  updateQuery = (query) => {
    this.props.updateQuery(query.trim());
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <li>
              <Book books={this.props.foundBooks} />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
