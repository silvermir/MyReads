import React, { Component } from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

class BookShelf extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            shelfName={"Currently Reading"}
            handleShelfChange={this.props.handleShelfChange}
            books={this.props.books.filter(
              (b) => b.shelf === "currentlyReading"
            )}
          />
          <Shelf
            shelfName={"Want to Read"}
            handleShelfChange={this.props.handleShelfChange}
            books={this.props.books.filter((b) => b.shelf === "wantToRead")}
          />
          <Shelf
            shelfName={"Read"}
            handleShelfChange={this.props.handleShelfChange}
            books={this.props.books.filter((b) => b.shelf === "read")}
          />
          <div>
            <Link to="/BookSearch" className="open-search">
              Add a book
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
