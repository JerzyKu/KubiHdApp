import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewItem() {
    
    const [name, setName] = useState('')
    const [serialNumber, setSerialNumber] = useState('')

    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3500/inventory/',{
            name,
            serialNumber
        })
        .then( res => {
            nav('/inventory')
        })
        .catch( e => {
            console.log(e);
        })
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label
                    htmlFor="name"
                >Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                /><br />
                <label htmlFor="serialNumber">serialNumber: </label>
                <input
                    type="text"
                    name="serialNumber"
                    id="serialNumber"
                    placeholder='serialNumber'
                    value={serialNumber}
                    onChange={e => setSerialNumber(e.target.value)}
                /><br />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
