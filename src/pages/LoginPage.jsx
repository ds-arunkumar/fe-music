import { Link } from 'react-router-dom';
const LoginPage = () => {
  return(
    <div className="container mt-5 text-center">
      <h1 className="text-4xl text-gray-800">Login</h1>
      <div className="max-w-md mx-auto mt-5 bg-white shadow-md rounded-md p-5 rounded-lg overflow-hidden border border-gray-200">
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" placeholder="******" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            /> 
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          </div>
        </form>
        <p className="mt-3 text-sm text-gray-600">Don't have an account? <Link to="/register" className="text-indigo-600 hover:text-indigo-500">Register</Link></p>
      </div>
    </div>
  )
}

export default LoginPage;