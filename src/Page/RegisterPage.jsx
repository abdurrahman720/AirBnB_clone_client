import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-32">
        <h1 className="text-4xl mb-4 text-center">Register</h1>
        <form action="" className="max-w-md mx-auto  ">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="your@email.com" />
            <input type="password" placeholder="password" />
                <button className="primary">Register</button>
                <div className="text-center py-2 text-gray-500">
                   Already a member?
                    <Link className="underline text-black" to='/login'>
                        Login
                    </Link>
                </div>
        </form>
        </div>
    </div>
    );
};

export default RegisterPage;