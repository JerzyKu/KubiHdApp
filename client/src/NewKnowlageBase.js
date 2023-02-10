import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NewKnowlageBase() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('here');
        axios
            .post('http://localhost:3500/kb/', {
                title,
                body
            })
            .then(function (response) {
                // console.log(response);
                navigate('/KnowledgeBase')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h2>NewKnowlageBase</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='tittle' > Tittle: </label>
                <input type="text" name="tittle" id="tittle" value={title} onChange={e => setTitle(e.target.value)} required/><br />
                <label htmlFor='body' >Body of atricle: </label>
                <textarea id='body' value={body} onChange={e => setBody(e.target.value)} required></textarea> <br />
                <button type="submit">Save</button>
                <button type="reset">Clear</button>
            </form>
        </div>
    )
}
