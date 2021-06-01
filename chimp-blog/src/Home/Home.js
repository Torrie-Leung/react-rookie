import { useState,useEffect } from 'react';
import BlogList from '../BlogLists'

const Home = () => {
  const [blogs,setBlogs] = useState(null);

  const handleDel= (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data)
      })
  },[blogs])
  
  return ( 
    <div className="home">
      {blogs && <BlogList blogs={blogs.filter(blog=> blog.author == 'CodingChimp')} title="CoolChimps's" handleDel= {handleDel}/>}
      {blogs &&<BlogList blogs={blogs.filter(blog=> blog.author == 'Yoshi')} title="Yoshi's" handleDel= {handleDel}/>}
    </div>
   );
}
 
export default Home;