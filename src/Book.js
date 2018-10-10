
import React from 'react'

function Book(props)  {

  const authors = props.book.authors

  if (props.book.imageLinks === undefined) {
    props.book.imageLinks = {thumbnail:'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
  }
    return (
      <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${props.book.imageLinks.thumbnail}')` }}></div>
          <div className="book-shelf-changer">
            <select value={props.book.shelf || "none"} onChange={(event) => props.updateBook(props.book, event.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{authors.map((x, index) => (index===authors.length-1)? x : `${x}, `)}</div>
      </div>
    </li>

    )
  }


export default Book;
