import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/bookShelf";
import * as BooksAPI from "../BooksAPI";
class Search extends Component {
  state = {
    query: "",
    newBooks: [],
    searchErr: false
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ newBooks: books, searchErr: false })
          : this.setState({ newBooks: [], searchErr: true });
      });
    } else this.setState({ newBooks: [], searchErr: false });
  };

  render() {
    const { query, newBooks, searchErr } = this.state;
    console.log(newBooks);
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link onClick={this.forceUpdate} to="/">
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid" />
          </div>
        </div>
        {newBooks.length > 0 && (
          <div>
            <h3>found {newBooks.length} books </h3>
            <BookShelf
              books={this.state.newBooks}
              onUpdateShelf={this.props.onUpdateShelf}
            />
          </div>
        )}
        {searchErr && <h3>No result have been found</h3>}
      </div>
    );
  }
}

export default Search;
