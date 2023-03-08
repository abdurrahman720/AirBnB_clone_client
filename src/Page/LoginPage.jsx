import React from 'react';

const LoginPage = () => {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
            <h1 className="text-4xl mb-4 text-center">Login</h1>
            <form action="" className="max-w-md mx-auto  ">
                <input type="email" placeholder="your@email.com" />
                <input type="password" placeholder="password" />
                <button className="primary">Login</button>
            </form>
            </div>
        </div>
    );
};

export default LoginPage;