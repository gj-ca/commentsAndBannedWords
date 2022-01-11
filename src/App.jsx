import { useEffect, useState } from "react"
import Comment from "./Comment"
import BannedWordForm from "./BannedWordForm"

const OuterComponent = props => {
  return <InnerComponent 
  commentList={props.commentList}
  setCommentsFunction={props.setCommentsFunction} />
}

const InnerComponent = props => {
  const [formName, setFormName] = useState("")
  const [formText, setFormText] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    // Long form
    const newComments = props.commentList.slice()
    newComments.push({author: formName, text: formText})
    props.setCommentsFunction(newComments)
    //short form
    // setComments([...comments, {author: formName, text: formText, avatar:"https://i.pravatar.cc/50?" + Math.random()}])
  }
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>Name:</label>
      <input 
        value={formName}
        onChange={e => setFormName(e.target.value)}
      />
    </div>
    <div>
      <label>text:</label>
      <input 
        value={formText}
        onChange={e => setFormText(e.target.value)} 
      />
    </div>
    <button>Submit</button>
  </form>
  )
}

function App() {
  const [comments, setComments] = useState([])
  const [bannedWord, setBannedWord] = useState("")

  useEffect(() => {
    //fetching the data "sort of"
    setComments([
      {
        author:"Mary Jones",
        date:"11/12 6:00pm",
        text:"This is cool!",
        avatar:"https://i.pravatar.cc/50?" + Math.random()
      }, {
        author:"Joe Bloggs",
        date:"07/12 1:00pm",
        text:"Love this blog!",
        avatar:"https://i.pravatar.cc/50?" + Math.random()
      }, {
        author:"Jill Smith",
        date:"01/12 9:00am",
        text:"I like banana !!!",
        avatar:"https://i.pravatar.cc/50?" + Math.random()
      }
    ])
  }, [])

  return (
    <div>
      {comments.map(comment => 
        <Comment 
          avatar={comment.avatar}
          author={comment.author}
          text={comment.text}
          bannedWord={bannedWord}
        />
      )}
      <OuterComponent 
        commentList={comments}
        setCommentsFunction={setComments} />
        <hr />
      <BannedWordForm setBannedWord={setBannedWord}/>
    </div>
  )
}

export default App
