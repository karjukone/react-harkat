import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useEffect, useState } from "react";

const Login = () => {
const [button, setButton] = useState(true);
const [btnText, setBtnText] = useState('login instead');

useEffect(() => {
  button ? setBtnText('register instead') : setBtnText('login instead')
}, [button]);


  return (
    <>
      {button ? (
        <LoginForm></LoginForm>
      ) : (
        <RegisterForm></RegisterForm>
      )}
      <button onClick={() => setButton(!button)}> {btnText} </button>


    </>
  );
};

export default Login;