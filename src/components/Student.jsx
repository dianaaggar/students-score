import React from 'react'
import Score from './Score'



const Student = ({student}) => {
  return (
    
  <div className='student'> 
    <h1>{student.name}</h1>
      <h2>Bio</h2>
        <p>{student.bio}</p>

    <Score student={student}/>

  </div>
  )
}

export default Student
