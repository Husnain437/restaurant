import React,{useState} from 'react'
import './SignUp.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const SignUpAuth = () => {
    const [data, setData] =  useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    })
    const [error, setError] = useState('')
    const handleChange=({currentTarget: input})=>{
        setData({...data,[input.name]:input.value})
    }
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const url = 'http://localhost:8080/api/users';
            const {data:res} = await axios.post(url,data)
            navigate('/login')
            console.log(res.message);
        }
        catch(error){
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
                console.log(error.response.data.message);
            }
        }
    }

  return (
    
    <div className='signup-main'>
            <h2 className='signup-heading'>Sign Up</h2>
            <div className='form-data'>   
                <form className='main-form' onSubmit={handleSubmit}>
                    <h4>First Name</h4>
                    <input className='text-input' name='firstname' value={data.firstname}  placeholder='Name' required onChange={handleChange} />
                    <h4>Last Name</h4>
                    <input className='text-input' name='lastname' value={data.lastname}  placeholder='Name' required onChange={handleChange} />
                    <h4>Email</h4>
                    <input className='text-input' name='email' value={data.email} placeholder='Email' type='email' required onChange={handleChange} />
                    <h4>Password</h4>
                    <input  className='text-input' name='password' value={data.password} type='password' placeholder='Password' required onChange={handleChange} />
                   {error && <div className='error_msg' >{error}</div>}
                    <input className='signup-btn text-input' type='submit' value='register'/>
                    
                    </form>
                    
            </div>
            <Link to='/login' >
                        <p className='switch'>Already Have Account?</p>
                    </Link>
           
        </div>
  )
}

export default SignUpAuth