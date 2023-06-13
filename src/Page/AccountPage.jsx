import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link, Navigate } from "react-router-dom";

const AccountPage = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return "loading...";
  }
  if (!user && !loading) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <nav className="w-full flex mt-8 gap-2 justify-center ">
        <Link className="py-2 px-4 bg-primary text-white rounded-full" to={"/account"}>My Account</Link>
        <Link className="py-2 px-4" to={"/account/bookings"}>My Bookings</Link>
        <Link className="py-2 px-4" to={"/account/places"}>My Accomodations</Link>
      </nav>
    </div>
  );
};

export default AccountPage;
