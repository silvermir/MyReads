import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";

class ShelfChanger extends Component {
  handleShelfChange = async (e) => {
    try {
      const shelf = e.target.value;
      const book = this.props.books;
      const changeShelf = BooksAPI.update(book, shelf);
      return changeShelf;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleShelfChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
