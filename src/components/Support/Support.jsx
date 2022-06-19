import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Support() {
    const [supports, setSupport] = useState('');
    const dispatch = useDispatch();

    const fetchSupport = (event) => {
        event.preventDefault();
        console.log('this is the support rating', supports)
        dispatch({
            type: 'SUPPORT_NUMBER',
            payload: supports
        })
    }

    return (
        <section>
            <header>
            <h1>How well are you supported today?</h1>
            <p>Support?</p>
                <form onSubmit={fetchSupport}>
                    <input type='number'
                        required
                        placeholder='Support'
                        value={supports}
                        onChange={(event)=> setSupport(event.target.value)}>
                        </input>
                        <button type='submitBtn'>Next</button>
                </form>
            </header>
        </section>
    )
}
export default Support;