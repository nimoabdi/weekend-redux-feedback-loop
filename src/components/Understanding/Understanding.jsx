import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {
    const [getUnderstanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const fetchUnderstanding = (event) => {
        event.preventDefault();
        console.log('this is the understanding rating', getUnderstanding)
        dispatch({
            type: 'UNDERSTANDING_NUMBER',
            payload: getUnderstanding
        })
        history.push('/Support');
    }

    return (
        <section>
        <header>
            <h1>How well are you understanding the content?</h1>
            <p>Understanding?</p>
                <form onSubmit={fetchUnderstanding}>
                    <input type='number'
                        required
                        placeholder='Understanding'
                        value={getUnderstanding}
                        onChange={(event)=> setUnderstanding(event.target.value)}>
                        </input>
                        <button type='submitBtn'>Next</button>
                </form>
            </header>

        </section>
    )
}
export default Understanding;