import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function Feeling () {
    const [feelings, setFeeling] = useState('');
    const dispatch = useDispatch();

    const getFeeling = (event) => {
        event.preventDefault();
        console.log('this is the feeling rating', feelings)
        dispatch({
            type: 'FEELING_NUMBER',
            payload: feelings
        })
    }

    return (
        <section>
            <header>
            <h1>How are you feeling today?</h1>
            <p>Feeling?</p>
                <form onSubmit={getFeeling}>
                    <input type='number'
                        required
                        placeholder='Feeling'
                        value={feelings}
                        onChange={(event)=> setFeeling(event.target.value)}>
                        </input>
                        <button type='submitBtn'>Next</button>
                </form>
            </header>
        </section>
    ) 
}
export default Feeling;