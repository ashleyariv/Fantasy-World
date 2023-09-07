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
            <h1>Book Reviews 📝</h1>
            <form id='form' onSubmit={handleSubmit}>
                <input onChange={handleChange} value={formInput.name} type='text' name='name' placeholder='Book Name' />
                <input onChange={handleChange} value={formInput.author} type='text' name='author' placeholder='Book Author' />
                <input onChange={handleChange} value={formInput.review} type='text' name='review' placeholder='Thoughts...' />
                <button type='submit'> 🖊 </button>
            </form>
            <div>
                {reviews.map(review => {
                    return <ReviewCard key={review.id} review={review} />
                })}
            </div>
        </div>
    )
}

export default ReviewsForm