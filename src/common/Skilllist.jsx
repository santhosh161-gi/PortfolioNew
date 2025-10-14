import React from 'react'

function Skilllist({Icon,name}) {
  return (
    <span>
        <img src={Icon} alt="" />
        <p>{name}</p>
    </span>
  )
}

export default Skilllist
