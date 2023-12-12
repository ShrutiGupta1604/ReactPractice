import { type } from '@testing-library/user-event/dist/type';
import './App.css';
//import React, {useState, useEffect, createContext, useContext, useRef, useReducer, Component } from 'react';
//import { render } from '@testing-library/react';
import React, {useState,useEffect,useContext, createContext} from 'react';


 //*********Org.Prog.******  
/* 
function App() {
  return (
    <div className="App">
    </div>  
  );
}
export default App;

*/
//----------------------------------------------


// export default function App()
// {
//   function calculation(Variable1,Variable2)
//   {
//     const add=Variable1+Variable2
    
//     const sub=Variable1-Variable2
    
//     const multi=Variable1*Variable2
    
//     const division=Variable2/Variable1
//     return[add,sub,multi,division]
//   }
//   const[add,sub,multi,division]=calculation(5,8)
//   console.log ("Addition"+add)
//   console.log ("sub"+sub)
//   console.log ("multi"+multi)
//   console.log ("division"+division)
// }


// const myObject={
//   creta:"123",
//    maruti:"123334",
//    venue:"12M",
//    year:"1233",
//    color:"red",
//    variation:
//    {
//     data1:"Data1",
//     data2:"Data2",
//     data3:"Data3"
//    },
// }

// function printObject({venue,year,color,variation:{data2}})
// {
//   console.log(" details:"+venue+","+year+","+color+","+data2)
// }
// printObject(myObject)

  
//-----------------------------------------------------
// export default function App()
// { 
    
// const  V =["car", "Thar", " maruti" ,"home"]
// const cv= V[0]
//  const[,car,thar,]= V
// return ( 

//   //console.log(cv)
//   console.log(thar)
//   console.log(car)
  
// );
// }
  
 
//-----------------------------------

//-------------------- Hooks-useReducer solution--------------------------
 /*
var initialTodo =[
  {
    id: 1,
    text: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    text: "Todo 2",
    completed: false,
  }
  
  ]

const reducer =(state, action)=>
{
  switch (action.type)
{
case "COMPLETE":
return state.map((todo) =>
{
        if (todo.id === action.id)
        {
        return { ...todo, complete: !todo.complete };
        }
        else
        {
        return todo;
        }
      });
      default:
      return state;
    }
  };


  function App()
  {

    const [todo,dispatch]= useReducer(reducer,initialTodo);
    const handleComplete = (todo) =>
  {
    dispatch({type: "COMPLETE", id: todo.id});
  };
  console.log(todo)
 
 return  <> 
  <div>
    {todo.map((todo)=>
    (
    <label>
      <input
      type='checkbox' checked={todo.completed} onChange={()=> handleComplete(todo)} />
      {todo.text}
      </label>
      ))} 
    </div>
    </>
       
    }
  
  export default App;
  
*/
///--------------------------------------------

// //-------------------- Hooks-useReducer prob. --------------------------
 
// var initialTodo =[
// {
//   id: 1,
//   text: "Todo 1",
//   completed: false,
// },
// {
//   id: 2,
//   text: "Todo 2",
//   completed: false,
// }

// ]
// function App()
// {
//   const [todo, setTodo] = useState([])
//   if(todo.length === 0)
//   {
//     setTodo(initialTodo)
//   }
//   const handleComplete = (todoTemp) =>
//   {
//     setTodo(todo.map((todoListItem) =>
//     {
//       if(todoListItem.id == todoTemp.id)
//       {
//         return { ...todoListItem, completed: !todoTemp.completed}
//       }
//       else
//       {
//         return todoListItem
//       }
//     }))
//   }
//   console.log(todo)

  

// return  <> 
// <div>
//   {todo.map((todo)=>
//   (
//   <label>
//     <input
//     type='checkbox' checked={todo.completed} onChange={()=> handleComplete(todo)} />
//     {todo.text}
//     </label>
//     ))} 
//   </div>
//   </>
     
//   }

// export default App;


 //-------------------- Hooks-useRef 2nd prob. --------------------------
