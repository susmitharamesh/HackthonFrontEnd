import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom'
const formReducer = (state, action) => {
  switch (action.type) {
    case 'submit':
      return { username: action.payload.username, 
        password: action.payload.password };
    case 'reset':
      return { username: '', password: '' };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(formReducer, { username: '', password: '' });

  const handleForm = (e) => {
    e.preventDefault();
    
    dispatch({ type: 'submit', payload: { username, password } });

   
  };
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form-group">
      <h1>Login Form</h1>
      <form>
        <label>Username:</label><br />
        <input
          value={username.trim()}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <br />
        <label>Password:</label><br />
        <input
          value={password.trim()}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <button onClick={handleForm}>Submit</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </form>
      <p><Link to="/about">ABOUT</Link></p>
      <h1>User Details</h1>
      <p>Username: {state.username}</p>
      <p>Password: {state.password}</p>
     
     
    </div>
  );
};

export default Login;
