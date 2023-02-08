import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { account } from '../appwrite/appwrite'

const Login = () => {
    const navigate = useNavigate()


    const login = async (e) => {
        e.preventDefault()
        const session = account.createEmailSession(user.email, user.password)
        session.then((res) => {
            console.log(res)
            navigate('/profile')
        }).catch(error => {
            console.log(error)
            setErr(true)
            setTimeout(() => {
                setErr(false)
            }, 4000);
        })
    }

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const [err, setErr] = useState(false)
    return (
        <div className='h-[100vh] grid place-items-center w-full'>
            <form className='w-[600px] drop-shadow-lg bg-white px-4 py-6 flex flex-col gap-3 '>
                <h1 className='font-bold text-2xl'>Login </h1>
                {/* <input type="text" value = {user.name} name = "name" placeholder = "name" onChange={handleChange} className = "input" /> */}
                <input type="email" value={user.email} name="email" placeholder="email" onChange={handleChange} className="input" />
                <input type="password" value={user.password} name="password" placeholder="password" onChange={handleChange} className="input" />
                <input type="submit" onClick={login} className='bg-blue-600 p-2 text-white cursor-pointer' value={"Submit"} />
                {err ? (<p className='text-lg text-red-500'>Incorrect Credentials</p>) : (<></>)}
            </form>
        </div>
    )
}

export default Login