import React from 'react'

function BookCard({book, addBookToList}) {
    return (
        <div className="card">
            <img id='book-covers' src={book.image}/>
            <h3>{book.name}</h3>
            <h4>{book.author}</h4>
            <button 
                id='like-button'
                onClick={() => addBookToList(book)}
                > Add to my List! </button>
            <p>{book.summary}</p>
        </div>
    )
}

export default BookCard 