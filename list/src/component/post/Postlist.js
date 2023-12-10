import React from 'react'
import Postitem from './Postitem'
import './post.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Postlist = ({posts, remove}) => {
  return (
    <>
    <h1 >Список постів</h1>
    <TransitionGroup>
    {posts.map((post) => 
    <CSSTransition
    key={post.id}
    
    timeout={500}
    classNames="post"
  >
    <Postitem remove={remove} post={post}/>
  </CSSTransition>
   
     )}
    </TransitionGroup>
   
    </>
  )
}

export default Postlist