import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postSlice'
import { selectAllUsers } from '../users/usersSlice'

export default function AddPostForm() {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)

    const savePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
            setUserId('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ))

    return (
        <section>
            <h2>Add post</h2>
            <form>
                <label htmlFor="postTitle">Post title:</label>
                <input
                    type="text"
                    name="postTitle"
                    id="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />
                <br />
                <label htmlFor="postContent">Content:</label>
                <input
                    type="text"
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChange}
                />
                <br />
                <label htmlFor="postAuthor">Author:</label>
                <select 
                    name="postAuthor" 
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthorChange}
                > 
                    <option value=""></option>
                    { usersOptions }
                </select>
                <br />
                <button
                    type='button'
                    onClick={savePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}
