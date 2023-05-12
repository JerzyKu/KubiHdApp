import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

export default function PostAuthor({userId}) {

    const users = useSelector(selectAllUsers)

    const author = users.find(user => String(user.id) === String(userId))

    return (
        <small style={{color: "grey", fontSize: '0.8rem'}}>by {author ? author.name : "Unknow author"}</small>
    )
}
