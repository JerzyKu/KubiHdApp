import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function TableRow({ el }) {

    const nav = useNavigate()

    return (
        // <Link to={`${el.serialNumber}`}>
            <tr onClick={() => nav(`${el._id}`)}>
                <td>{el.name}</td>
                <td>{el.serialNumber}</td>
                <td>{el.createdAt}</td>
                <td>{JSON.stringify(el.owner)}</td>
            </tr>
        // </Link>
    )
}
