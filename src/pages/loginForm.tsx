// LoginForm.jsx
import { useState } from "react";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e:any) => {
    e.preventDefault();
    if(form.username != "edwinsanjosoji@gmail.com") return toast.error("Wrong Email");
    window.location.href = "/home.html";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-sm bg-slate-800 text-white shadow-lg rounded-lg p-6 border border-slate-700">
        <h1 className="text-2xl font-semibold text-center mb-6">UniFlow Login</h1>

        <form onSubmit={handleLogin} className="grid gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              className="w-full bg-slate-700 border border-slate-600 text-white rounded p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full bg-slate-700 border border-slate-600 text-white rounded p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}