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
    if (!query) return "";
    if (query.length > 2)
      BooksAPI.search(query).then((res) => {
        if (!res.error) {
          this.setState({
            SearchResults: Array.isArray(res) ? res : [],
          });
        }
      });
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
            path="/BookSearch"
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
