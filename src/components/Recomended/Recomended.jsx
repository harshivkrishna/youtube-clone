import React, { useEffect, useState } from 'react'
import './Recomended.css'

import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom'

const Recomended = ({categoryId}) => {
    const [apiData,setApiData] = useState([]);
    const fetchData = async ()=>{
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY} `
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));
    }
    useEffect(()=>{
        fetchData();
    },[])
    function scroll(){
        document.body.scrollTop(0);
    }
  return (
    <div className='recomended'>
    {apiData.map((item,index)=>{
        return(
        <Link to={`/video/${categoryId}/${item.id}`} className="side-video-list" key={index} onClick={scroll}>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="video-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
        </Link>
        )
    })}
    </div>
    
  )
}

export default Recomended