import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const payload = {
    email,
    password,
  };

  const login = async (e) => {
    e.preventDefault();
    const resp = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: "il token",
          user: {
            name: "Cristoforo",
            email: payload.email,
          },
        });
      }, 2000);
    });
    setUser(resp);
    setIsLoggedIn(true);
    localStorage.setItem("IsLoggedIn", true);
    navigate("/posts");
  };

  useEffect(() => console.log(user, isLoggedIn), [user]);

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold rext-2x1 mb-4 block text-center">Login</h2>
      <form onSubmit={login}>
        <div>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
            placeholder="Enter Title"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
            placeholder="Enter Password"
          />
        </div>
        <div className="mt-2 flex gap-4">
          <button className="inline-block w-full text-center shadow-md text-sm bg-green-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-green-600 hover:cursor-pointer">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
