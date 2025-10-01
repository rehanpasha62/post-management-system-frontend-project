export function validatePost(values){
  const errors = {}
  if(!values.title || values.title.trim().length<3) errors.title = "Title must be at least 3 characters"
  if(!values.author || values.author.trim().length<2) errors.author = "Author required"
  if(!values.content || values.content.trim().length<20) errors.content = "Content must be at least 20 characters"
  return errors
}
