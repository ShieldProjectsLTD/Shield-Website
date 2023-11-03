import React from 'react'
import { useParams } from 'react-router-dom'


const New = ({match}) => {
  
 const { newsId} = useParams
  return (
    <div>
    <h1>Страница новости {newsId}</h1>
  </div>
  )
}

export default New