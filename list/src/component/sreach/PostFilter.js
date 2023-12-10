import React from 'react'
import MySelect from './../sortPost/MySelect';
const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <input 
    value={filter.query}
    onChange={e => setFilter({...filter, query: e.target.value})}
    placeholder='Пошук...'
    />
    <MySelect
    value={filter.sort}
    onChange={selectSort => setFilter({...filter, sort: selectSort})}
    placeholder="fcd"

   option={[
   {value: 'id', name: 'Сортування по'},
    {value: 'title', name: 'По назві'},
    {value: 'body', name: 'По описі'},
   ]}/>
    </div>
  )
}

export default PostFilter