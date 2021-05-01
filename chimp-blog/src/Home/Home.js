import { useState } from 'react';

const Home = () => {
  const [blogs] = useState([
    {title: 'Data Structure from craddle to grave', body:'Lets start from Linked list', author:'CodingChimp',id:1},
    {title: 'Be a real trouble maker', body:'sharp tounged but golden hearted', author:'CodingChimp',id:2},
  ]);
  
  return ( 
    <div className="home">
      {blogs.map(blog => (
        <div className="blogs-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
   );
}
 
export default Home;