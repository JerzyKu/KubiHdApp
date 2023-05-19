import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function DashBoard() {

  // const [number, setNumber] = useState(7)
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('http://localhost:3500/stats')
      .then(res => {
        setData(res.data)
      }).catch(err => console.log(err))

  }, [])

  return (
    <div>
      Knowledge Base Articles : {data.articles}
      <hr />
      Items of inventory: {data.items}
      <hr />
      Number of users: {data.users}
      <hr />
      Number of posts: {data.posts}
    </div>
  )
}
