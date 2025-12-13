import { Link, Outlet } from "react-router";
import { useEffect } from "react";
import { useUserContext } from "../hooks/contextHook";

const Layout = () => {
  const { handleAutoLogin, user } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <div className="bg-pink-50 text-pink-700">
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">
          <ul className="flex-1 flex justify-center gap-6 font-medium">
            <li>
              <Link to="/" className="hover:text-pink-900 transition">
                Home
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/profile" className="hover:text-pink-900 transition">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/upload" className="hover:text-pink-900 transition">
                    Upload
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="flex items-center gap-3">
            {!user && (
              <Link
                to="/login"
                className="px-4 py-2 rounded-full bg-pink-300 hover:bg-pink-400 transition text-white font-medium shadow-sm"
              >
                Login
              </Link>
            )}

            {user && (
              <Link
                to="/logout"
                className="px-4 py-2 rounded-full bg-pink-300 hover:bg-pink-400 transition text-white font-medium shadow-sm"
              >
                Logout
              </Link>
            )}
          </div>

        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-4 py-2">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;

