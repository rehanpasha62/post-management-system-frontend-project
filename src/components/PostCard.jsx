import React from 'react'
import { Link } from 'react-router-dom'
export default function PostCard({post, onDelete}){
  return (
    <div className="card">
      <div className="row" style={{justifyContent:'space-between'}}>
        <div>
          <h3 style={{margin:'0 0 6px 0'}}><Link className="link" to={`/posts/${post.id}`}>{post.title}</Link></h3>
          <div className="meta small">by {post.author} • {new Date(post.createdAt).toLocaleString()}</div>
          <p className="small" style={{marginTop:8}}>{post.content.slice(0,140)}{post.content.length>140?'...':''}</p>
          <div style={{marginTop:8}}>
            {post.tags?.map(t=> <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
        <div className="actions">
          <Link to={`/posts/${post.id}/edit`} className="btn small">Edit</Link>
          <button className="btn" onClick={()=> {
            if(window.confirm('Delete this post?')) onDelete(post.id)
          }}>Delete</button>
        </div>
      </div>
    </div>
  )
}
