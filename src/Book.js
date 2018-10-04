
import React, { Component } from 'react'

function Book(props)  {
    if (props.book.imageLinks.thumbnail === undefined) {
    props.book.imageLinks = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.browshot.com%2Fstatic%2Fimages%2Fnot-found.png&imgrefurl=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F42135268%2Fangular2-onerror-image-binding&docid=NxZeD1d7TApzaM&tbnid=QmsBtkId78nvCM%3A&vet=10ahUKEwi7vp-DmezdAhWK64MKHag2DoMQMwg1KAIwAg..i&w=400&h=400&bih=754&biw=1536&q=image%20not%20found&ved=0ahUKEwi7vp-DmezdAhWK64MKHag2DoMQMwg1KAIwAg&iact=mrc&uact=8'}
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
        <div className="book-authors">{props.book.author}</div>
      </div>
    </li>

    )
  }


export default Book;
