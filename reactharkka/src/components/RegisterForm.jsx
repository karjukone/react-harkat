import useForm from '../hooks/formHook';
import { useUser } from '../hooks/apiHooks';

const RegisterForm = () => {
  
  const {postUser} = useUser();
 

  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    try {

      const response = await postUser(inputs);
      console.log(response);
    } catch (err) {
        console.log(err);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues,
  );

  return (
    <div>
        <h1>Register</h1>
      <div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
              <label htmlFor="registerUser">username</label>
              <div>
                <input
                  name="username"
                  type="text"
                  id="registerUser"
                  placeholder='username'
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  
                />
            </div>

            <div>
              <label htmlFor="registerEmail">Email</label>
                <input
                  name="email"
                  type="text"
                  id="registerEmail"
                  placeholder='email'
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
            </div>

            <div>
              <label
                htmlFor="registerPassword">Salasana</label>
                <input
                  name="password"
                  type="password"
                  id="registerPassword"
                  placeholder='password'
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;