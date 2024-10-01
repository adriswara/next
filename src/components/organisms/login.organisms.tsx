import { FC, useContext, useEffect } from "react";
import { useState } from "react";
import DrawAlert from "@/services/alertDraw.service";
import { UserDataContext } from "../../UserDataContext";
import axios from 'axios';
import { useRouter } from 'next/navigation';




interface LoginComponentProps {}
const LoginComponent: FC<LoginComponentProps> = (props) => {
    const {} = props
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submited, setSubmited]=useState(false)
    const router = useRouter()
    var message = DrawAlert(0, "", "")
    const { dataUser, setUser } = useContext(UserDataContext);
    
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
          setSubmited(true) 
          document.cookie = `username=${username}; ` + expires + "; path=/;";
          router.push('/profile')
        } catch (error) {
          message = DrawAlert(1, "Failed", "Invalid Password or Username");
          console.error('Login failed:', error);
        }
      };

      useEffect(()=>{submited? setUser?setUser(username):{}:{}},[submited, setUser])
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" >Login</button>
            <div>{message}</div>
            </form>
        </div>
    )
}

export default LoginComponent