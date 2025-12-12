import { useAuthentication } from "../hooks/apiHooks";
import { useNavigate } from "react-router";
import useForm from "../hooks/formHook";

const LoginForm = () => {
    const {postLogin} = useAuthentication();
    const navigate = useNavigate();

    const initValues = {
        username: '',
        password: '',
    };

    const doLogin = () => {
        console.log(inputs);
        const response = postLogin(inputs);
        if (response) localStorage.setItem('token', response);
        navigate('/')
    };

    const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, initValues);

    console.log(inputs);

     return (
         <>
             <h1>Login</h1>
             <form onSubmit={ (e) => {handleSubmit(e)} }>
                  <div>
                      <label htmlFor="loginuser">Username</label>
                     <input
                         name="username"
                         type="text"
                         id="loginuser"
                         onChange={ (e) => {handleInputChange(e)} }
                         autoComplete="username"
                         placeholder="username"
                     />
                 </div>
                 <div>
                     <label htmlFor="loginpassword">Password</label>
                      <input
                         name="password"
                         type="password"
                         id="loginpassword"
                         onChange={ (e) => {handleInputChange(e)} }
                         autoComplete="current-password"
                         placeholder="password"
                     />
                 </div>
                 <button type="submit">Login</button>
             </form>
         </>
     );
};

export default LoginForm