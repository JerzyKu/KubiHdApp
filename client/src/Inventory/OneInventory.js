import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function OneInventory() {

    const { id } = useParams()
    const [data, setData] = useState({})

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

    return (
        <div>
            <p>name: {data.name}</p>
            <p>Serial number: {data.serialNumber}</p>
            <p>Owner: {data.owner}</p>
            <button>delete</button>
            <button>edit</button>
            <button>issue</button>
            <button>cancel</button>
        </div>
    )
}
