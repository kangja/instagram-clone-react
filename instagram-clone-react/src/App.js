import React, { useState, useEffect } from "react";
import './App.css';
import Post from "./Post";
import { db } from "./firebase"

function App() {
  const [posts, setPosts] = useState([]);

  // UseEffect: runs a piece of code based on a specific codition

  useEffect(() => {
    // this is where the code runs
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
    // every time a new post is added, this code fires
}, []);

  return (
    <div className="app">

      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        </div>
       
       <h1>Hello my name is jason</h1>

      {
        posts.map(({id, post}) => (
           <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

      </div>
      
  );
}

export default App;
