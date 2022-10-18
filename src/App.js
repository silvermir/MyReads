import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./Components/BookShelf";
import BookSearch from "./Components/BookSearch";
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
    if (query.length >= 3) {
      BooksAPI.search(query).then((res) => {
        if (!res || res.error) {
          this.setState({ SearchResults: [] });
          return;
        }
        const foundBooks = res.map((b) => {
          this.state.books.forEach((book) => {
            if (book.id === b.id) b.shelf = book.shelf;
          });
          return b;
        });
        this.setState({ SearchResults: foundBooks });
      });
    } else {
      this.setState({ SearchResults: [] });
    }
  };

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>
      this.setState((currentState) => ({
        books: currentState.books
          .filter((b) => b.id !== book.id)
          .concat({ ...book, shelf }),
      }))
    );
  };

  render() {
    return (
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <BookShelf
                books={this.state.books}
                handleShelfChange={this.handleShelfChange}
              />
            }
          />
          <Route
            path="/search"
            element={
              <BookSearch
                updateQuery={this.updateQuery}
                handleShelfChange={this.handleShelfChange}
                books={this.state.SearchResults}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
