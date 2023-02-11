import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

export default function OneArticle() {
    const { id } = useParams()
    const [data, setData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3500/kb/'+id)
        .then(function (response) {
          // handle success
          setData(response.data)
          // console.log('response data: ' + response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function (response) {
          // always executed
        });
  
    }, [id])

    const handleDelete = () => {
        axios.delete('http://localhost:3500/kb/'+id).then(res => {
            // console.log(res);
            navigate('/KnowledgeBase')
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    const handleBack = () => {
        navigate('/KnowledgeBase')
    }

  return (
    <div>
        <h2>{data.title}</h2>
        {/* <p><small>{data._id}</small></p> */}
        <pre>{data.body}</pre>
        <button onClick={() => handleDelete()}>Delete</button>
        <button onClick={() => handleBack()}>Back</button>
        <button onClick={() => navigate('/KnowledgeBase/'+id+'/edit')}>Edit</button>
    </div>
  )
}
