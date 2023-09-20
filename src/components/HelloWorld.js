import React from 'react'

function HelloWorld() {
  return (
    <div className='hello'>HelloWorld</div>
  )
}

export default HelloWorld


















//import React from 'react' 
//class HelloWorld extends React.Component{

  /*  state = {
    counter: 20,
  }
  render(){
    return(
     <>
      <h1>{this.state.counter}</h1>
      <button onClick={()=>(this.setState({counter:this.state.counter+10}))}>Increment</button>
      <button onClick={()=>(this.setState({counter:this.state.counter-10}))}>Decrement</button>
     </> 
    )
  }
}*/

  /*state = {
    students: [
      {id: 1,
       name: 'Anjali', 
       class: 2,
       age: 7},
      {id: 2,
       name: 'Vinayak',
       class: 3,
       age: 8},
    ]
  }
  render(){
    return(
     <>
      <div>
      {this.state.students.map((student)=>
        <>
        <h1 className='text-[red]'>Name :{student.name}</h1>
        <h1>Class :{student.class}</h1>
        <h1>Age :{student.age}</h1>
        </>
      
      )}
        
      </div>
      
     </> 
    )
  }

}*/
//export default HelloWorld