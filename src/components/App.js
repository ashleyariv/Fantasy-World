import '../App.css'
import BookList from './BookList'
import ReviewsForm from './ReviewsForm'
import NavBar from './NavBar'
import Header from './Header'
import MyBooks from './MyBooks'
import {Switch, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'

function App() {

  const [books, setBooks] = useState([])
  const [reviews, setReviews] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [likedBooks, setLikedBooks] = useState([])

  const filteredBooks = books.filter(book => {
    return (
      book.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      book.author.toLowerCase().includes(searchInput.toLowerCase())
    )})

  useEffect(() => {
    fetch('http://localhost:3001/books')
    .then(response => response.json())
    .then(data => setBooks(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/reviews')
    .then(response => response.json())
    .then(data => setReviews(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/favorites')
    .then(response => response.json())
    .then(data => setLikedBooks(data))
  }, [])

  const addReview = (newReview) => {
    fetch('http://localhost:3001/reviews', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newReview)
    })
    .then(response => response.json())
    .then(data => setReviews([...reviews, data]))
  }

  const addBookToList = (newBook) => {
    fetch('http://localhost:3001/favorites', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newBook)
    })
    .then(response => response.json())
    .then(data => setLikedBooks([...likedBooks, data]))
  }

  const removeFromMyList = id => {
    fetch(`http://localhost:3001/favorites/${id}`, {
      method: "DELETE"
    })
    .then(response => {
      if(response.ok) {
        setLikedBooks(likedBooks.filter(book => {
          return book.id !== id
        }))
      }
    })
  }

  return (
    <div className="App">
      <div id='top'>
      <Header /> 
      <NavBar />
      </div>
        <Switch>
          <Route path='/reviews'>
            <ReviewsForm reviews={reviews} addReview={addReview} />
          </Route>
          <Route path='/mybooks'>
            <MyBooks likedBooks={likedBooks} removeFromMyList={removeFromMyList} />
          </Route>
          <Route path='/'>
            <BookList books={filteredBooks} searchInput={searchInput} setSearchInput={setSearchInput} addBookToList={addBookToList}/>
          </Route>
        </Switch>
    </div>
  )
}

export default App;