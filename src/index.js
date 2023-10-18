import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



/********************************React Component Life Cycle***************************/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  clickEvent={()=>
    {
      console.log("click this button")

    }} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//-------------------------------------------------------------------------------------



//***********************PROP & State USE event() **************************

 /*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  color="red" size="24" clickEvent={()=>
    {
      console.log("click this button")

    }}/>
  </React.StrictMode>
);

reportWebVitals();
*/

//------------------------------------------------------------------
 


//****************PROP USE event() with Alert function components/CLASS components **************************

 /* 

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <App  color="red" size="24" clickEvent={()=>
     {
       console.log("Someone click this button")
       alert("This is prop Ex. button")
       
     }}/>
   </React.StrictMode>
 );
 
 reportWebVitals();
  
*/
 //----------------------------------------------------------------------

//******************************PROP SIMPLE COLOR USE***********************

/*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App color="red" size="24"/>
  </React.StrictMode>
);

reportWebVitals();

*/

//----------------------------------------------------------------------------

 

//***************************State use ***************** 

/* 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);



reportWebVitals();
*/
//-----------------------------------------


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
