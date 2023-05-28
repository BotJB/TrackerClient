import axios from 'axios'


const url='http://localhost:5000/register'
const urlLogin='http://localhost:5000/login'

const register=async (userData)=>{
  const response=await axios.post(url,userData)
  
  if(response.data){
  localStorage.setItem('user',JSON.stringify(response.data))
  }
  return response.data
}

const login=async(userData)=>{
  const response=await axios.post(urlLogin,userData)
  //to check if the user exists
  if(response.data.message=='User not found'){
    return
  }
  else{ localStorage.setItem('user',JSON.stringify(response.data))}
   
  
  return response.data
}

const authService={
    register,
    login
}

export default authService