import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
          <li><Link to="/">DashBoadrd</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/KnowledgeBase">Knowledge Base</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          
        </ul>
      </nav>
  )
}
