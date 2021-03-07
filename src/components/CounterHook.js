import React,{useState} from 'react'

function CounterHook() {
    const [count,setCount]=useState(0)

    const incrementCount=()=>{
        setCount(count +1)
    }
    const incrementCountTen=()=>{
        for(let i=0;i<10;i++){
        setCount(prevCount => prevCount +1)
        }
    }
    return (
        <div>
        <h1>{count}</h1>
        <button onClick={incrementCount}>count +</button>
         <button onClick={incrementCountTen}>count10 +</button>   
        </div>
    )
}

export default CounterHook
