import { useState } from "react"

function Post({addComment}) {
    const [text, setText] = useState('')

    function handleText(event) {
        setText(event.target.value)
    }

    function handleComment(){
        addComment(text)
    }
    return (
        <>
            <label>Add your post</label>
            <input type="text" value={text} onChange={handleText}></input>
            <button onClick={handleComment}>submit</button>
        </>
    )
}

export default Post;