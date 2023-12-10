import { useState } from 'react'

import './new.css'

const NewPost = ({create}) => {

    const[post, setPost] = useState({ title: '', body:'' })

   const addNewPost =(e)=> {
     e.preventDefault()
   
     const NewPost = {
       ...post, 
     };
     create(NewPost)
     setPost({ title: '', body:'' })

    }

  return (
   <form>
    <input
    value={post.title}
    onChange={e => setPost({...post,  title: e.target.value})}
      type= "text"
      placeholder="Назва поста"
    />
    <input
      value={post.body}
      onChange={e => setPost({...post, body: e.target.value})}
      type= "text"
      placeholder="Текст поста"
    />
    <button onClick={addNewPost}>Створити пост</button>
   </form>
  )
}

export default NewPost