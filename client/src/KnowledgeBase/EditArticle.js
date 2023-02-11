import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditArticle() {

  const { id } = useParams()
  // const [data, setData] = useState({})
  const [title, setTitle] = useState("")
  const [body, setBody] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
      axios.get(`http://localhost:3500/kb/${id}`)
      .then(function (response) {
        // handle success
        // setData(response.data)
        setTitle(response.data.title)
        setBody(response.data.body)
        // console.log('' + response);
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
      .finally(function (response) {
        // always executed
      });

  }, [id])

  return (
    <div>
      <label htmlFor="title">title: </label><br />
      <input type="text" name="title" id="title" value={title } onChange={e => setTitle(e.target.value)}/><br />
      <label htmlFor="bodyArticle"></label>
      <textarea name="bodyArticle" id="bodyArticle" cols="30" rows="10" onChange={e => setBody(e.target.value)} value={body} /><br />
      <button onClick={() => navigate('/KnowledgeBase/' + id)}>cancel</button>
    </div>
  )
}
