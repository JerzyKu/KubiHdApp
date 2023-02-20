import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateUser() {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        axios
            .post('http://localhost:3500/users', {
                name,
                surname
            })
            .then(res => {
                console.log(res);
                navigate('/users')
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <label htmlFor="surname">Surname: </label>
            <input
                type="text"
                name="surname"
                id="surname"
                value={surname}
                onChange={e => setSurname(e.target.value)}
            />
            <hr />
            <button type="submit">Create</button>
        </form>
    )
}