/*

// function App()
// {


//   const [inputValue , setInputValue ] = useState("");
//  const previousInputValue = useRef("");
//  useEffect(() => {
//  previousInputValue .current = inputValue ;
//  }, [inputValue ]);


//  return (
//  <>
//  <input type="text" value={inputValue }
//  onChange={(e) => setInputValue (e.target.value)}
//  />
//  <h2>Current Value: {inputValue }</h2>
//  <h2>Previous Value: {previousInputValue .current}</h2>
//  </>
//  );


// }
// export default App;
    
//-------------------- Hooks-useRef 1st prob. --------------------------
 
// function App()
// {
//   const inputElement = useRef();
// function getFocus()
// {
//   //let focus= document.getElementById("myInput")
//   inputElement.current.focus();
// }   

// return (
//   <>
//   <input id ='myInput' type='text' ref={inputElement}></input>

//   <button onClick={()=>getFocus()}>clicl me</button>

//   </>
// );

// }

// export default App;

*/
//----------------------------------------------
 

//---------------------- HOOKS------------------------


//---------------HOOKS-useContext-------------


//---------------HOOKS-useContext- 1st problem solution-------------
 
 
const UserContext =createContext()

function App(){
  const [user,setUser]=useState("Shruti");
  return(
    <>
    <UserContext.Provider value={user}>
      <h1>{'Hello ${user}!'}</h1>
      <Component2 user={user}></Component2>
    </UserContext.Provider>
    </>
  );
}
function Component2(){
  return(
    <>
    <h1>'Component2'</h1> 
    <Component3/>
    </>
  );
}
function Component3(){ 
  return(
    <>
    <h1>Component2</h1> 
    <Component4/>
    </>
  );
}  
function Component4(){ 
  const user = useContext(UserContext)
  return(
    <>
    <h1>Component4</h1>  
    <h2>{'Hello${user} again!'}</h2>  

    <Component3 />
    </>
  );
}

export default App;

//----------------------------------------------


//---------------HOOKS-useContext- 1st problem-------------

/*

function App(){
  const [user,setUser]=useState("Shruti");
  return(
    <>
    <h1>{'Hello ${user}!'}</h1> 
    <Component2 user={user}></Component2>
    </>
  );
}
function Component2({user}){
  return(
    <>
    <h1>'Component2'</h1> 
    <Component3 user={user}/>
    </>
  );
}
function Component3({user}){ 
  return(
    <>
    <h1>Component2</h1> 
    <Component4 user={user}/>
    </>
  );
}  
function Component4({user}){ 
  return(
    <>
    <h1>Component4</h1>  
    <h2>{'Hello${user} again!'}</h2>  

    <Component3 user={user}/>
    </>
  );
}

export default App;

*/

//----------------------------------------------



//---------------HOOKS-useEffect-------------

//*************HOOKS-useEffect Example 2************** 

/*

function App()
{
  var [count,setCount]=useState(0)
  var [student, setStudent]=useState(
    {
      name:'Shruti',
      rollNumber:123, 
    }
  );

  var updateData=()=>
  {
    console.log("updateData")
    console.log(student)
    setStudent(student=>
      {
        return{...student,name:"Shruti Gupta" }  
      });
      setCount=1;
     
  } 
  useEffect(() => {
    setTimeout(() =>                   
    { 
      console.log("this is a UseEfect triggerred now")
       
    }, 4000);
    }, count );   



  return(
    <div>
      <div>THis is my Name:{student.name}</div>
    <div>THis is my RollNumber: {student.rollNumber}</div> 
    <button onClick={()=>updateData()}>Update Data</button>
    </div>
  )

}

export default App;

*/

//----------------------------------------------



//*************HOOKS-useEffect Example 1************** 

/*

function App()
{
  const[student, setStudent]=useState(
    {
      name:'Shruti',
      rollNumber:123, 
    }
  );

  var updateData=()=>
  {
    console.log("updateData")
     
     
  }
//********useEffect executes on each render, if the second parameter is not passed at all.**************

  useEffect(() => {
    setTimeout(() =>                    //runs on every render when we no use <dependency>
    { 
      console.log("this is a UseEfect triggerred now")
      setStudent(student=>
        {
          return{...student,name:"Shruti Gupta" }  
        }) 
    }, 4000);
    },[] );             //[] is 2nd parameter dependency



  return(
    <div>
      <div>THis is my Name:{student.name}</div>
    <div>THis is my RollNumber: {student.rollNumber}</div> 
    <button onClick={()=>updateData()}>Update Data</button>
    </div>
  )

}

export default App;

*/

