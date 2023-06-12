import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

  const handleRegister = (e) => {
    e.preventDefault();
      console.log(name, email, password);
      try {
        axios.post('/register', {
            name, email, password
        });
        alert('Registration successfull')
    }
      catch (e) {
        alert('Registration failed')
    }
  }
    

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl mb-4 text-center">Register</h1>
        <form action="" className="max-w-md mx-auto  ">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister} className="primary">
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            Already a member?
            <Link className="underline text-black" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
