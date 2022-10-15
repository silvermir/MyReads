import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./BookShelf";
import BookSearch from "./BookSearch";
import { Route, Routes } from "react-router-dom";

class BooksApp extends Component {
  state = {
    books: [],
    SearchResults: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  updateQuery = (query) => {
    if (!query) {
      this.setState({ searchResults: "" });
    } else {
      BooksAPI.search(query).then((searchResults) => {
        this.setState({ SearchResults: searchResults });
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={<BookShelf books={this.state.books} />}
          />
          <Route
            path="/BookSearch"
            element={
              <BookSearch
                updateQuery={this.updateQuery}
                foundBooks={this.state.SearchResults}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
