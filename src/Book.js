import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";

class Book extends Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <li key={book.id} className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 140,
                  height: 192,
                  backgroundImage: `url(${
                    book.imageLinks ? book.imageLinks.smallThumbnail : ""
                  })`,
                }}
              />
              <ShelfChanger
                books={book}
                handleShelfChange={this.props.handleShelfChange}
              />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </li>
        ))}
      </ol>
    );
  }
}

export default Book;
