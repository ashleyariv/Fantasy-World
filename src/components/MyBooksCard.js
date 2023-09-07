import React from 'react'

function MyBookCard({book, removeFromMyList}) {
    return (
        <div className='card'>
            <img id='book-covers' src={book.image}/>
            <h2 className='book-name'>{book.name}</h2>
            <h4 className='authors'>{book.author}</h4>
            <button 
                className='like-button'
                onClick={() => removeFromMyList(book.id)}
                > Remove </button>
            <p className='summary'>{book.summary}</p>
        </div>
    )
}

export default MyBookCard 