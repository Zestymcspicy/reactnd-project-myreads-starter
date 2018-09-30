import React, { Component } from "react";
import Book from './Book.js'

class Shelf extends Component {


  render() {
    return (
<div className="bookshelf">
  <h2 className="bookshelf-title">{this.props.name}</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
      {this.props.books.map((b, key) =>  <Book book={b} key={key} /> 
      )}
    </ol>
  </div>
</div>
)}
}

export default Shelf;
