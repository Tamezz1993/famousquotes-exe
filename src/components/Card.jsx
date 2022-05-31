import React from 'react'

const Card = ({userRandom,colorRandom,clickButton}) => {
  
    const styleButton = {
      backgroundColor : colorRandom 
    }

    

    return (
    <article className='card' style={{color:colorRandom}}>
        <h2 className='card__quote'>{userRandom.quote}</h2>
        <p className='card__author'>{userRandom.author}</p>
        <button style={styleButton} className='card__btn'onClick={clickButton}>&#62;</button>
    </article>
  )
}

export default Card 