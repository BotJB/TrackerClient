import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
  return (
    <form >
      <label htmlFor="email">Enter your email</label>
      <input type="text" name='email' id='email' onChange={onChange} />
      <label htmlFor="password">Password</label>
      <input type="text" name='password' id='password' onChange={onChange} />
      <label htmlFor="repassword">Please Re-enter Password</label>
      <input type="text" name='repassword' id='repassword' onChange={onChange} />
      <input type="submit" onClick={handleSubmit} />

    </form>
  )
}

export default Register