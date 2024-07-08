import React,{useState} from 'react'
import './SignIn.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const SignUpAuth = () => {
    const [data, setData] =  useState({
        email:'',
        password:''
    })
    const [error, setError] = useState('')
    const handleChange=({currentTarget: input})=>{
        setData({...data,[input.name]:input.value})
    }
   
   
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const url = 'http://localhost:8080/api/auth';
            const {data:res} = await axios.post(url,data)
            localStorage.setItem('token' , res.data);
            window.location='/'
           
        }
        catch(error){
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
        }
    }

  return (
    <>
    <div className='login-main'>
            <h2 className='login-heading'>LogIn</h2>
            <div className='login-form'>   
                <form className='main-form' onSubmit={handleSubmit}>
                     <h4>Email</h4>
                    <input className='text-input' name='email' value={data.email} placeholder='Email' type='email' required onChange={handleChange} />
                    <h4>Password</h4>
                    <input  className='text-input' name='password' value={data.password} type='password' placeholder='Password' required onChange={handleChange} />
                     {error && <div className='error_msg' >{error}</div>}
                    <input className='signin-btn text-input' type='submit' value='login'/>
            
                    </form>
                    <div className='switch'>
            <Link to='/signup' > 
                        <p>New Here?</p>
                     </Link>
            </div>
            </div>
            
            
           
        </div>
       
		
        </>
  )
}

export default SignUpAuth