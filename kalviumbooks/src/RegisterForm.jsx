import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import './App.css'

export default function RegisterForm() {
    const {register,handleSubmit,watch,formState:{errors,isSubmitSuccessful}}=useForm();
    const password = watch('password');

    const [data,setdata]=useState([])
    
  return (
            <div className='formContainer'>
                <form className='formInputs' onSubmit={handleSubmit((data)=>setdata(data))}>
                    {isSubmitSuccessful?<h1 style={{backgroundColor:'green'}}>Account Created Sucessfully</h1>:<h1>CREATE ACCOUNT</h1>}
                    <input type="text" {...register("firstName",{required: 'first name required', minLength:{value:3,message:'atlest 3 characters'},maxLength:{value:30,message:'doesnot exceed 30 characters'}})} placeholder='first name'/> <br />
                    <p>{errors.firstName?.message}</p>
                    <input type="text" {...register('lastName',{required: 'last name required', minLength:{value:3,message:'atlest 3 characters'},maxLength:{value:30,message:'doesnot exceed 30 characters'}})} placeholder='last name'/> <br />
                    <p>{errors.lastName?.message}</p>
                    <input type='email' {...register("email",{required: 'email required'})} placeholder='email id'/> <br />
                    <p>{errors.email?.message}</p>
                    <input type="password" {...register("password",{required:'Password required',minLength:{value:10,message:"atleast 10 characters and 1 special character"},pattern:{value:'/[!@#$%^&*(),.?":{}|<>]/', message:'atleast 1 special character'}})} placeholder='Password'/> <br />
                    <p>{errors.password?.message}</p>
                    <input type="text" {...register("repeatPassword",{required:'re-enter password',minLength:{value:10,message:"atleast 10 characters and 1 special character"},validate:value=>value===password||'Password Not Matched'})} placeholder='re-enter Password'/> <br />
                    <p>{errors.repeatPassword?.message}</p>
                    <button type='submit'>SIGN UP</button>
                </form>
            </div>
  )
}
