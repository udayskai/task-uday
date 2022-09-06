


import React from 'react'

export const ClickableCard = ({children ,onClick,...etc}) => {
  return (
    <div className='click' onClick={onClick} {...etc}>{children}</div>
  )
}
