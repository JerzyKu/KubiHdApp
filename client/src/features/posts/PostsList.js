import { useSelector } from 'react-redux'
// import AddPostForm from './AddPostForm'
import PostsExcerpt from './PostsExcerpt'
import { getPostError, getPostStatus, selectAllPosts } from './postSlice'


export default function PostsList() {

    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostStatus)
    const error = useSelector(getPostError)

    console.log(postsStatus);

    let content
    if (postsStatus === 'loading') {
        content = <p>"Loading..."</p>
    } else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map((post) => <PostsExcerpt key={post._id} post={post} />)
    } else if (postsStatus === 'failed') {
        content = <p>{error}</p>
    }
    console.log(content);


    return (
        <section>
            {content}
        </section>
    )
}
