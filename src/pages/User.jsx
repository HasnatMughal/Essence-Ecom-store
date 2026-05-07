import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import authentication from "../auth/auth";
import { NavLink, useParams, Link } from "react-router";
import LogoutBtn from "../components/LogoutBtn";
import Container from "../components/Container/Container";
import conf from "../../conf/conf";

function User() {
  const { user, setUser } = useUser();
  const { username } = useParams();
  console.log(user);
  

  const [usersName, setusersName] = useState(user.name);
  async function fetchuser() {
    try {
      const fetchedUser = await authentication.checkUser();
      // console.log(fetchedUser)
    } catch (error) {}
  }

  useEffect(() => {
    fetchuser();
  }, []);

  const isAdmin = user?.email === conf.adminEmail
  return (
    <>
     <Container>
  <div className=" mx-auto mt-10 px-4">
    
    {/* Header */}
    <div className="flex items-center gap-4 mb-8">
      <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl font-semibold">
        {usersName?.charAt(0).toUpperCase()}
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">{usersName}</h1>
        <p className="text-gray-400 text-sm">{user.email}</p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row lg:flex-row gap-6 items-start">
      
      {/* Sidebar - admin only */}
      {isAdmin && (
        <div className="w-full md:w-1/2 lg:w-1/2  shrink-0 border border-gray-200 rounded-xl overflow-hidden bg-white">
          <div className="p-3 border-b border-gray-100 bg-gray-50">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Admin Panel</p>
          </div>
          <ol className="flex flex-col">
            <li>
              <NavLink to="/admin/uploadproduct" className="block p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                Upload Product
              </NavLink>
            </li>
            <li className="border-t border-gray-100">
              <NavLink to="/admin/yourProducts" className="block p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                All Products
              </NavLink>
            </li>
          </ol>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Account Details</h2>
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400 uppercase tracking-wide">Full Name</label>
            <input type="text" value={usersName} readOnly
              className="p-3 border border-gray-200 rounded-lg text-gray-700 bg-gray-50 focus:outline-none text-sm" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400 uppercase tracking-wide">Email</label>
            <input type="text" value={user.email} readOnly
              className="p-3 border border-gray-200 rounded-lg text-gray-700 bg-gray-50 focus:outline-none text-sm" />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <LogoutBtn />
        </div>
      </div>

    </div>
  </div>
</Container>
    </>
  );
}

export default User;
