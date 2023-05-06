import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <h1>Redux Blog</h1>
        <div>
            <ul>
                <li><Link to='/blog'>Home</Link></li>
                <li><Link to='/blog/post'>Post</Link></li>
            </ul>
        </div>
    </header>
  )
}
