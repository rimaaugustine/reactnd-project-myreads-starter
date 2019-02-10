import React from "react";
import *  as BooksAPI from './BooksAPI'
import "./App.css";
import { Link, Route, withRouter } from "react-router-dom";
import Search from "./components/search";
import BookShelf from "./components/bookShelf"

class BooksApp extends React.Component {
  state = {
    books:[]
  };


  componentDidMount(){
   BooksAPI.getAll()
   .then((books)=> {
     this.setState(()=>({
       books
     }))
   })
 }  

updateShelf = (book, shelf) => {
  BooksAPI.update(book, shelf ).then(response => {
    book.shelf = shelf;
    this.setState(prevState => ({
      book: prevState.books.filter(item => item.id !== book.id).concat(book)
    }))
  })
}

  render() {
    console.log(this.props.location.pathname)
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>My Reads</h1>
              </div>
              <div className="list-books-content">
                <div>
                <BookShelf books={this.state.books} 
                onUpdateShelf={this.updateShelf} 
                pathname={this.props.location.pathname} 
               />
                </div>
                
              </div>
              <div className="open-search">
                <Link to="/search" >
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
            )
          }
        />
        {/* add the event click */}
        <Route exact path="/search" render={()=> <Search pathname={this.props.location.pathname} />} />
      </div>
    );
  }
}

export default withRouter(BooksApp);
