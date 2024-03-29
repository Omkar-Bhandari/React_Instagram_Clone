import React , {useState , useEffect} from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase';

function App() {
  const [posts,setPosts] = useState([]);
  
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc => doc.data()));
    })

  }
  )

  return (
    <div className="App">
      <div className="app_header">
        <img className="app_logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram-text-logo"/>
      </div>

      <h1>Hello This is Omkar</h1>

      {
        posts.map(post =>(
          <Post username={post.username} caption={post.caption} imageURL={post.imageURL} />
        ))
      }
      
    </div>
  );
}

export default App;
