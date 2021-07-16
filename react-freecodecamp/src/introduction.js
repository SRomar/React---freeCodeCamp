import React from 'react'
import ReactDom from 'react-dom'



//use camelCase for html attribute
// use className instead of class

function Greeting(){
  // <> = <React.Fragment>
  return (
    <> 
      <div> 
        <h1>Hello world</h1>
        <Person/>
        <Message/>
        <ul>
          <li>
            <a href="">link</a>
          </li>
        </ul>
      </div>
      <div>
      </div>
    </>
  )
}

const Person = () => <h2>John Doe</h2>;

const Message = () =>{
  return <h2>This is my message.</h2>
}

// ^^ es una version simplificada de vv
//
// const Greeting = () =>{ 
//   return React.createElement(
//   'div',
//   {},
//   React.createElement('h1',{},'Hello World')
//   )
// }

ReactDom.render(<Greeting/>, document.getElementById('root'))