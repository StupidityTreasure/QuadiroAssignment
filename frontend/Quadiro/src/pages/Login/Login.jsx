import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { Link } from 'react-router-dom'
import Password from '../../components/input/password.jsx'
import { validateEmail } from '../../utils/helper.jsx'
const Login=()=> {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const[error,setError]=useState(null)

    const handleLogin=async (e) =>{
        e.preventDefault();
        if(!validateEmail(email)){
            setError(`please enter a valid email`)
            return;
        }
        if(!password){
            setError("please enter a valid password")
            return;
        }
        setError("")

    }
    //Login api calll
    return (
        <>
        <Navbar/>
        <div className='flex items-center justify-center mt-28'>
            <div className='w-96 border rounded bg-white px-7 py-8'>
                <form onSubmit={handleLogin}>
                    <h4 className='text-2xl mb-7'>Login</h4>

                    <input type="text" placeholder='email' className='input-box' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Password value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className='text-red-500 text-xs pb-1'>{error}</p> }
                    <button type="submit" className='btn-primary'>
                        Login
                    </button>
                    <p className='text-sm text-center mt-4'>
                        not Registered yet?{" "}
                        <Link to="/signup" className='font-medium text-primary underline'>
                        Create an account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login
