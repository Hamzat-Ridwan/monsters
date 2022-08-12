import React from 'react'
import './card.styles.css'

const Card = ({monster}) => {
  return (
    <div className='card-container' >
        <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2z`} />
        <h1 key={monster.id} >{monster.name}</h1>
        <p>{monster.email}</p>
    </div>
  )
}

export default Card