//----------------------------------------------

//---------------HOOKS-useState-------------

/*

function App()
{
  const[student, setStudent]=useState(
    {
      name:'Shruti',
      rollNumber:123,
      contact:998866443301,
      address:"251, indore"
    }
  );

  var updateData=()=>
  {
    console.log("updateData")
    console.log(student)
    //setStudent({name:"Shree"}) //only change name nd other data blank that means all data is overwrite 
     
    setStudent(student=>
      {
        return{...student,name:"Shruti Gupta",rollNumber:"12345674" , contact:9985789440186,} //{...} oprator se all data overwrite nhi hoga
      })
     console.log(student)
  }

  return(
    <div>
      <div>THis is my Name:{student.name}</div>
    <div>THis is my RollNumber: {student.rollNumber}</div> 
    <div>THis is my Contact: {student.contact}</div>
    <div>THis is my Address: {student.address}</div>
    <button onClick={()=>updateData()}>Update Data</button>
    </div>
  )

}

export default App;

*/

//----------------------Styling in React------------------------

//--------------------CSS Modules-----------------------

//-------------------------
//--------------------CSS stylesheets-----------------------

/* create css file and import css file  */

//----------------------------------------------


//---------------------- Inline styling-----------------------

//---------- Example type 1st-----------------------

/*
export default function App()
{
  return(
    <h1 style={{color: "red" , backgroundColor: "yellow"}}> Example  Inline  Style! </h1>
  )
}
*/

//************************************** 

//---------- Example type 1st-----------------------

/*
export default function App()
{
  const styleObj={
    color:"red",
    backgroundColor:"blue",
    padding:"10px"
  }
  return(
    <h1 style={styleObj}> 2nd type Example  Inline  Style! </h1>
  )
}

*/
//----------------------------------------------

//---------------------React Forms-------------------------

/* 
export default function App()
{
  function handleSubmit()
  {
    console.log("handleSubmit function  call")
  } 

    return(
      <form onSubmit={handleSubmit()}>
        <h1>My React Registration form </h1>
        <label>
          Email:<input type="email" placeholder='Enter Email'required></input>
        </label>
        <br></br>
        <label>
        Password:<input type="password" placeholder='Enter Password' required></input>
        </label>
        <br></br>
        <button>Submit </button>
      </form>
    )
  
}

*/
//----------------------------------------------

 
//---------------------Passing data between components--------------------------

//--------------------------From child to parent  using props----------------------
 
/*
class InnerComponent extends React.Component        // Child Component
{
  constructor(props)
  { 
    super(props) 
  }

  sendData=()=>
  {
    const text = document.getElementById("textMessage").value 
    console.log("Data send to a parent is :" +text    )
     this.props.parentCallBack(text)
  }

  render()
  {
    return(
    <div>
      <input type='text' placeholder='Enter Message for parent' id='textMessage' />
      <button onClick={()=>this.sendData()}>Send to parent </button>
    </div>
    )

  }
}


class App extends React.Component       // parent Component
{
  state ={message:"This is from parent"}
  parentCallBackFunction = (text) =>
  {
    console.log("Data in parent :" +text)
    this.setState({message:text})

  }

  render()
  {
    return(
  <div>
    <InnerComponent  parentCallBack={this.parentCallBackFunction}/>
    <div>Data from Child :{this.state.message}</div>
  </div>
    )
  }
}

export default App;

*/
// //--------------------------From parent to child using props----------------------
 
// class InnerComponent extends React.Component  // InnerComponent is child of  App parent component
// {
//   constructor(props)
//   {
//     super(props)

//   }
//   render()
//   { 
//   const style= {color: this.props.color}
//     return (
//     <div> 
//      <div> This is a InnerComponent </div>
//       child Says: 
//       <span style={style}>{this.props.name}</span>
    
//     </div>
//     )
//   }
// }
 
