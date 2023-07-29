import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Login = () => {
  const[credentials, setCredentials] = useState({email:"",password:""});
    const navigate = useNavigate();
    const handleInputChange=(event)=>{
        setCredentials({
            ...credentials, [event.target.name] : event.target.value
        })
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/loginUser",credentials);
            localStorage.setItem("userEmail",credentials.email);
            console.log(credentials.email);
            localStorage.setItem("authToken",response.authToken);
            navigate("/");
            
        } catch (err) {
            const message = (err.response && err.response.data && err.response.data.message) || err.message ||err.toString()
            console.log(message);
        }
    }
  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={handleInputChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={handleInputChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
        </form>

      </div>
    </div>
  )
}

export default Login