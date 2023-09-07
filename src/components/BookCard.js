import React from 'react'

function BookCard({book, addBookToList}) {
    return (
        <div className="card">
            <img id='book-covers' src={book.image}/>
            <h2 className='book-name'>{book.name}</h2>
            <h4 className='authors'>{book.author}</h4>
            <button 
                className='like-button'
                onClick={() => addBookToList(book)}
                > Add to my List! </button>
            <p className='summary'>{book.summary}</p>
        </div>
    )
}

export default BookCard 