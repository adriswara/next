import { FC, useContext, useEffect } from "react";
import { useState } from "react";
import DrawAlert from "@/services/alertDraw.service";
import { UserDataContext } from "../../UserDataContext";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import ModalLoading from "../molecules/modalLoading.molecule";
import { format, compareAsc, sub } from "date-fns";




interface LoginComponentProps { }
const LoginComponent: FC<LoginComponentProps> = (props) => {
  const { } = props
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submited, setSubmited] = useState(false)
  const [showModal, setShowModal] = useState(false);

  const router = useRouter()
  var message = DrawAlert(0, "", "")
  const { dataUser, setUser } = useContext(UserDataContext);

  const handleLoginBonus = async (username : string) => {
    var idUser = 0
    const now = new Date();
    const jakartaTime = now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });

    const data = {
        id_user: Number(idUser),
        item_created: format(jakartaTime, "yyyy-MM-dd hh:mm:ss"),
    };
    // handlePoint()
    try {
        const response = await fetch('http://localhost:8081/insertTransaction', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },

        });

        if (response.ok) {
            console.log('ok')
           
            console.log(await response.json)
        }
        else {
            console.log("failed")
        }
    } catch (error) {
        console.log("epi error")
    }
};

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();


    try {
      const response = await axios.post('/api/login', { username, password });
      message = DrawAlert(3, "Success", "Login Complete");
      // 
      const { token } = await response.data
      var now = new Date();
      var time = now.getTime();
      var minute = 1000 * 60
      var hour = minute * 60
      var expireTime = time + hour;
      now.setTime(expireTime);
      const expires = "expires=" + now.toUTCString();
      document.cookie = `token=${token}; ` + expires + "; path=/;";
      setSubmited(true)
      document.cookie = `username=${username}; ` + expires + "; path=/;";
      router.push('/profile')
    } catch (error) {
      setShowModal(false)
      message = DrawAlert(1, "Failed", "Invalid Password or Username");
      console.error('Login failed:', error);
      router.refresh()
    }
  };

  useEffect(() => { submited ? setUser ? setUser(username) : {} : {} }, [submited, setUser])
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}

      <div className="wrapper flex items-center justify-center h-screen">
        <div
          className="rounded md:border bg-card text-card-foreground w-full sm:w-1/2 shadow-none sm:shadow-lg sm:rounded-lg sm:border sm:px-4 py-6">
          <div className="flex flex-col space-y-1.5 mb-4">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              {/* <img src="./jonasLogin_files/logo-jonas.svg" alt="Jonasphoto Logo" className="w-28 object-contain"> */}
            </h3>
            <p className="text-sm text-muted-foreground">Login with your jonasphoto account
            </p>
          </div>
          <div className="pt-0">
            <form onSubmit={handleSubmit} className="space-y-4" >
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Username
                </label>
                <div className="flex relative items-center gap-2">
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Input your username" id=":r0:-form-item" aria-describedby=":r0:-form-item-description" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </label>
                <div className="flex relative items-center gap-2">
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Input your password" id=":r1:-form-item" aria-describedby=":r1:-form-item-description" />
                  <div className="absolute right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      className="lucide lucide-eye ">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z">
                      </path>
                      <circle cx="12" cy="12" r="3">
                      </circle>
                    </svg>
                  </div>
                </div>
              </div>
              <button onClick={() => setShowModal(true)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" type="submit">
                Login
              </button>
            </form>
            <ModalLoading show={showModal} onClose={() => setShowModal(false)}></ModalLoading>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent