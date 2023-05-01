import React from 'react'
import { Link } from 'react-router-dom'


export default function Article({title, body, id}) {
  return (
    <Link to={`${id}`}>
    <article className='kb-article'>
      <h2>{title}</h2>
      {/* <p><small>{id}</small></p> */}
      <pre>{body}</pre>
    </article>
    </Link>
  )
}
