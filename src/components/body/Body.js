import './body.css';
import React, { useState, useEffect } from "react"
import axios from 'axios';

function Body() {


    const[article, setArticle] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get('https://api.kanye.rest/')

        setArticle(data)
}


  return (

<div class="card container">
    <p class="center">{article.quote}</p> 
</div>


);
}

export default Body;