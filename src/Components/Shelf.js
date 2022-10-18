import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
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

export default Shelf;