// class App extends React.Component  // App is parent component
// {
//   state={ childColor:"black" , name :"shree" }

// changeColor=()=>
//   {
//     const colorName =document.getElementById("colorText").value
//     this.setState({childColor:colorName})

//   } 

// changeName=()=>
//   {
//     console.log("hii");
//     const name = document.getElementById("nameText").value
//     this.setState({name:name})

//   } 

//   render()
//   {
//     return (
//     <div>
//       <div> This is a parent Component </div>
//       <br/>
//       color<input type='text' placeholder='Enter Color ' onChange={this.changeColor} id ="colorText"/>  
//       <br/>
//        Name <input type='text' placeholder='Enter Color '  onChange={this.changeName} id ="nameText"/> 
//        <InnerComponent color= {this.state.childColor} name= {this.state.name} /> 
//     </div>
//   );
//   }
// }
// export default App;


// //------------------------------------------------------------------------------------------------------


//**************************************React Component Life Cycle********************************/



//********************************Unmounted (Component removed)*****************************

 
//---------------------------------------------------------------------


//********************************Updating (components change)*****************************

/* //---------------Updating -1 ------------------------

class App extends React.Component
{
  state = {counter:0}
  constructor(props)
  {
    super(props)
    console.log("I am inside Constructor")
  }

  static getDerivedStateFromProps()
  {
  console.log("Inside the getDerivedStateFromProps")
  }

shouldComponentUpdate()
{
console.log("Inside the shouldComponentUpdate")
return true
} 

incrementCounter = () => 
{
  //updating state on function call
  this.setState({counter:this.state.counter+1})
}  

render()
  {
console.log("Inside the render method")
return ( <button onClick={this.incrementCounter}>Click me</button>
)
}
getSnapshotBeforeUpdate(prevProps, prevState)
{
console.log("Inside the getSnapshotBeforeUpdate")
return true
}

componentDidMount()
{
  console.log("I am inside componentDidMount")
}
 
}
export default App;



*/  //-------------------------------------------------------

/* //---------------Updating- 2 ----------


class App extends React.Component
{
  state = {counter:0}
  constructor(props)
  {
    super(props)
    console.log("I am inside Constructor")
  }

  static getDerivedStateFromProps()
  {
    console.log("I am inside getDerivedStateFromProps")
    return true
  }

  shouldComponentUpdate()
  {
    console.log("Inside shouldComponentUpdate")
    return  false
  }

  incrementCounter = () => 
  {
    //updating state on function call
    this.setState({counter:this.state.counter+1})
    if(this.state.counter % 2 === 0)
    {
      this.setState( )
    }
    else
    {
      this.setState({innerComponent:<div>Unmounted</div>})
    }
    
  }

  // Overridden render function
  render()
  {
    console.log("Inside the render method")
    console.log(this.props)
    return (
        <div>
          <button onClick={this.incrementCounter}>Click me</button>
          <br/>
          Counter:{this.state.counter}
          <br/>
          <div>{this.state.innerComponent}</div>
        </div>
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log("Inside getSnapshotBeforeUpdate")
    console.log("Previous Prop:")
    console.log(prevProps)
    console.log("Previous State:")
    console.log(prevState)
    console.log("--------------------")
    console.log("Updated Prop:")
    console.log(this.props)
    console.log("Update State:")
    console.log(this.state)
    return true
  }

  componentDidMount()
  {
    console.log("I am inside componentDidMount")
  }
}
export default App;

*/ //--------------------------------------------

//---------------------------------------------------------------------- 


//****************************Mounting (components creation)*********************
 
/* 

class App extends React.Component
{
  state = {counter:0}
  constructor(props)
  {
    super(props)
    console.log("I am inside Constructor")
  }
  static getDerivedStateFromProps()
  {
    console.log("I am inside getDerivedStateFromProps")
  }

  incrementCounter = () => 
  {
    this.setState({counter:this.state.counter+1})
  }

  // Overridden render function
  render()
  {
    console.log("Inside the render method")
    console.log(this.props) 
    return (
        <div>
          <button onClick={this.incrementCounter}>Click me</button>
          <br/>
          Counter:{this.state.counter}
        </div>
    )
  }

  componentDidMount()
  {
    console.log("I am inside componentDidMount")
  }
}
export default App;

 */

