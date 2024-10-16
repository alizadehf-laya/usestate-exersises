import { useState } from 'react'


function App() {
const [tColorMe,SetColorMe]=useState("blue")

  return (
    <>
    <div style={{alignItems:"center"}}>
        <h1 style={{color:tColorMe}}>change my color</h1>
        <button onClick={()=>{SetColorMe(tColorMe==="red"?"blue":"red")}}>click to change color</button>
    </div>

    </>
  )
}

export default App
