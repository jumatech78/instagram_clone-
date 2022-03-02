import React from 'react'
import Avatar from '@mui/material/Avatar'
import './AvatarCard.css'

function AvatarCard(props) {
  return (
    <div className='container'>
    <div className='avatar_container'>
      <Avatar className='avatar' src={props.post_story.photo}/>
    </div>
    <h6 className='avatar_name'>{props.post_story.name}</h6>
    </div>
  )
}

export default AvatarCard
