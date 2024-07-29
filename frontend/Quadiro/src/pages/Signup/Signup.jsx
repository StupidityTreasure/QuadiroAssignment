import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Password from '../../components/input/password.jsx';
import { validateEmail } from '../../utils/helper';
import { Link } from 'react-router-dom';
const Signup=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(null);

    const handleSignup=async(e)=>{
        e.preventDefault();
        if(!name){
            setError(`plaese eneter your name`)
            return;
        }
        if(!validateEmail(email)){
            setError(`please enetr a valid email`)
            return;
        }
        if(!password){
            setError(`please enter valid password`)
            return;
        }
        setError("")
    }
    return (
        <>
        <Navbar/>
       <div className='flex items-center justify-center mt-28'>
            <div className='w-96 border rounded bg-white px-7 py-8'>
                <form onSubmit={handleSignup}>
                    <h4 className='text-2xl mb-7'>Signup</h4>
                    <input type="text" placeholder='Name' className='input-box' 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />

                    <input type="text" placeholder='email' className='input-box' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                    <Password value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className='text-red-500 text-xs pb-1'>{error}</p> }
                    <button type="submit" className='btn-primary'>
                        Create Account
                    </button>
                    <p className='text-sm text-center mt-4'>
                        Already have an account{" "}
                        <Link to="/login" className='font-medium text-primary underline'>
                        Login
                        </Link>
                    </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
