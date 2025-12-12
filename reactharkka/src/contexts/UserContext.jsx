import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useLocation, useNavigate} from 'react-router';


const UserContext = createContext(null);


const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();


  const handleLogin = async (credentials) => {
    try {
      const userInfo = await postLogin(credentials);
      console.log(userInfo);
      setUser(userInfo.user);
      localStorage.setItem('token', userInfo.token);

      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.clear();
      setUser(null);
      navigate('/');

    } catch (e) {
      console.log(e.message);
    }
  };

  const handleAutoLogin = async () => {
    const token = localStorage.getItem('token');

    try {
      if (token) {
        const userResponse = await getUserByToken(token);
        setUser(userResponse.user);
      }

      console.log('location:', location);
      navigate(location.pathname);

    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider value={{handleLogin, handleLogout, handleAutoLogin, user}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider, UserContext};