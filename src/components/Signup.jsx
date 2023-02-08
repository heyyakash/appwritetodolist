import React, { useState } from 'react'
import { account } from '../appwrite/appwrite'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'


const Signup = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })

    const signup = async (e) => {
        e.preventDefault();
        console.log(user.password)
        const promise = account.create(
            uuid(),
            user.email,
            user.password,
            user.name
        ).then((res)=>{
            console.log(res)
            navigate('/')
        }).catch(err=>console.log(err))
    }

    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    return (
        <div className='h-[100vh] grid place-items-center w-full'>
           <form className='w-[600px] drop-shadow-lg bg-white px-4 py-6 flex flex-col gap-3 '>
                <h1 className='font-bold text-2xl'>Sign up</h1>
                <input type="text" value = {user.name} name = "name" placeholder = "name" onChange={handleChange} className = "input" />
                <input type="email" value = {user.email} name = "email" placeholder = "email" onChange={handleChange} className = "input" />
                <input type="password" value = {user.password} name = "password" placeholder = "password" onChange={handleChange} className = "input" />
                <input type="submit" onClick = {signup} className='bg-blue-600 p-2 text-white cursor-pointer' value={"Submit"} />
            </form> 
        </div>
    )
}

export default Signup