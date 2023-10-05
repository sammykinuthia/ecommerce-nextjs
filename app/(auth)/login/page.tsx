
import Link from 'next/link'
import React, { FormEvent } from 'react'
import { FaGoogle } from 'react-icons/fa'

const page = () => {
    async function handleSubmit(formData:FormData){
        "use server"
        const res = await fetch("api/auth/login", {
            method:"POST",
            body:formData
        })
        const data = await res.json()
        console.log(data);
        
    }
    return (
        <div className='border-2 rounded-lg  w-96 p-8  shadow-md'>
            <h2 className='text-xl font-bold'>Login </h2>
            <form method='post' className='mt-4 ' action={handleSubmit}>
                <label className='block mb-4' >
                    Email
                    <input className='block w-full bg-slate-100 rounded-sm' type="email" name="email" placeholder='john@gmail.com' />
                </label>
                <label className='block' >
                    Password
                    <input className='block w-full bg-slate-100 rounded-sm' type="password" name="password" placeholder='*************' />
                </label>
                <Link className='mt-2 underline' href={'/reset-pwd'}>Forgot Password?</Link>
                <button type='submit' className='block mt-4 bg-accent py-2 px-6 text-white font-bold rounded-sm w-full'>Login</button>
                <Link className='mt-2 underline block' href={'/register'}>Don't have an Account? Register</Link>
            </form>
            <div className='mt-4'>
                <button className='flex justify-center items-center gap-2 border-2 w-full rounded-sm py-2 hover:bg-slate-200 transition-colors'><FaGoogle/> <span>Sign In With Google</span> </button>
            </div>
        </div>
    )
}

export default page