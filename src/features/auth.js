import {createSlice,createAsyncThunk, isPending} from '@reduxjs/toolkit'
import authService from '../features/authService'



const user=JSON.parse(localStorage.getItem('user'))
const initialState={
    user:user?user:null,
    loading:true,
    error:false,
    success:false,
    message:' '
}
//Creating async thunk to register the user

export const register=createAsyncThunk('/register',async(userData,thunkApi)=>{
  try{
    return await authService.register(userData)

  }
  catch(error){
   const message=(error.response &&error.response.data&&error.response.data.message)||error.message||error.toString()
   return thunkApi.rejectWithValue(message)
  }
})

//we will create the slice here
export const authSlice=createSlice({
    name:'auth',
   initialState,
    reducers:{
      reset:(state)=>{
        state.user=null
        state.success=false
        state.error=null
        state.message=null
      }
    },
    extraReducers:(builder)=>{
     builder.addCase(register.pending,(state)=>{
      state.isLoading=true
     })
     builder.addCase(register.fulfilled,(state,action)=>{
      state.loading=false
      state.success=true
      state.user=action.payload
     })
     builder.addCase(register.rejected,(state,action)=>{
      state.success=false
      state.error=true
      state.message=action.payload
      state.user=null

     })
    }
})
export const {reset} =authSlice.actions
export default authSlice.reducer