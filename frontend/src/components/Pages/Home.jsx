import React from "react";
import { useAuth } from "../Auth/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="">
      <p className="text-center text-8xl">HomePage</p>
      <br />
      {user ? (
        <>
          <p>{user.userEmail}</p>
          <p>{user.userCompany}</p>
          <p>{user.userName}</p>
          <button
            className="px-4 py-2 bg-blue-600 rounded-xl text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Home;
