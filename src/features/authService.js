import axios from 'axios'


const url='http://localhost:5000/register'

const register=async (userData)=>{
  const response=await axios.post(url,userData)
  
  if(response.data){
  localStorage.setItem('user',JSON.stringify(response.data))
  }
  return response.data
}

const authService={
    register,
}

export default authService