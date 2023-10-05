import Link from 'next/link'
import React, { FormEvent } from 'react'
import { FaGoogle } from 'react-icons/fa'

const page = () => {
    async function handleSubmit(e:FormEvent<HTMLFormElement>){
        "use server"
        const formData = new FormData(e.currentTarget)
        const res = await fetch("api/register", {
            method:"POST",
            body:formData
        })
        const data = await res.json()
        console.log(data);
        
    }
    return (
        <div className=' border-2 rounded-lg  w-96 p-8  shadow-md'>
            <h2 className='text-xl font-bold'>Create Account </h2>
            <form method='post' onSubmit={handleSubmit} className='mt-4 '>
                <label className='block mb-4' >
                    Email
                    <input className='block w-full bg-slate-100 rounded-sm' type="email" name="email" placeholder='john@gmail.com' />
                </label>
                <label className='block mb-4' >
                    Username
                    <input className='block w-full bg-slate-100 rounded-sm' type="text" name="username" placeholder='john' />
                </label>
                <label className='block mb-4' >
                    Password
                    <input className='block w-full bg-slate-100 rounded-sm' type="password" name="password" placeholder='*************' />
                </label>
                <label className='block mb-4' >
                    Confirm Password
                    <input className='block w-full bg-slate-100 rounded-sm' type="password" name="confirm-password" placeholder='*************' />
                </label>
                <button type='submit' className='block mt-4 bg-accent py-2 px-6 text-white font-bold rounded-sm w-full'>Register</button>
            </form>
            <div className='mt-4'>
                <button className='flex justify-center items-center gap-2 border-2 w-full rounded-sm py-2 hover:bg-slate-200 transition-colors'><FaGoogle /> <span>Sign Up With Google</span> </button>
            </div>
                <Link className='underline' href="/login">Already have an Account? Login</Link>
        </div>
    )
}

export default page