//-----------------------------------------------



//**************************** REACT COMPONENT **************************  


//**************************** PROP & State USE with event()**************************  

/*

class App extends React.Component
{
  constructor(props)
  {
  super(props)
  }
  state = {counter:0}
  incrementCounter = () => 
  {
    this.setState({counter:this.state.counter+1})
  }
render(){  

   console.log(this.props)
return (
<div> 
   <button onClick={this.incrementCounter}>Click me</button>
    
  <br/>
  Counter:{this.state.counter}
</div>
)
}
}
export default App;

*/

//-----------------------------------------------



/* //-------SIMPLE REACT COMPONENT--------

function App() {

  return React.createElement(
      "div",
      null,
      React.createElement("p", null, "This is a simple para"),
      React.createElement("h1", null, "This is a simple Heading"),
      React.createElement("li", null, "This is list item 1"),
      React.createElement("li", null, "This is list item 2"),
    );

}
export default App;

*/
//--------------------------------------------------------------------

//************************************PROPS USEs***********************************
 
/* //----------Examples1 PROP SIMPLE COLOR USE-------------

function App(props){
  console.log(props.color)
  console.log(props.size)

return(
  
  <h1>PROPS USE</h1> 
)  
}
export default App;

*/ //--------------------------------

//************************PROP Event() and alert USE WITH CLASS COMPONENT***************************
 
 /*

class App extends React.Component
{
constructor(props)
{
super(props)
}
// Overridden render function
render()
{
console.log(this.props)
return <button onClick={this.props.clickEvent}>Click me</button>
}
}
export default App;

*/

//-------------------------------------------------------------------------------------



//******* PROPS Event() and alert USE WITH FUNCTION COMPONENT**********************

/*

function App(props){
   console.log(props.color)
   console.log(props.size)
    
return(
  <div className='App'>
    <button onClick={props.clickEvent}>CLICK ME</button>
  </div>
);  
}
export default App;

 */

//------------------------------------- 


//-----------------------------------------------------------------


//**********************************STATE USE************************************

/*

class App extends React.Component
{ 
  state = {counter:0}
  incrementCounter = () => 
  {
    this.setState({counter:this.state.counter+1})
  }
render(){  
return (
<div> 
   <button onClick={this.incrementCounter}>Click me</button> 
  <br/>
  Counter:{this.state.counter}
</div>
)
}
}
export default App;

*/

//--------------------------------------------------------------------



//*************************ClassComponent**********************************  


/* 

class MyClassComponent extends React.Component {
  render() {
    return <h1>This is my heading tag</h1>
  }
}
function App() {

  const classComponent = new MyClassComponent();
  return classComponent.render();
}
export default App;
 
*/

//--------------------------------------------------------------------



//**********************Functional components********************** 

/* //-----------EXAMPLE-1----------------

function App()
{
  return<h1>Hello Function COMPONENT</h1>

}

export default App;

*/  //-----------------------------------------

/* //-----------EXAMPLE-2 Arrow function----------------

function App()
{
  const arrowFunction =() =>{
    return <h1>Hello function components with Arrow function </h1>
  }
  return arrowFunction()
}

export default App;

*/ //--------------------------------------------------

//--------------------------------------------------------------------------


//**********************Inheritance***********************

/*

function App()
 {
  class Student
  { Name
    Age  
    RollNo  
    Email

    constructor(Name, Age, RollNo, Email)
    {
    this.Name = Name
    this.Age = Age;
    this.RollNo = RollNo;
    this.Email = Email;
    }
    printStudent()
    {
    console.log("Name: "+this.Name)
    console.log("Age: "+this.Age)
    console.log("RollNo: "+this.RollNo)
    console.log("Email: "+this.Email)
    }
    }
  class Moniter extends Student 
  {
    batch
    constructor(Name, Age, RollNo, Email, batch)
    {
      super(Name, Age, RollNo, Email)
      console.log("Called moniter constructor")
      this.batch = batch
      console.log("moniter constructor completed work")
    }
    printMonitor()
    {
      super.printStudent()
      console.log("Moniter print started work")
      console.log("batch=" +this.batch)
      console.log("Moniter print completed work")
    }
  }
  console.log("starting to create moniter object")
  let moniterShruti = new Moniter("Shruti", 12, 112, "123@email", "react")
  console.log("starting to print")
  moniterShruti.printMonitor()
  console.log("completed to print")

   return (
    <div className="App">
    </div>  
  );
}
export default App;

*/

