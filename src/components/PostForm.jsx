import React, {useState, useEffect} from 'react'
import { validatePost } from '../utils/validators'

export default function PostForm({initial={}, onSubmit, submitLabel='Save'}) {
  const [values, setValues] = useState({
    title: initial.title||'',
    author: initial.author||'',
    content: initial.content||'',
    tags: (initial.tags||[]).join(', ')
  })
  const [errors, setErrors] = useState({})

  useEffect(()=> setValues({
    title: initial.title||'',
    author: initial.author||'',
    content: initial.content||'',
    tags: (initial.tags||[]).join(', ')
  }), [initial])

  function handleChange(e){
    setValues({...values, [e.target.name]: e.target.value})
  }

  function submit(e){
    e.preventDefault()
    const parsed = {...values, tags: values.tags.split(',').map(t=>t.trim()).filter(Boolean)}
    const errs = validatePost({...parsed})
    setErrors(errs)
    if(Object.keys(errs).length===0){
      onSubmit(parsed)
    }
  }

  return (
    <form onSubmit={submit}>
      <div className="form-row">
        <label className="small">Title</label>
        <input name="title" className="input" value={values.title} onChange={handleChange} />
        {errors.title && <div className="small" style={{color:'red'}}>{errors.title}</div>}
      </div>
      <div className="form-row">
        <label className="small">Author</label>
        <input name="author" className="input" value={values.author} onChange={handleChange} />
        {errors.author && <div className="small" style={{color:'red'}}>{errors.author}</div>}
      </div>
      <div className="form-row">
        <label className="small">Content</label>
        <textarea name="content" rows="6" className="input" value={values.content} onChange={handleChange} />
        {errors.content && <div className="small" style={{color:'red'}}>{errors.content}</div>}
      </div>
      <div className="form-row">
        <label className="small">Tags (comma separated)</label>
        <input name="tags" className="input" value={values.tags} onChange={handleChange} />
      </div>
      <div style={{display:'flex',gap:8}}>
        <button className="btn" type="submit">{submitLabel}</button>
      </div>
    </form>
  )
}
