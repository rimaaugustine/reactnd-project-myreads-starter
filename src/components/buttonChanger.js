import React, { Component } from "react";

export default class ButtonChanger extends Component {

  onUpdateShelf = e => {
    console.log(this.props.book, e.target.value)
    this.props.onUpdateShelf(this.props.book, e.target.value)
  };
  
  render() {
        // set current shelf to none as default
        let currentShelf = 'none';

        // if book is in current list, set current shelf to book.shelf
        for (let item of this.props.books) {
          if (item.id === this.props.book.id) {
            currentShelf = item.shelf;
            break;
          }
        }
    return (
      <div className="book-shelf-changer">
        <select onChange={this.onUpdateShelf} defaultValue={currentShelf}>
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
