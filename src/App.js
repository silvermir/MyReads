import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./BookShelf";
import SearchBook from "./SearchBook";

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
        {this.state.showSearchPage === false && <BookShelf />}
        {this.state.showSearchPage === true && <SearchBook />}
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default BooksApp;
