import React from 'react'
import axios from "axios";
import "../src/styles/styles.css"

import { useEffect, useState } from 'react';
function App() {
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response.data)
      setListOfPosts(response.data);
    })
  }, [])
  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div className='post'>
            <div className='title'>
              {value.title}
            </div>
            <div className='textContent'>
              {value.postText}
            </div>
            <div className='footer'>
              @{value.username}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App