import React, { Component } from 'react'
import BookList from "./bookList"
export default class BookShelf extends Component {
   
  render() {
    const categoriesShelf = [
        { category: 'currentlyReading', title: 'Currently Reading' },
        { category: 'wantToRead', title: 'Want to Read' },
        { category: 'read', title: 'Read' }
      ];
    return (
        <div>
        {categoriesShelf.map((category, i) => {
             const bookFilteredCategory = this.props.books.filter(book => book.shelf === category.category);
             return(
                <div className="bookshelf" key={i}>
                <h2 className="bookshelf-title">{category.title}</h2>
                <div className="bookshelf-books">
                 <BookList books={bookFilteredCategory} />
                </div>
              </div>
             )
        } )}
        
       
      </div>
    )
  }
}
