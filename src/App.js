/*import React from 'react'
import HelloWorld from './components/HelloWorld'
import './App.css';
import { render } from '@testing-library/react';

function App() {
  let count = 0;
  function addCount(){
    count = count + 1
  }
  
  return (
    <>
      <HelloWorld/>
      <h1>Counter is :{count}</h1>
      <button onClick={addCount}>Add</button>
      <h3 style={{color:'red',fontSize:'200px'}}>Hello</h3>
      
    </>
  )

  
  
}

export default App*/














import React from 'react';
class App extends React.Component{
  
  render(){
    return(
      <>
        <h1>Hello Anju</h1>
        <h1>i love you</h1>
        <h2 style={this.styles.project}>iyy podi padippye</h2>
      </>
    )

  }

styles = {
  project : {
    color:"green",

  },
}
}
export default App