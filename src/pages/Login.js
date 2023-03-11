import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset,login } from '../features/auth'
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

console.log(userDetails)
  return (
    <div>

      <form>
   <label >Email</label>
   <input type="text" name='email' id='email'onChange={onChange}/>
   <label htmlFor="password">Password</label>
   <input type="text" name='password' id='password' onChange={onChange}/>
   <input type="submit" onClick={handleSubmit} />

      </form>
    </div>
  )
}

export default Login