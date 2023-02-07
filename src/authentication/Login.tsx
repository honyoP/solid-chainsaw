import PocketBase from 'pocketbase';
import { useState } from 'react';

const pb = new PocketBase('http://127.0.0.1:8090');

type Props = {
    setToken: React.Dispatch<React.SetStateAction<any>>;
};

const Login = ({ setToken }: Props) => {
    const [uemail, setUemail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = async () => {
        const authData = await pb.collection('users').authWithPassword(uemail, pass);
        setToken(authData.token);
    }

    return(
    <div className="App">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='input-container'>
                <label>Email </label>
                <input type={'text'} name={'uemail'} onChange={e => setUemail(e.target.value)} required />
            </div>
            <div className='input-container'>
                <label>Password </label>
                <input type={'password'} name={'pass'} onChange={e => setPass(e.target.value)} required />
            </div>
        </form>
        <button onClick={handleSubmit}>LoginYa</button>
      </div>
    )
}



export default Login;