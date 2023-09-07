import React from 'react'
import BookCard from './BookCard'
import Search from './Search'

function BookList({books, searchInput, setSearchInput, addBookToList}) {
    return (
        <div className='page'>
            <h1 className='h1'>Book List</h1>
            <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
            <div className='book-list'>
                {books.map(book => {
                    return <BookCard key={book.id} book={book} addBookToList={addBookToList} />
                })}
            </div>
        </div>
    )
}

export default BookList