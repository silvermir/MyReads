import React, { Component } from "react";
import Shelf from "./Shelf";

class BookShelf extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            shelf={"Currently Reading"}
            books={this.props.books.filter(
              (b) => b.shelf === "currentlyReading"
            )}
          />
          <Shelf
            shelf={"Want to Read"}
            books={this.props.books.filter((b) => b.shelf === "wantToRead")}
          />
          <Shelf
            shelf={"Read"}
            books={this.props.books.filter((b) => b.shelf === "read")}
          />
        </div>
      </div>
    );
  }
}

export default BookShelf;
