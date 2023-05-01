import React from 'react'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'


export default function PostsExcerpt({ post }) {
    return (
        <article>
            <h3>{post.title}</h3>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
            <p>{post.body.substring(0, 100)}</p>
            <ReactionButtons post={post} />
            <hr />
        </article>
    )
}
