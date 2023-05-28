import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import {register,reset} from '../features/auth'
const Register = () => {
const [formData,setFormData]=useState({
  email:' ',
  password:' ',
  rePassword:' '
})

const {email,password,rePassword}=formData
//Using the hooks
const navigate=useNavigate()
const dispatch=useDispatch()
//Getting data from the state

const {user,loading,success,message,error}=useSelector((state)=>state.auth)


useEffect(()=>{
  if(error){
    alert(message)
  }
   if(success || user){
    navigate('/home')
  }
  dispatch(reset())
},[user,success,error,message,loading,dispatch,navigate])
const onChange=(e)=>{
setFormData(prev=>({
  ...prev,
  [e.target.name]:e.target.value
}
))

console.log(formData)
}

const handleSubmit=(e)=>{
  e.preventDefault()

 
  const userData={
    email,password
  }
  dispatch(register(userData))
 
}
if(localStorage.getItem('user')){
  return(
    <h2>You are already logged In. Log Out to register<Link to='/home'>Go back to searching pokemon</Link></h2>
  )
}
  return (
    <div className="container">
      <h2 className="login-title">Register</h2>
    <form className='login-form'>
      <div>
      <label htmlFor="email">Enter your email</label>
      <input type="text" name='email' id='email' placeholder='Email' onChange={onChange} />
      </div>
      <div>
      <label htmlFor="password">Password</label>
      <input type="text" name='password' id='password' placeholder='password' onChange={onChange} />
      </div>
      <div>
      <label htmlFor="repassword">Please Re-enter Password</label>
      <input type="text" name='repassword' id='repassword' placeholder='Re-Enter your password' onChange={onChange} />
      </div>
      <button className="btn btn--form" type="submit"  value="Log in" onClick={handleSubmit}>
        Register </button>

    </form>
    </div>
  )
}







export default Register