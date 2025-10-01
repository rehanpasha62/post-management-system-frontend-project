import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm'

export default function PostEdit({posts, setPosts}){
  const {id} = useParams()
  const nav = useNavigate()
  const post = posts.find(p=>p.id===id)
  if(!post) return <div className="empty card">Post not found</div>

  function handleSave(values){
    const updated = {...post, ...values, updatedAt: new Date().toISOString()}
    setPosts(posts.map(p=> p.id===post.id ? updated : p))
    nav(`/posts/${post.id}`)
  }

  return (
    <div className="card">
      <h2>Edit Post</h2>
      <PostForm initial={post} onSubmit={handleSave} submitLabel="Update" />
    </div>
  )
}
