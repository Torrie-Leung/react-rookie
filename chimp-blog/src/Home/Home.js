import { useState } from 'react';
import BlogList from '../BlogLists'

const Home = () => {
  const [blogs] = useState([
    {title: 'Data Structure from craddle to grave', body:'Lets start from Linked list', author:'CodingChimp',id:1},
    {title: 'Be a real trouble maker', body:'sharp tounged but golden hearted', author:'CodingChimp',id:2},
    {title: 'My treasure', body:'How to collect all the stamps', author:'Yoshi',id:3},
  ]);
  
  return ( 
    <div className="home">
      <BlogList blogs={blogs.filter(blog=> blog.author == 'CodingChimp')} title="CoolChimps's"/>
      <BlogList blogs={blogs.filter(blog=> blog.author == 'Yoshi')} title="Yoshi's"/>
    </div>
   );
}
 
export default Home;