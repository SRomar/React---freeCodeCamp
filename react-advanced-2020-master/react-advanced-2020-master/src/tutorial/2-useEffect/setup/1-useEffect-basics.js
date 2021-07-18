import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
//setValue cada vez q se ejecuta llama a useEffect
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);

  useEffect(()=>{
    console.log('call useEffect')
    if(value>=1){ //no se pueden poner condicionales conteniendo a un hook, tienen que estar adentro de él
      document.title=`New Messages(${value})`
    }
  },[value]) //array of dependencies, list of dependencies || '[value]'=run every time the given value changes
  
  useEffect(()=>{
    console.log('Initial Render!') // '[]'=only run on the initial render
  },[])
  
  
  
  console.log('render component')
  return <>
    <h1>{value}</h1>
    <button className="btn" onClick={()=>setValue(value + 1)}>Click me!</button>
  </>;
};

export default UseEffectBasics;
