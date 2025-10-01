import React, {useEffect, useState} from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import PostList from './pages/PostList'
import PostCreate from './pages/PostCreate'
import PostEdit from './pages/PostEdit'
import PostView from './pages/PostView'
import { useLocalStorage } from './hooks/useLocalStorage'
import seed from './data/seed.json'

function App(){
  const [posts, setPosts] = useLocalStorage('pms_posts', seed)
  // ensure seed is loaded if empty
  useEffect(()=> {
    if(!posts || posts.length===0) setPosts(seed)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
      <header className="header">
        <h1>Post Management System</h1>
        <nav className="row">
          <Link className="link" to="/">Posts</Link>
          <Link style={{marginLeft:12}} className="btn" to="/posts/new">New Post</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<PostList posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/new" element={<PostCreate posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/:id" element={<PostView posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/:id/edit" element={<PostEdit posts={posts} setPosts={setPosts} />} />
      </Routes>
    </div>
  )
}

export default App
