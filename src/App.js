import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./BookShelf";
import BookSearch from "./BookSearch";
import { Link, Route, Routes } from "react-router-dom";

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false,
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

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
            element={<BookSearch books={this.state.books} />}
          />
        </Routes>
        <div>
          <Link to="/BookSearch" className="open-search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksApp;
