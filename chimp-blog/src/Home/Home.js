import { useState } from 'react';
import BlogList from '../BlogLists'

const Home = () => {
  const [blogs] = useState([
    {title: 'Data Structure from craddle to grave', body:'Lets start from Linked list', author:'CodingChimp',id:1},
    {title: 'Be a real trouble maker', body:'sharp tounged but golden hearted', author:'CodingChimp',id:2},
  ]);
  
  return ( 
    <div className="home">
      <BlogList blogs={blogs}/>
    </div>
   );
}
 
export default Home;