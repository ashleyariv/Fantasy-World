import React from 'react'

function ReviewCard({review}) {
    return (
        <div>
            <h3>{review.name}: by {review.author}</h3> 
            <p>{review.review}</p>
        </div>
    )
}

export default ReviewCard