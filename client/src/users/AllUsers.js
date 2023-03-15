import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserRow from './UserRow'

export default function AllUsers() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3500/users')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <>
            <Link to="/users/new">New user</Link>
            <hr />
            {/* <div>{JSON.stringify(data)}</div> */}
            <table>
                <thead>
                    <tr>
                        <th>
                            name
                        </th>
                        <th>
                            surname
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(el => (
                        <UserRow
                            name={el.name}
                            surname={el.surname}
                            key={el._id}
                        />
                    ))}
                </tbody>

            </table>
        </>
    )
}
