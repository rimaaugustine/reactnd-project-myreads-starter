import React, { Component } from "react";

export default class ButtonChanger extends Component {

  onUpdateShelf = e => {
    console.log(e.target.value);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.onUpdateShelf}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading" >Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
