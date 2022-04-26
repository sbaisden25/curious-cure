import './body.css';
import React, { useState, useEffect } from "react"
import axios from 'axios';

function Body() {


    const[article, setArticle] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get('https://curiouscure.herokuapp.com/')

        setArticle(data)
}


  return (

<div class="card container">
    <a href={article.article} class="center" target="_blank" rel="noopener noreferrer">{article.article}</a> 
</div>


);
}

export default Body;