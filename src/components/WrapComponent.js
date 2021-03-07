import React,{useState,useCallback} from 'react'
import Button from './Button'
import Title from './Title'
import Count from './Count'

function WrapComponent() {
    const [age,setAge]=useState(30)
    const [score,setScore]=useState(100)

    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])  
    const incrementScore=useCallback(()=>{
        setScore(score+10)
    },[score])

    return (
        <div>
       <Title />
       <Count text="年齢" count={age}></Count>     
       <Count text="スコア" count={score}></Count>
       <Button handleClick={incrementAge}>年齢＋</Button>     
       <Button handleClick={incrementScore}>スコア＋</Button>     
        </div>
    )
}

export default WrapComponent
