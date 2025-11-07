import { createContext, useContext, useState } from "react"

const AppContext = createContext();

export default function App(){
           const [count, setCount] = useState(0);

    return <AppContext.Provider value={{count}}>

             <h1>React Context Concept</h1> <br />
             <Header count = {count} />
              <div style={{marginTop:6, textAlign:'center'}}>
                <button onClick={() => {setCount(count + 1)}} >+</button>
              </div>

           </AppContext.Provider>
}


function Header(){
    return <div style={{background:'#666', padding:21}}>
              context... <Title />
           </div>
}

function Title(){
    return <>
             <Badge />
           </>
}

function Badge(){
  
           const {count} = useContext(AppContext);

    return <span style={{background:'red', padding:3}}>
            {count}
    </span>
}