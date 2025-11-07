import { useState } from "react"

export default function App(){
           const [count, setCount] = useState(0);
    return <>
             <h1>React Context Concept</h1> <br />
             <Header count = {count} />
              <div style={{marginTop:6, textAlign:'center'}}>
                <button onClick={() => {setCount(count + 1)}} >+</button>
              </div>
           </>
}


function Header({count}){
    return <div style={{background:'#666', padding:21}}>
              context... <Title count = {count} />
           </div>
}

function Title({count}){
    return <>
             <Badge count = {count} />
           </>
}

function Badge({count}){

    return <span style={{background:'red', padding:3}}>
            {count}
    </span>
}