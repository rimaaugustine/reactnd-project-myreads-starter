import React, { Component } from 'react'
import ButtonChanger from "./buttonChanger";

export default class BookShelf extends Component {
   
  render() {
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.catergoryTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map((book, id) => (
                <li key={id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                          `url(${book.imageLinks.thumbnail})`
                      }}
                    />
                    <ButtonChanger buttonActive={this.props.buttonActive}/>
                  </div>
                  <div className="book-title">
                    {book.title}
                  </div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>    
          ))}       
          </ol>
        </div>
      </div>
    )
  }
}
