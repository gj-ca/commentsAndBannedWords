import React, {useState} from 'react'

const BannedWordForm = props => {
    const [word, setWord] = useState("")
  
    const handleSubmit = e => {
      e.preventDefault()
      props.setBannedWord(word)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>word:</label>
        <input 
          value={word}
          onChange={e => setWord(e.target.value)} 
        />
        <button>Submit new banned word</button>
      </form>
    )
  }

  export default BannedWordForm