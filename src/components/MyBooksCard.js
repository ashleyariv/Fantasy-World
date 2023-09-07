import React from 'react'

function MyBookCard({book, removeFromMyList}) {
    return (
        <div className='card'>
            <img id='book-covers' src={book.image}/>
            <h3>{book.name}</h3>
            <h4>{book.author}</h4>
            <button 
                id='like-button'
                onClick={() => removeFromMyList(book.id)}
                > Remove </button>
            <p>{book.summary}</p>
        </div>
    )
}

export default MyBookCard 