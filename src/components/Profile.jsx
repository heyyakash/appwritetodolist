import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { account } from '../appwrite/appwrite'

const Profile = () => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const getData = account.get()
        getData
            .then(res => setUser(res))
            .catch(err => console.log(err))
    }, [])

    const handleLogout = async () => {
        try {
            account.deleteSession("current")
            navigate('/')
        } catch (error) {
            console.log(error)
        }

    }

    return (
        user &&
        <div className='min-h-[100vh] w-full'>
            <div className='h-[60px] mx-auto w-[800px] flex items-center justify-between '>
                <p className='text-xl font-bold'>{user.name}</p>
                <p onClick={()=>handleLogout()} className='bg-red-500 cursor-pointer text-white p-2 text-bold rounded-lg'>Logout</p>
            </div>
        </div>
    )
}

export default Profile