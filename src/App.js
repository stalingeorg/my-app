import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
function App() {
 
  return(<>
  <Navbar/>
  <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </div>
   
  </>)
}
 
export default App;


// import './App.css';
// import React, { useState, useRef} from 'react';

// function App() {
// const emailRef = useRef()
// const passwordRef = useRef()

// function onSubmit(e){
//   e.preventDefault()
//   console.log({
//     email: emailRef.current.value,
//     password: passwordRef.current.value,
//   })
// }
//   const [count, setCount] = useState(0)
//   function dCount(){
//     setCount(pCount => pCount - 1)
//   } 
//   function iCount(){
//     setCount(pCount => pCount + 1)
//   } 
//   return (
//     <>
//      <button onClick={dCount}>-</button>
//      <span>{count}</span>
//      <button onClick={iCount}>+</button>
//      <form onSubmit={onSubmit}>
//       <label htmlFor='email'>Email</label>
//       <input ref={emailRef} type="email" id='email' />
//       <label htmlFor='password'>Password</label>
//       <input ref={passwordRef} type="password" id='password' />
//       <button type='submit'>Submit</button>
//      </form>
//      </>
//   );
// }

// export default App;
