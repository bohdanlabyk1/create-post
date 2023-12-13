import {  useEffect, useMemo, useState } from 'react'
import NewPost from './component/createPost/NewPost';
import Postlist from './component/post/Postlist';
import './App.css';
import Modal from './component/MyModal/Modal';
import PostFilter from './component/sreach/PostFilter';
import PostServises from './component/api/PostServises';
import { gePagesArray, getPage } from './util/util';

function App() {
const [posts, setPosts] = useState([]);
const [isModalOpen, setModalOpen] = useState(false);
const [filter, setFilter] = useState({sort:'', query:''})
const [totalPage, setTotalPage] = useState(0)
const [limit, setLimit] =useState(10);
const [page, setPage] = useState(1);

let pagesArray = gePagesArray(totalPage);

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await PostServises.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-Page'];
      setTotalPage(getPage(totalCount, limit));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  fetchPosts();
}, [limit, page]);

  const sortedPost = useMemo(() =>{
 if(filter.sort){
  return[...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
 }return posts
  },[filter.sort, posts])

  const SortaddPost = useMemo (() => {
   if (!sortedPost) return [];
    return sortedPost.filter(posts => posts.title.includes(filter.query));
   }, [filter.query, sortedPost])

   const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  {/* Створення постів */}
 const createPost = (NewPost) => {
  setPosts ([...posts, NewPost])
 }
 const remuvPost = (post) => {
   setPosts(posts.filter(p => p.id !== post.id))
 }
 const handlePageChange = (newPage) => {
  setPage(newPage);
 };
  return (
    <div className="App">
   <button style={{marginTop: 30}} onClick={openModal}>Створити пост</button>
   {pagesArray.map(p =>
      <h1>{p}</h1>
      )}
       <Modal isOpen={isModalOpen} onClose={closeModal}>
        <NewPost create={createPost}/>
        </Modal>
   <PostFilter filter={filter} setFilter={setFilter}/>
   
     <Postlist remove={remuvPost} posts={SortaddPost}/>

     <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
          Prev
        </button>
        {pagesArray.map((pageNum) => (
          <button key={pageNum} onClick={() => handlePageChange(pageNum)}>
            {pageNum}
          </button>
        ))}
        <button disabled={page === totalPage} onClick={() => handlePageChange(page + 1)}>
          Next
        </button>
      
       
    </div>
  )
   }
export default App
