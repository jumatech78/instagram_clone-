import React from 'react'
import Avatar from '@mui/material/Avatar'
import './AvatarCard.css'

function AvatarCard() {
  return (
    <div className='container'>
    <div className='avatar_container'>
      <Avatar className='avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgzw_EbkMKk_l7Bx816GKDY_lJrGFA7yEVQ&usqp=CAU"/>
    </div>
    <h6 className='avatar_name'>juma</h6>
    </div>
  )
}

export default AvatarCard
