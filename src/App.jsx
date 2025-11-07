import { useApp } from "./AppProvider";


export default function App(){
          const {count, setCount} = useApp();
    return <>

             <h1>React Context Concept</h1> <br />
             <Header />
              <div style={{marginTop:6, textAlign:'center'}}>
                <button onClick={() => {setCount(count + 1)}} >+</button>
              </div>

           </>
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

           const {count} = useApp();

    return <span style={{background:'red', padding:3}}>
            {count}
    </span>
}