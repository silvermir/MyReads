import React, { Component } from "react";

class ShelfChanger extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={this.props.books.shelf || "none"}
          onChange={(e) =>
            this.props.handleShelfChange(this.props.books, e.target.value)
          }
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            {this.props.books.shelf === "currentlyReading"}
            Currently Reading
          </option>
          <option value="wantToRead">
            {this.props.books.shelf === "wantToRead"}Want to Read
          </option>
          <option value="read">{this.props.books.shelf === "read"}Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
