import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import AddPostForm from './AddPostForm'
import PostsExcerpt from './PostsExcerpt'
import { fetchPosts, getPostError, getPostStatus, selectAllPosts } from './postSlice'


export default function PostsList() {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostStatus)
    const error = useSelector(getPostError)

    console.log(postsStatus);

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postsStatus, dispatch])

    let content
    if (postsStatus === 'loading') {
        content = <p>"Loading..."</p>
    } else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map((post) => <PostsExcerpt key={post.id} post={post} />)
    } else if (postsStatus === 'failed') {
        content = <p>{error}</p>
    }
    console.log(content);


    return (
        <section>
            {/* <AddPostForm /> */}
            <hr />
            <h2>Posts</h2>
            <hr />
            {content}
            
        </section>
    )
}
