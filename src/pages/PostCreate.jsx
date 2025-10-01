import React from 'react'
import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm'

export default function PostCreate({posts, setPosts}){
  const nav = useNavigate()
  function handleCreate(values){
    const id = 'post-' + Date.now().toString(36) + Math.random().toString(36).slice(2,7)
    const now = new Date().toISOString()
    const newPost = {...values, id, createdAt: now, updatedAt: now}
    setPosts([newPost, ...posts])
    nav('/')
  }
  return (
    <div className="card">
      <h2>New Post</h2>
      <PostForm onSubmit={handleCreate} />
    </div>
  )
}
