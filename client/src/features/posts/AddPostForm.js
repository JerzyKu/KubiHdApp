import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPost } from './postSlice'
import { selectAllUsers } from '../users/usersSlice'
import { useNavigate } from 'react-router-dom'

export default function AddPostForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const users = useSelector(selectAllUsers)

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)

    //const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

    const savePostClicked = () => {
        if(canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({
                    title,
                    body: content,
                    userId
                })).unwrap() // wach promi, and throw an err if needed, from redux toolkid

                setTitle('')
                setContent('')
                setUserId('')

                navigate('/Blog/')

            } catch (err) {
                console.error('Filed to save the post', err)
            }
            finally {
                setAddRequestStatus('idle')
            }
        }
    }


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

                <label htmlFor="postContent">Content:</label>
                <textarea
                    type="text"
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChange}
                />
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
 