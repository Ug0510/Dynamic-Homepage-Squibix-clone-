import React, { useState } from 'react';
import './this.css'; 
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/Navbar';


const AdminLoginForm = ({login}) => {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); 

        console.log(typeof(username));
        console.log(typeof(password));

        // Check if username and password match the expected values
        if (username === 'udit' && password === '1123') {
            login();
            navigate('/update-form');
        } else {
            // If credentials are incorrect, set error message
            setErrorMessage('Invalid username or password');
            setUsername('');
            setPassword('');
        }
    };

    return (
        <>
        <Navbar/>
        <div className='form-body'>
            <div className="login-box">
                <h2>Admin Login</h2>
                <form > 
                    <div className="user-box">
                        
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label className={username ? 'd-none' : ''}>Username</label>
                    </div>
                    <div className="user-box">
                        
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label className={password ? 'd-none' : ''}>Password</label>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div>
                        <button type="button" onClick={handleSubmit}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default AdminLoginForm;
