import React, {useState, useMemo} from 'react'
import PostCard from '../components/PostCard'
import { Link } from 'react-router-dom'

export default function PostList({posts, setPosts}){
  const [q, setQ] = useState('')
  const [author, setAuthor] = useState('')
  const [page, setPage] = useState(1)
  const per = 6

  const authors = useMemo(()=> Array.from(new Set(posts.map(p=>p.author))), [posts])

  function deletePost(id){
    setPosts(posts.filter(p=>p.id!==id))
  }

  const filtered = posts.filter(p=>{
    return (!q || p.title.toLowerCase().includes(q.toLowerCase()))
      && (!author || p.author===author)
  })

  const pages = Math.max(1, Math.ceil(filtered.length / per))
  const shown = filtered.slice((page-1)*per, (page-1)*per + per)

  return (
    <>
      <div className="card">
        <div className="search-row">
          <input placeholder="Search by title" value={q} onChange={e=>{setQ(e.target.value); setPage(1)}} className="input" />
          <select value={author} onChange={e=>{setAuthor(e.target.value); setPage(1)}}>
            <option value=''>All authors</option>
            {authors.map(a=> <option key={a} value={a}>{a}</option>)}
          </select>
          <Link to="/posts/new" className="btn">New</Link>
        </div>
      </div>

      {shown.length===0 ? <div className="empty card">No posts found. Try changing filters.</div> :
        <div className="posts-grid">
          {shown.map(p=> <PostCard key={p.id} post={p} onDelete={deletePost} />)}
        </div>
      }

      <div className="pagination">
        <button className="btn" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>Prev</button>
        <div className="card small" style={{padding:'6px 10px'}}>{page} / {pages}</div>
        <button className="btn" onClick={()=>setPage(p=>Math.min(pages,p+1))} disabled={page===pages}>Next</button>
      </div>
    </>
  )
}
