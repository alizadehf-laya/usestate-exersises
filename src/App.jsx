import { useState } from 'react'


function App() {
const [tColorMe,SetColorMe]=useState("blue")
const [events,Setevents]=useState([
  {title:"love",id:1},
  {title:"happy",id:2},
  {title:"hate",id:3},
  {title:"anxious",id:4},
  {title:"thrilled",id:5},
  {title:"sad",id:6},
])

  return (
    <>
    <div style={{alignItems:"center"}}>
        <h1 style={{color:tColorMe}}>change my color</h1>
        <button onClick={()=>{SetColorMe(tColorMe==="red"?"blue":"red")}}>click to change color</button>
        {events.map((event,index)=>(
          <div key={event.id}>
            <h5>{index+1}-{event.title}</h5>
          </div>
        ))}
    </div>
      
    </>
  )
}

export default App
