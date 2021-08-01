import React, { useEffect, useState } from 'react'
import data from './listData'

const App = () => {
 const [currentScore, setCurrentScore] = useState(0)
 const [totalScore, setTotalScore] = useState(0)
 const [list, setList] = useState(data)
 
 const shuffleList = (clickedlist) => {
   const newlist = [...clickedlist]
   for( let i = newlist.length-1; i >= 1; i--) {
    let j = Math.floor(Math.random()*i)+0
    let sub = newlist[j]
    newlist[j] = newlist[i]
    newlist[i] = sub
   }
   setList(newlist)
   
 }
 const updateClickStatus = (id) => {
   
  let newlist = [...list]
  newlist = newlist.map((current) => {
    if (current.id === id) {
      return {...current, clicked: true}
    } else
    return current
  })
  shuffleList(newlist)
 }

 const handleClick = (id, clicked) => {
  
    if (!clicked) {
      updateClickStatus(id)  
      setCurrentScore(currentScore + 1)
    } else {
      setTotalScore(currentScore) 
      setCurrentScore(0)
      setList(data)
    }
   
 }

  return (
    <div className='content'>
      <div>
        Max Score - {totalScore}
      </div>
      <div>
        Current Score - {currentScore}
      </div>
      <ul>
        {
          list.map(item => {
            const { id, name, clicked } = item
            return <li key={id} 
            onClick={() => handleClick(id, clicked)}
            >
              {name}
            </li>
          })
        }
      </ul>
    </div>
       
  );
}

export default App;
