import { Link, Outlet } from "react-router";
import { useEffect } from "react";
import { useUserContext } from "../hooks/contextHook";

const Layout = () => {
  const { handleAutoLogin, user } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 text-pink-700">
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Center navigation */}
          <ul className="flex-1 flex justify-center gap-6 text-pink-700 font-medium">
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

          {/* Right buttons */}
          <div className="flex items-center gap-3 ml-auto">
            {!user && (
              <Link
                to="/login"
                className="px-4 py-2 rounded-full bg-pink-300 hover:bg-pink-300 transition text-white font-medium ring-1 ring-pink-100 shadow-sm"
              >
                Login
              </Link>
            )}

            {user && (
              <Link
                to="/logout"
                className="px-4 py-2 rounded-full bg-pink-300 hover:bg-pink-300 transition text-white font-medium ring-1 ring-ppink-100 shadow-sm"
              >
                Logout
              </Link>
            )}
          </div>

        </div>
      </nav>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