//-----------------------------------------------


//***************************CLASS -Constructors*********************** 

/*  //----CLASS -Constructors Example-1-------- 
 

function App()
{

class Student{
  Name
  Age
  RollNo
  Email
  constructor(Name, Age, RollNo, Email)
  {
  this.Name = Name
  this.Age = Age;
  this.RollNo = RollNo;
  this.Email = Email;
  }
  printStudent()
  {
  console.log("Name: "+this.Name)
  console.log("Age: "+this.Age)
  console.log("RollNo: "+this.RollNo)
  console.log("Email: "+this.Email)
  }
  }
  let student = new Student()
  student.Age = 11
  student.Name = "Aditya"
  student.RollNo = 111
  student.Email = "abc@student.com"
  let aditya = new Student("shreya", 22, 101, "email@gmail.com")
  
  student.printStudent()
  aditya.printStudent()

 console.log("student object details :"+student)
 console.log(" aditya object details :"+aditya)

 
 console.log(student)
 console.log(aditya)

 return (
  <div className="App">
  </div>  
);
}
export default App;
 

*/  //-------------------------------------


/* //----CLASS -Constructors Example- 2--------


function App()
{

class Student{
  Name
  Age
  RollNo
  Email
  constructor(Name, Age, RollNo, Email)
  {
  this.Name = Name
  this.Age = Age;
  this.RollNo = RollNo;
  this.Email = Email;
  }
}

let  student = new Student(" SHRUTI", 22, 101, "email@gmail.com")

console.log(student)
//console.log(student.Name)

  return (
    <div className="App"> </div>  
  );
}
export default App;


*/ //---------------------------------------------
//----------------------------------------------------------------------------------

//***************************CLASS*********************** 

/* //--Class Example-1--

function  App()
{
  class Student
  {
    Name
    Age
    RollNo
    Email
  
  }
let student = new Student()
 
student.Name = "Aditya"
student.Age = 11
student.RollNo = 111
student.Email = "abc@student.com"

//console.log("Student Details" +student) //   use concat(+) msg  with object console show only object type ex. o/p Student Details object
  console.log(student)

return (
    <div className="App"> </div>  
  );
}
export default App;


 */ //------------------



/* //--Class Example-2



function App()
{
  
class Student{
  Name
  Age
  RollNo
  Email 

  printStudent()
  {
  console.log("Name: "+this.Name)
  console.log("Age: "+this.Age)
  console.log("RollNo: "+this.RollNo)
  console.log("Email: "+this.Email)
  }
  }
  let student = new Student()
  student.Age = 11
  student.Name = "Aditya"
  student.RollNo = 111
  student.Email = "abc@student.com"
   
  student.printStudent()
   
  console.log("student :"+student)

 

return(
  <div className='App'></div>
)
}

export default App;

*/ //---------------------


/* //----Class Example-3-----------



function App()
{
  
class Student{
  Name
  Age
  RollNo
  Email 

  printStudent()
  {
  console.log("Name: "+this.Name)
  console.log("Age: "+this.Age)
  console.log("RollNo: "+this.RollNo)
  console.log("Email: "+this.Email)
  }
  }
  let student = new Student()
   
  student.printStudent()
   
  console.log("student :"+student)

 
return(
  <div className='App'></div>
)
}

export default App;

*/ //-----------------------

//-----------------------------------------------


//*******************************PROMISE ******************* 

 /*//-----EXAMPLE -1 -----

 
function App()
{
  let promiseArgument =(resolve, reject)=>
  {
    setTimeout(()=>
    {
      let currTime = new Date().getTime()
      if(currTime %2 === 0)
      {
        resolve("Success!!")
      }
      else
      {
        reject("Fail")
      }
    },2000)
  }
  let myPromise = new Promise(promiseArgument);
  console.log("result:"+myPromise);


return (
    <div className="App">
    </div>  
  );
}
export default App;

*/ //-------------------------

