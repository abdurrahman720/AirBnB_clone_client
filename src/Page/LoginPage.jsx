import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const LoginPage = () => {
    const {setUser,user} = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin =async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('/login', { email, password });
            setUser(data)
            alert("Login successful");
            navigate('/');
        }
        catch (e) {
            alert("login failed")
        }
    }


    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
            <h1 className="text-4xl mb-4 text-center">Login</h1>
            <form action="" className="max-w-md mx-auto  ">
                <input type="email" placeholder="your@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button onClick={handleLogin} className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account?
                        <Link className="underline text-black" to='/register'>
                            Register Now
                        </Link>
                    </div>
            </form>
            </div>
        </div>
    );
};

export default LoginPage;