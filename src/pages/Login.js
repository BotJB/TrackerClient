import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset,login } from '../features/auth'
import { Link } from "react-router-dom";
import './Login.css'
const Login = () => {
  const [userDetails,setUserDetials]=useState({
    email:'',
    password:''
  })
  const dispatch=useDispatch()
  const navigate=useNavigate()
  //to get the current state
  const {user,loading,success,message,error}=useSelector((state)=>state.auth)
  const onChange=(e)=>{
      setUserDetials(prev=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }
  const {email,password}=userDetails

  useEffect(()=>{
    if(error){
      alert(message)
    }
     if(success || user){
      navigate('/home')
    }
    dispatch(reset())
  },[user,loading,success,message,error,dispatch,navigate])
const handleSubmit=(e)=>{
e.preventDefault()
const userData={
  email,password
}
dispatch(login(userData))

}

if(localStorage.getItem('user')){
 return (
  <div>
    <h3>You are already logged In</h3>
    <p>Return to search your favourite pokemon<Link to="/home">Go</Link></p>
  </div>
 )
}
else{
  return (
    <div className="container">
<h2 className="login-title">Log in</h2>

<form className="login-form">
  <div>
    <label for="name">Name </label>
    <input type="text" name='email' placeholder='Email' id='email'onChange={onChange}/>
  </div>

  <div>
    <label for="password">Password </label>
    <input type="text" name='password' id='password' placeholder='Password' onChange={onChange}/>
  </div>

  <button className="btn btn--form" type="submit" value="Log in" onClick={handleSubmit}>
    Log in
  </button>
</form>
</div>
  )
}
 
}




export default Login