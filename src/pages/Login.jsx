import React from "react";
import { Lock, Mail } from "lucide-react";

const Login = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Login</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input type="email" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input type="password" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Login</button>
      </div>
    </div>
  </div>
);

export default Login;