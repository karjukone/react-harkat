import { useUserContext } from "../hooks/contextHook";

const Profile = () => {
  const { user } = useUserContext();

  return (
    <div className="flex justify-center mt-10 px-4">
      {user && (
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-pink-100 p-6 text-pink-800">
          <h1 className="text-2xl font-semibold text-pink-700 mb-4 text-center">Profile</h1>

          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-pink-50 border border-pink-100">
              <p className="text-sm text-pink-600">Username</p>
              <p className="text-lg font-medium">{user.username}</p>
            </div>

            <div className="p-3 rounded-lg bg-pink-50 border border-pink-100">
              <p className="text-sm text-pink-600">Email</p>
              <p className="text-lg font-medium">{user.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;