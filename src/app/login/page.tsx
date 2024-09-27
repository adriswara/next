'use client'
import { useState } from 'react';
import axios from 'axios';
import DrawAlert from '@/services/alertDraw.service';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  var message = DrawAlert(0, "", "")
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();


    try {
      const response = await axios.post('/api/login', { username, password });
      // console.log('Token:', response.data.token);
      message = DrawAlert(3, "Success", "Login Complete");
      // 
      const { token } = await response.data
      var now = new Date();
      var time = now.getTime();
      var expireTime = time + 1000*300;
      now.setTime(expireTime);
      const expires = "expires=" + now.toUTCString();
      document.cookie =`token=${token}; ` + expires + "; path=/;";
   
      router.push('/profile')
    } catch (error) {
      message = DrawAlert(1, "Failed", "Invalid Password or Username");
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
      <div>{message}</div>

    </form>
  );
};

export default Login;
