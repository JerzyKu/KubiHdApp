import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function OneInventory() {

    const { id } = useParams()
    const [data, setData] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`http://localhost:3500/inventory/${id}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    function handleDelete() {
        axios
            .delete(`http://localhost:3500/inventory/${id}`)
            .then(res => {
                console.dir(res);
                navigate(`/inventory`)
            })
            .catch( err => {
                console.log(err);
            })
    }

    return (
        <div>
            <p>name: {data.name}</p>
            <p>Serial number: {data.serialNumber}</p>
            <p>Owner: {data.owner}</p>
            <button onClick={() => handleDelete()}>delete</button>
            <button>edit</button>
            <button>issue</button>
            <button>cancel</button>
        </div>
    )
}
