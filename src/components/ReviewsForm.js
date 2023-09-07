import React, {useState} from 'react'
import ReviewCard from './ReviewCard'

function ReviewsForm({reviews, addReview}) {

    const defaultForm = {
        name: "", 
        author: "", 
        review: ""
    }

    const [formInput, setFormInput] = useState(defaultForm)

    const handleSubmit = event => {
        event.preventDefault() 
        addReview(formInput)
        setFormInput(defaultForm)
    }

    const handleChange = event => {
        setFormInput({...formInput, [event.target.name]: event.target.value})
    }

    return (
        <div className='page'>
            <h1 className='review-header'>Book Reviews</h1>
            <form id='reviews' onSubmit={handleSubmit}>
                <input className='review-input' onChange={handleChange} value={formInput.name} type='text' name='name' placeholder='Book Name' />
                <input className='review-input' onChange={handleChange} value={formInput.author} type='text' name='author' placeholder='Book Author' />
                <textarea id='textbox' rows="10" col="20" wrap="hard" maxLength="2000" placeholder="Thoughts..."></textarea>
                {/* <input onChange={handleChange} value={formInput.review} type='text' name='review' placeholder='Thoughts...' /> */}
                <button id='review-button' type='submit'>Publish 🖊</button>
            </form>
            <div id='form'>
                {reviews.map(review => {
                    return <ReviewCard key={review.id} review={review} />
                })}
            </div>
        </div>
    )
}

export default ReviewsForm