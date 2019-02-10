import React, { Component } from 'react'
import { Link } from "react-router-dom";
import BookShelf from '../components/bookShelf';
import *  as BooksAPI from '../BooksAPI'
class Search extends Component {
 state = {
     query: '',
     arrBooks: [],
     error: false
 } 

updateQuery = (query) => {
    this.setState(() => ({
       query: query.trim(), 
    }))
        if (query) {
            BooksAPI.search(query.trim(), 20).then(books => {
              books.length > 0
                ? this.setState({ arrBooks: books, error: false })
                : this.setState({ arrBooks: [], error: true });
            });
      
          } else this.setState({ newBooks: [], searchErr: false });
}
 
  render() {
      const { query, arrBooks, error} = this.state
    console.log(arrBooks)
    return (
        <div> 
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/">
                <button className="close-search" >Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" 
                  placeholder="Search by title or author" 
                  value={query} 
                  onChange={(event) => this.updateQuery(event.target.value) }/>
  
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
            {arrBooks.length > 0  && 
            (   
                <div>
                <h3>found {arrBooks.length} books </h3>
                <BookShelf books={arrBooks} />
                </div>
            )}
             {error && (
            <h3>No result have been found</h3>
          )}
         
          </div>         
    )
  }
}

export default  Search