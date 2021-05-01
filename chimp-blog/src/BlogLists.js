const BlogList = ({ blogs,title }) =>{
  return (
    <div className="blog-list">
    <p>{title} area</p>
      {blogs.map(blog => (
        <div className="blogs-preview" key={blog.id}>
          
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
      
    </div>
  )
}
export default BlogList;