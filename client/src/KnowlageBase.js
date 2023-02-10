import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Article from './ArticleElement';
import { Link } from 'react-router-dom';
export default function KnowlageBase() {

  const [articles, setArticles] = useState([])
  const [filtredArticles, setFiltredArticles] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3500/kb/')
      .then(function (response) {
        // handle success
        setArticles(response.data)
    setFiltredArticles(articles)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }, [])

  useEffect(() => {
    setFiltredArticles(articles)
  },[articles])

  function handleSearch(e) {
    setFiltredArticles(articles.filter( el =>  el.title.includes(e.target.value) ))
  }

  return (
    <>
    <Link to="/KnowledgeBase/new">New Knowlake Base Article</Link><br />
    <input type="text" name="search" id="search" placeholder='search' onChange={(e) => handleSearch(e)}/>
    <div className='articles'>
      {filtredArticles.map((data) => (
        <Article
        title={data.title}
        body={data.body}
        id={data._id}
        key={data._id}
        />
        ))}
    </div>
        </>
  );

}
