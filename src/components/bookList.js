import React, { Component } from 'react'
import ButtonChanger from "./buttonChanger";

export default class BookList extends Component {
  render() {
    return (
      <div>
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
                            <ButtonChanger />
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
    )
  }
}
