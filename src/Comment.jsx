import React from 'react'

const Comment = props => {
    const isBanned = text => {
        if (props.bannedWord != "") {
            return text.includes(props.bannedWord)
        } else {
            return false
        }
    }
    return (
      <div>
        <img src={props.avatar} />
        <p>{props.author}</p>
        <p>{isBanned(props.text) ? "banned" : props.text}</p>
      </div>
    )
  }
  

export default Comment