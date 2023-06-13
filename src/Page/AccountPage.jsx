import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AccountPage = () => {
    const { user,setUser, loading } = useContext(UserContext);
    const navigate = useNavigate()
    let { subpage } = useParams();
    {
        if (subpage === undefined){
            subpage = 'profile';
        }
    }

    const logOut = async() => {
    await axios.post('/logout');
      
        setUser(null)
        navigate('/')
    
    }


  if (loading) {
    return "loading...";
  }
  if (!user && !loading) {
    return <Navigate to={"/login"} />;
  }
    
    const linkClass = (type = null)=> {
        let classes = 'py-2 px-4';
        if (type === subpage) {
            classes += ' bg-primary text-white rounded-full'
        }
        return classes;
}

  return (
    <div>
    <nav className="w-full flex mt-8 gap-2 justify-center ">
      <Link className={linkClass('profile')} to={"/account"}>My Account</Link>
      <Link className={linkClass('bookings')} to={"/account/bookings"}>My Bookings</Link>
      <Link className={linkClass('places')} to={"/account/places"}>My Accomodations</Link>
          </nav>
          {subpage === 'profile' && (
              <div className='text-center'>
                  Logged in as {user?.name} and ({user?.email} ) 
                  <br />
                  <button onClick={logOut}  className='primary max-w-sm mt-2'>Log Out</button>
              </div>
          )}
  </div>
  
  );
};

export default AccountPage;
