import React,{useEffect,useState} from 'react'

function MouseEventEffect() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const getMousePosition=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener("mousemove",getMousePosition);
        return()=>{
            window.removeEventListener("mousemove",getMousePosition);
        }
    },[])

    return (
        <div>
        <p>X:{x}</p>
        <p>Y:{y}</p>
            
        </div>
    )
}

export default MouseEventEffect
