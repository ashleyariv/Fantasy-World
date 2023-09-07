import React from 'react'
import MyBookCard from './MyBooksCard'

function MyBooks({likedBooks, removeFromMyList}) {
    return (
        <div className='page'>
            <h1 className='h1'>My Books</h1>
            <div className='book-list'>
                {likedBooks.map(book => {
                    return <MyBookCard key={book.id} book={book} removeFromMyList={removeFromMyList} />
                })}
            </div>
        </div>
    )
}

export default MyBooks