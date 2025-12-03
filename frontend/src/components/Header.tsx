import { useNavigate } from "react-router-dom";
import * as Lucide from "lucide-react";

const getInitial = (email: string) => {
  if (!email) return "?";
  const name = email.split("@")[0];
  return name.charAt(0).toUpperCase();
};

const Header = ({ user, onLogout }: { user: string | null; onLogout: () => void }) => {
  const navigate = useNavigate();
  const username = user ? user.split("@")[0] : "";
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b border-gray-200">
      <div className="font-bold text-2xl text-blue-600">IA03</div>
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <button
              className="ml-4 flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
              onClick={onLogout}
            >
              <Lucide.LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 rounded-md transition-colors font-medium"
              onClick={() => navigate("/login")}
            >
              <Lucide.LogIn className="w-4 h-4" />
              Login
            </button>
            <button
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium shadow-sm"
              onClick={() => navigate("/signup")}
            >
              <Lucide.UserPlus className="w-4 h-4" />
              Sign Up
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
