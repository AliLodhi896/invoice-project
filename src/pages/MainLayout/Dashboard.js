import React, { useState } from "react";
import { Analytics, Table } from "../../components";
import AdminLayout from ".";

function Dashboard() {
  return (
    <AdminLayout>
      <div className="flex flex-col p-4 sm:ml-64">
        <div className="flex flex-rows max-md:flex-col w-full justify-between">
          <h2 className="text-4xl text-black font-semibold">Customers</h2>
          <div className="flex flex-rows">
            <button
              type="file"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Import from CSV
            </button>
            <button
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add a Customer
            </button>
          </div>
        </div>
        <div class="flex flex-row mt-8 items-center">
          <div class="relative w-2/6 ">
            <input
              type="search"
              id="location-search"
              class="block p-2.5 w-full z-20 text-sm text-gray-400 font-semibold rounded-lg  border-1 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Enter Invoice #"
              required
            />
            <button
              type="submit"
              class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white  rounded-e-lg border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
          <div className=" flex items-center bg-[#D1E4F5] rounded-full m-2 h-8 w-8">
            <p className="text-center font-bold mx-auto">2</p>
          </div>
          <p className="text-center font-bold ml-2">customers found</p>
        </div>
        <Table />
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
