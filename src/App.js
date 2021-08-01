import React, {  useState } from 'react'
import data from './listData'

const App = () => {
 const [currentScore, setCurrentScore] = useState(0)
 const [totalScore, setTotalScore] = useState(0)
 const [list, setList] = useState(data)
 
 const shuffleList = (newlist) => {
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
      if (currentScore > totalScore) {
        setTotalScore(currentScore)
      }       
      setCurrentScore(0)
      setList(data)
    }
   
 }

  return (
    <div className='content'>
      <div className='max-score'>
        Max Score - {totalScore}
      </div>
      <div className='current-score'>
        Current Score - {currentScore}
      </div>
      <ul className='data-list'>
        {
          list.map((item) => {

            const { id, name, clicked } = item  
            return <li 
                    key={id} 
                    onClick={() => handleClick(id, clicked)}
                    className='list-item'
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
