import React,{useState} from 'react'

const body = () => {
  const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>SetCount(count+1)}>Like</button>
      <p>Likes: {count}</p>
      
    </div>
  )
}

export default body
