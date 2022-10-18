import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class BookSearch extends Component {
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
              placeholder="Search by Search Terms"
              onChange={(e) => this.props.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <li>
              <Book
                books={this.props.books}
                handleShelfChange={this.props.handleShelfChange}
              />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
