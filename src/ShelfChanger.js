import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";

class ShelfChanger extends Component {
  state = {
    newShelf: this.props.books.shelf,
  };

  handleShelfChange = async (e) => {
    try {
      BooksAPI.update(this.props.books, e.target.value).then((shelf) => {
        this.setState({
          newShelf: shelf,
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.newShelf} onChange={this.handleShelfChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            {this.props.books.shelf === "currentlyReading" && "\u2713 "}
            Currently Reading
          </option>
          <option value="wantToRead">
            {this.props.books.shelf === "wantToRead" && "\u2713 "}Want to Read
          </option>
          <option value="read">
            {this.props.books.shelf === "read" && "\u2713 "}Read
          </option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
