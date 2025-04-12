import { Navigate, Outlet, useLoaderData } from 'react-router';
import NavBar from '../components/NavBar';
import Player from '../components/Player';


const DashboardWrapper = () => {
  

  const user = useLoaderData();

  //console.log(user);
  
  if (!user){
    return <Navigate to="/login"/>
  }

  if (user.user.role == 'admin'){
    return <Navigate to="/admin/dashboard"/>
  }
  return (
    <>
      <NavBar
        user={user.user}
      />
      <Outlet />
      <Player />

    </>
  )
}

export default DashboardWrapper;