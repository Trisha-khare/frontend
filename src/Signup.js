import React from 'react'
import {Link} from 'react-router-dom'


function Signup(){
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <form action=" ">
        <div className='mb-3'>
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="text" placeholder='Enter Name' className='form-control rounded-0'/> 
            </div>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' className='form-control rounded-0'/> 
            </div>
            <div className='mb3'>
                <label htmlFor="Password"><strong>Password</strong></label>
                <input type="Password" placeholder='Enter Password' className='form-control rounded-0'/> 
            </div>
            
  
            <button className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
            <p>You agree to our terms and policies</p>
            <Link to="/" className='btn btn-default border w-100 bg-light rounded-0  text-decoration-none'>Login</Link>
        </form>
</div>
    </div>
    )
}

export default Signup