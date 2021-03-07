
import './App.css';
// import CounterHook from './components/CounterHook'
// import FormHook from "./components/FormHook"
// import ItemHook from './components/ItemHook'
// import EffectHook from './components/EffectHook'
// import MouseEventEffect from './components/MouseEventEffect'
// import DataFetch from './components/DataFetch'
// import DataFetchById from './components/DataFetchById'
import React,{useReducer,useEffect} from 'react'
// import ComponentC from './components/ComponentC'
// import CounterReducer from './components/CounterReducer'
// import ComponentA from './components/ComponentA'
// import ComponentB from './components/ComponentB'
// import axios from 'axios'
// import WrapComponent from './components/WrapComponent'
// import Check from './components/Check'
// import FocusInput from './components/FocusInput'
// import CountUp from './components/CountUp'
// import DocTitleUpdateOne from './components/DocTitleUpdateOne'
// import DocTitleUpdateTwo from './components/DocTitleUpdateTwo'
import Form from './components/Form'

// const initialState={
//   loading:true,
//   error:'',
//   post:{}
// }
// const reducer=(state,action)=>{
//   switch (action.type) {
//     case "FETCH_SUCCESS":
//     return {
//       loading:false,
//       error:'',
//       post:action.payload,
//     }
//     case "FETCH_ERROR":
//     return{
//       loading:false,
//       error:'error',
//       post:{},
//     } 
  
//     default:
//       return state
//   }

// }

// export const CountContext =createContext();
// const initialState ={
//     firstCounter:0,
// }
// const reducer=(state,action)=>{
//     switch (action.type) {
//         case 'increment1':
//             return {...state, firstCounter: state.firstCounter + action.value}
//         case 'decrement1':
//             return {...state, firstCounter: state.firstCounter - action.value}
      
//         case 'reset':
//             return initialState

    
//         default:
//             return state
//     }

// }

function App() {
  // const [count,dispatch]=useReducer(reducer,initialState)
  // const [state,dispatch]=useReducer(reducer,initialState)

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts/1')
  //   .then(res=>{
  //     dispatch({type:'FETCH_SUCCESS',payload:res.data})
  //   })
  //   .catch(err=>{
  //     dispatch({type:'FETCH_ERROR'})
  //   })
  // }, [])
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
