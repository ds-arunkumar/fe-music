import { useEffect } from "react";
import { useNavigate } from "react-router";
import authServices from "../services/authServices";
import { toast } from "react-toastify";

const Logout = () => {

  const navigate = useNavigate();

  useEffect(() => {
   authServices.logout()
   .then((response)=>{
      toast.success(response.data.message);

      setTimeout(()=>{
        navigate('/login');
      }, 500);


   }) 
    .catch((error)=>{
      toast.error(error.response.data.message);
    })
  },[navigate]);
  return (
    <div> Logging out...</div>
  )
}

export default Logout;