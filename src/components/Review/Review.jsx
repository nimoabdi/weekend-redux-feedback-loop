import React from 'react';
import { useSelector } from 'react-redux';

    const feelingForm = useSelector(store => store.feelingReducer);
    const supportForm = useSelector(store => store.supportReducer);
    const commentForm = useSelector(store => store.commentReducer);
    const understandingForm = useSelector(store => store.understandingReducer);

    const handleSubmit = (event) => {
        event.preventDefault();

        let fetchReviews = {
            feelings: feelingForm,
            supports: supportForm,
            comments: commentForm,
            getUnderstanding: understandingForm
        }
        console.log('New reviews in', fetchReviews);

        axios({
            method: 'POST',
            url: '/feedback',
            data: fetchReviews
        })
        .then((response)=> {
            console.log('in post', response)
        })
        .catch((error)=> {
            console.log('error in put', error)
        })
    }
function Review () {
    return (
        <>
        <div>
            <h1>Review your feedback</h1>
            <h3>Feeling:{feelingForm}</h3>
            <h3>Understanding:{understandingForm}</h3>
            <h3>Support:{supportForm}</h3>
            <h3>Comments:{commentForm}</h3>
        </div>
        <form
            onSubmit={handleSubmit}>
                <button>Submit</button>
        </form>
        </>
    )
}
export default Review;