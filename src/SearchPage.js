import React, { PureComponent } from 'react'
import Book from './Book.js'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { DebounceInput } from 'react-debounce-input'

class SearchPage extends PureComponent {
  constructor(props) {
    super(props);
    this.updateQuery = this.updateQuery.bind(this);
    this.bookSearch = this.bookSearch.bind(this);
    this.state = {
      books : [],
      results: [],
      query: ''
    }
  }



  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books })
    })
  }

  async bookSearch() {
    if(this.state.query === "" || this.state.query === undefined) {
      return this.setState({ results: [] })
    }
        BooksAPI.search(this.state.query).then(response => {
            if(response.error) {
                return this.setState({ results: [] });
            } else {
                response.forEach(b => {
                    let find = this.state.books.filter(B => B.id === b.id);
                    if(find[0]) {b.shelf = find[0].shelf; }
                });
                return this.setState({ results: response });
            }
        });
    }



    updateQuery(event) {
      this.setState({query: (event.target.value)}, () => {
        this.state.query === '' ? this.setState({results: []}) : this.bookSearch()})
    }


  render() {
    const { query } = this.state
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
            >
            </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <DebounceInput
              type="text"
              value={query}
              debounceTimeout={1000}
              onChange={this.updateQuery}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book, key)=> <Book updateBook={this.props.updateBook} book={book} key={key} />)}
          </ol>
        </div>
      </div>
    )
}
}

export default SearchPage
