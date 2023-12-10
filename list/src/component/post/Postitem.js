import React from 'react'
import './post.css'
const Postitem = (props) => {
  return (
    <>
    <div className='post'>
      <div className='post-content'>
        <strong>{props.post.id}.{props.post.title}</strong>
        <div>
         {props.post.body}
        </div>
      </div>
      <div className='post-btn'>
        <button onClick={()=> props.remove(props.post)}> Видалити</button>
      </div>
    </div>
    </>
  )
}

export default Postitem