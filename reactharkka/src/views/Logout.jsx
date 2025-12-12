import { useUserContext } from "../hooks/contextHook";

const Logout = () => {
    const {handleLogout} = useUserContext();

    return handleLogout();
}
export default Logout;