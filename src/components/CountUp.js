import React,{useState,useEffect,useRef} from 'react'

function CountUp() {
    const [countUp,setCountUp] =useState(0)
    const intervalRef =useRef()
    useEffect(() => {
        intervalRef.current =setInterval(() => {
            setCountUp(prevCountUp=>prevCountUp+1)
        }, 1000);
       return()=>{
           clearInterval(intervalRef.current)
       };
    }, [])
    return (
        <div>
            <h1>{countUp}</h1>
            <button onClick={()=>clearInterval(intervalRef.current)}>stop</button>
        </div>
    )
}

export default CountUp
