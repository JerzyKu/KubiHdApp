import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link, useParams } from "react-router-dom";

const SinglePostPage = () => {
    const {postId} = useParams()

    const post = useSelector((state) => selectPostById(state, postId))

    if (!post) {
        return (
            <section>
                <h2>Post not foung!</h2>
                {postId}
            </section>
        )
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postCredit">
                <Link to={`/Blog/post/edit/${post._id}`} >Edit post </Link>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post={post}/>
        </article>
    )
}

export default SinglePostPage