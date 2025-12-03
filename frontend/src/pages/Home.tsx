import { useEffect, useState } from "react";
import * as Lucide from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.email) setUser(parsed.email);
      } catch {
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // Thông báo logout thành công
    import("@/hooks/use-toast").then(({ toast }) => {
      toast({
        title: "Logged out successfully!",
        duration: 1000,
        className: "bg-green-100 border-green-500 text-green-900 shadow-lg"
      });
    });
  };

  const getInitial = (email: string) => {
    if (!email) return "?";
    const name = email.split("@")[0];
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header user={user} onLogout={handleLogout} />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-5xl w-full">
          {user ? (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Welcome back, {user.split("@")[0]}! 👋
                </h1>
                <p className="text-lg text-gray-600">Great to see you to our website!</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold text-white bg-blue-600 shadow-lg">
                    {getInitial(user)}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Information</h2>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Lucide.User className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">Username:</span>
                        <span>{user.split("@")[0]}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Lucide.Mail className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">Email:</span>
                        <span>{user}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Lucide.Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Secure Authentication</h3>
                  <p className="text-sm text-gray-600">
                    Password hashing with bcrypt and secure database storage
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Lucide.UserPlus className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Easy Registration</h3>
                  <p className="text-sm text-gray-600">
                    Simple sign-up process with real-time validation
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <Lucide.Settings className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Account Management</h3>
                  <p className="text-sm text-gray-600">
                    Manage your profile and security settings
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                  <Lucide.Shield className="w-4 h-4" />
                  Secure Registration System
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                  Welcome to IA03
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  A modern user registration system built with React, TypeScript, and Tailwind CSS.
                  Experience beautiful forms with comprehensive validation.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <Lucide.Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Secure Authentication</h3>
                  <p className="text-sm text-gray-600">
                    Password hashing with bcrypt and secure database storage
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 mx-auto">
                    <Lucide.UserPlus className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Easy Registration</h3>
                  <p className="text-sm text-gray-600">
                    Simple sign-up process with real-time validation
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                    <Lucide.Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Modern UI</h3>
                  <p className="text-sm text-gray-600">
                    Beautiful interface built with shadcn/ui and Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;