/*  //-----EXAMPLE -2 -----


function App()
{

let myPromise = new Promise( (resolve, reject)=>
{
setTimeout(()=>
{
let currTime = new Date().getTime();
if(currTime %2 === 0)
{
console.log("success------")
resolve("Success!!")
}
else
{
console.log("fails------")
reject("Failed!!")
}
}, )
});
console.log("result:"+myPromise);

return (
  <div className="App">
  </div>  
);
}
export default App;

 *///-------------------------
//--------------------------------------------------------


//***************Function call Use Arrow functions Examples*********

//******************* Function call With Arrow functions.************************************** 

/*

function App()
{
  const sayHello = ()=> console.log("Function call With Arrow functions")
  sayHello();
  //setTimeout(sayHello,2000);

return (
    <div className="App">
    </div>  
  );
}
export default App;

*/
//*****************arrow () use  with settime************** 

/*

function App()
{
  const sayHello = ()=> console.log("Function call With Arrow functions and use setTimeout()")
 setTimeout(sayHello,2000);

 return (
    <div className="App">
    </div>  
  );
}
export default App;

*/

//----------------------------------------------------------

//************************arrow () use  with parametter******************

/* //----EXAMPLE-1-----

function App()
{
  const sayHello = (name)=> console.log("Hello "+name )
setTimeout(sayHello("Aditya"),20000)


return (
  <div className="App">
  </div>  
);
}
export default App;

*/ //-------------------


/*//--EXAMPLE-2---

function App()
{
  const sayHello = (firstName, LastName)=> console.log("Hello "+firstName+" "+LastName )
setTimeout(sayHello("Shruti", "Gupta"),2000)


return (
  <div className="App">
  </div>  
);
}
export default App;

*/ //-------------------

/*//--EXAMPLE-3---

function App()
{
  const sayHello = ()=> {return "Hello" };
console.log(sayHello())

return (
  <div className="App">
  </div>  
);
}
export default App;

*/ //-------------------

/* //--EXAMPLE-4---

function App()
{
  const sayHello = (firstName, LastName)=> {return "Hello "+firstName+" "+LastName };
console.log(sayHello("Shruti","Gupta"))

return (
  <div className="App">
  </div>  
);
}
export default App;

*/ //-------------------
//-------------------------------------------------

//***************Function call Without Arrow functions*********

/*

function App()
{
  function sayHello()
  {
    console.log("Function call Without Arrow functions")
  }
  sayHello();

  return (
    <div className="App">
    </div>  
  );
}
export default App;

*/
//----------------------------------------------------------

//************************Variables ************************ 
//***************let Variable (We can Change)************** 

/*

function App()
{
let  FirstVariable=5
console.log("Let First Variable="+FirstVariable)
First Variable=6
console.log("Let First Variable="+FirstVariable)

let SecondVariable=7
console.log("Let Second Variable="+SecondVariable)
SecondVariable=8
console.log("Let Second Variable="+SecondVariable)

return(
  <div className='App'></div>
);
}

export default App;

*/
//-----------------------------------------------

//*************** var  Variable (We can Change)************** 

/*

function App()
{

var VarFirstVariable = 15
console.log("Var First Variable:"+VarFirstVariable)
VarFirstVariable = 16 
console.log("Var First Variable:"+VarFirstVariable)

return(
  <div className='App'></div>
);
}

export default App;

*/
//-----------------------------------------------

//***************  Const  Variable (We can not Change)************** 

/*

function App()
{
const ConstVariable=10
console.log("const first Variable="+ConstVariable)
ConstVariable=11
console.log("Const First Variable="+ConstVariable) // thiis Line get error because of cont var. not reassing


return(
  <div className='App'></div>
);
}

export default App;

*/
//-----------------------------------------------

//***************1ST REACT PROGRAME************** 

/*

function App() {

console.log("Hello first React Programme  ")

  return (
    <div className="App">
    </div>  
  );
}

export default App;

*/
//-----------------------------------------------
 