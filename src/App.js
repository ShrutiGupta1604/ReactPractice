 import './App.css';
 import React from 'react';

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
//-----------------------------------------------

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
 
/* //----------Examples1 ROP SIMPLE COLOR USE-------------

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
