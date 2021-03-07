import React,{useState,useEffect} from 'react'

function EffectHook() {
    const [count,setCount]=useState(0)
    const [name,setName] =useState('')

    useEffect(() => {
        document.title=`クリック　${count} 回`
        console.log("render")
        
    },[count])
    return (
        <div>
        <p>clickcount:{count}</p>
        <p>name:{name}</p>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={()=>{setCount(count+1)}} >押せ</button>
        
            
        </div>
    )
}

export default EffectHook
