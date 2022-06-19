import { useDispatch } from 'react-redux';
import  { useState } from 'react';

function Comments () {
    const dispatch = useDispatch();
    const [comments, setComments] = useState('') 
    const getComments = (event) => {
        event.preventDefault();
        console.log('this is the comment rating', comments)
        dispatch({
            type: 'COMMENT_NUMBER',
            payload: comments
        })
    }
    return (
        <section>
            <header>
                <h1>Any comments you want to leave?</h1>
                <p>Comments</p>
                <form onSubmit={getComments}>
                    <input 
                        required
                        placeholder='Comments'
                        value={comments}
                        onChange={(event)=> setComments(event.target.value)}>
                        </input>
                        <button type='submitBtn'>Next</button>
                </form>
            </header>
        </section>
    ) 
}
export default Comments;