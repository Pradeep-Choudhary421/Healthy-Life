import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <nav class="h-full bg-gray-900 w-screen pr-72 pt-8">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex-1 flex items-center justify-end">
              <button
                type="button"
                class="relative ml-auto rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <Link to="/notification">
                  <button class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-600">
                    <span class="mr-2">Alert</span>
                    <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                      {user?.isAdmin ? user?.notification?.length : "0"}
                    </span>
                  </button>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
