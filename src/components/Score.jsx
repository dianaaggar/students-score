import React, {useContext} from 'react'
import {AppContext} from '../contexts/context'



const Score = ({student}) => {
  return (
  <div className='mainCont'>

    <div className='leftSide'>
      <h2>Date</h2>
        {student.scores.map((score) => {
            return <p>{score.date}</p>
        })}
    </div>

    <div className='rightSide'>
      <h2>Score</h2>
        {student.scores.map((score) => {
            return <p>{score.score}</p>
        })}
    </div>

  </div>
  )
}

export default Score






