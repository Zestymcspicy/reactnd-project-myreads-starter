import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import Shelf from './BookShelves.js'
import SearchPage from './SearchPage.js'

class BooksApp extends React.Component {

    state = {
      books : []
    }

  componentDidMount() {
    BooksAPI.getAll()
    .then(resp => {
      this.setState({books: resp})
    });
}

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp=> {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  }


  render() {

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchPage updateBook={this.updateBook}/>
        )}/>
        <Route exact path='/' render={()=> (
          <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
              <div className="list-books">
                <div className="list-books-content">
                  <Shelf updateBook={this.updateBook} name="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
                  <Shelf updateBook={this.updateBook} name="Want To Read" books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
                  <Shelf updateBook={this.updateBook} name="Read" books={this.state.books.filter(b => b.shelf === "read")}/>
                </div>
              </div>
            </div>
          )}/>
            <div className="open-search">
              <Link
                to='search'
                className='book-search'
                >
                </Link>
          </div>
        </div>

    )}

  }


export default BooksApp
