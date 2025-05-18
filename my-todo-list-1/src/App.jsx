import { useState } from "react";
import Post from "./components/Post"
import PostList from "./components/PostList";

function App() {
  const [input, setInput] = useState([])

  function addComments(comment) {
    setInput((input) =>[...input, comment])
  }

  return (
    <>
      <Post addComment={addComments}/>
      <PostList comments={input}></PostList>
    </>
  )
}

export default App;



