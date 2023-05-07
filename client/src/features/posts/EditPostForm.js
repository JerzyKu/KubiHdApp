import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, updatePost } from "./postSlice";
import { useNavigate, useParams } from "react-router-dom";
import { selectAllUsers } from "../users/usersSlice";

const EditPostForm = () => {
    const { postId } = useParams()
    const navigate = useNavigate() 

    const post = useSelector((state) => selectPostById(state, postId))
    const users = useSelector(selectAllUsers)

    const [title, setTitle] = useState(post?.title)
    const [content, setContent] = useState(post?.body)
    const [userId, setUserId] = useState(post?._id)
    const [requestStatus, setRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    if (!post) {
        return (
            <section>
                <h2>Post not found :( </h2>
            </section>
        )
    }

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [title,content,userId].every(Boolean)&&requestStatus==='idle'

    const onSavePostClicked = () => {
        if(canSave) {
            try {
                setRequestStatus('pending')
                dispatch(updatePost({title, body: content, userId})).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigate(`/post/${postId}`)
            } catch (err) {
                console.error('Filed to save post :( : ', err)
            } finally {
                setRequestStatus('idle')
            }
        }
    }

    const userOptions = users.map( user => (
        <option
            key={user.id}
            value={user.id}
        > {user.name}</option>
    ))

    return (
        <section>
            <h2>Edit post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" defaultValue={userId} onChange={onUserIdChanged}>
                    <option value={""}></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Content: </label>
                <textarea 
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post
                </button>

            </form>
        </section>
    )
}

export default EditPostForm
