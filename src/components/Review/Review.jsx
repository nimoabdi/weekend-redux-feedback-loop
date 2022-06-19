import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Review () {
    const history = useHistory();

    const feeling = useSelector((store)=>{
        return store.feelingReducer
    })
    const understanding = useSelector((store)=>{
        return store.understandingReducer
    })
    const support = useSelector((store)=>{
        return store.supportReducer
    })
    const comments = useSelector((store)=>{
        return store.commentsReducer
    })

    let feedback = {
        feeling,
        support,
        understanding,
        comments
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/feedback', feedback
       
        })
        .then((response)=> {
            console.log('in post', response)
        })
        .catch((error)=> {
            console.log('error in put', error)
        })
        history.push('/SubmitThankYou')
    }
    return (
        <>
        <div>
            <h1>Review your feedback</h1>
            <h3>Feeling:{feeling}</h3>
            <h3>Understanding:{support}</h3>
            <h3>Support:{understanding}</h3>
            <h3>Comments:{comments}</h3>
        </div>
        <form
            onSubmit={handleSubmit}>
                <button>Submit</button>
        </form>
        </>
    )
}

export default Review;