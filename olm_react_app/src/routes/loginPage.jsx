import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        setErrMsg(''); // Reset error message

        try {
            const response = await axios.post("http://localhost:8080/login", {
                username,
                password
            }/*, {
                withCredentials: true // For handling cookies/session if your backend uses it
            }*/);
            
            navigate('/'); // Redirect to home page
        } 
        catch (err) { // gets 401 code from backend
            setErrMsg('Login failed. Please check your credentials.');
            console.error('Login error:', err);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {errMsg && <p className="error">{errMsg}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button onClick={handleLogin} type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;