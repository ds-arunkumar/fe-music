import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectEmail, selectName, selectPassword, setName, setEmail, setPassword} from '../redux/features/auth/registerSlice';

const RegisterPage = () =>{

  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  }

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-4xl text-gray-800">Register</h1>
      <div className="max-w-md mx-auto mt-5 bg-white shadow-md rounded-md p-5 rounded-lg overflow-hidden border border-gray-200">
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="name"
            type="text"            
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}          
            />
          </div> 
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="password" 
            id="password" 
            name="password" 
            placeholder="******"   
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}         
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Register</button>
          </div>
        </form>
        <p className="mt-3 text-sm text-gray-600">Already have an account? <Link to="/login" className="text-indigo-600 hover:text-indigo-500">Login</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage;