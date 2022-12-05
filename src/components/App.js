import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const[userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [allEntry,setAllEntry]=useState([]);
  //code here 
  const submitForm=(e)=>{
    
    }
    
    return (
      <div id="main">
      
     REACT FORMS
      <form id='form' action="" onSubmit={submitForm}>
      <div><label htmlFor='userName'>userName</label>
      <input type="text" name="userName" id="userName" autoComplete='off' 
      value={userName} onChange={}/>
      </div> 
      <div><label htmlFor='password'>Password</label>
      <input type="password" name="password" id="password"
      autoComplete='off' value={password} onChange={}/>
      </div> 
      <button type="submit" id='submit'>Login</button>
      </form>
      {allEntry.map((curElem)=>{
        return (
          <div className='list'> 
          <p><b>USER NAME</b> :{curElem.userName}  |  <b>PASSDWORD:</b> {curElem.password}</p>
          
          </div>
          )
        })}
        </div>
        )
      }
      
      
      export default App;
      