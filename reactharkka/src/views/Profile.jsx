import { useUserContext } from "../hooks/contextHook";

const Profile = () => {
    const {user} = useUserContext();

    return (
        <div>
            {user &&
                <>
                    <h1>Profile</h1>
                    <p color="white">Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </>
            }
        </div>
    );
};

export default Profile;