import React from 'react'
import './Video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recomended from '../../components/Recomended/Recomended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId,categoryId}= useParams()
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} categoryId={categoryId} />
      <Recomended categoryId={categoryId}/>
    </div>
  )
}

export default Video