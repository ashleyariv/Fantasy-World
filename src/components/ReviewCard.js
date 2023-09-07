import React from 'react'

function ReviewCard({review}) {
    return (
        <div>
            <h2 className='book-name'>{review.name}: by {review.author}</h2> 
            <p className='review-text'>{review.review}</p>
        </div>
    )
}

export default ReviewCard