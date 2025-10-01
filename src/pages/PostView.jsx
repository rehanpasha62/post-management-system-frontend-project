import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function PostView({posts}){
  const {id} = useParams()
  const post = posts.find(p=>p.id===id)
  if(!post) return <div className="empty card">Post not found</div>
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2 style={{margin:0}}>{post.title}</h2>
        <div className="small meta">by {post.author}</div>
      </div>
      <div className="meta small" style={{marginTop:6}}>Created: {new Date(post.createdAt).toLocaleString()} • Updated: {new Date(post.updatedAt).toLocaleString()}</div>
      <div style={{marginTop:12, whiteSpace:'pre-wrap'}}>{post.content}</div>
      <div style={{marginTop:12}}>
        {post.tags?.map(t=> <span key={t} className="tag">{t}</span>)}
      </div>
      <div style={{marginTop:12}}>
        <Link to="/" className="link">Back to list</Link> • <Link to={`/posts/${post.id}/edit`} className="link">Edit</Link>
      </div>
    </div>
  )
}
