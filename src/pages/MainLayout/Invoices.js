import React, { useState } from "react";
import { Analytics, Table } from "../../components";
import AdminLayout from ".";

function Invoices() {
  const [activetab, setActivetab] = useState("All");

  return (
    <AdminLayout>
      <div className="flex flex-col p-4 lg:ml-64">
        <div className="flex flex-rows max-md:flex-col w-full justify-between">
          <h2 className="text-4xl text-black font-semibold">Invoices</h2>
          <button
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Create an Invoice
          </button>
        </div>

        <Analytics />

        <div className="my-8 flex flex-rows gap-2 max-md:flex-col">
          <button
            id="dropdownDelayButton"
            data-dropdown-toggle="dropdownDelay"
            data-dropdown-delay="500"
            data-dropdown-trigger="hover"
            class=" max-md:w-full w-2/6 flex flex-row justify-between text-gray-500 border-2 border-slate-300  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            All customers{" "}
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <button
            id="dropdownDelayButton"
            data-dropdown-toggle="dropdownDelay"
            data-dropdown-delay="500"
            data-dropdown-trigger="hover"
            class="max-md:w-full  w-2/12 flex flex-row justify-between text-gray-500 border-2 border-slate-300  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            All statuses{" "}
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div className="flex flex-row max-sm:flex-col gap-2 justify-between">
            <div class="relative  max-md:w-full ">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                datepicker
                type="text"
                class=" border border-gray-400 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="From"
              />
            </div>
            <div class="relative max-md:w-full ">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                datepicker
                type="text"
                class=" border border-gray-400 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="To"
              />
            </div>
          </div>

          <div class="flex">
            <div class="relative w-full ">
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
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="max-md:hidden h-[2px] bg-gray-500 w-2/6"></div>

          <ul class="max-md:w-full w-2/6 flex justify-around text-sm font-medium text-center text-gray-500 bg-[#F1F5FE] rounded-xl p-1">
            <li class="me-2">
              <button
                onClick={() => setActivetab("Unpaid")}
                style={{
                  backgroundColor: activetab == "Unpaid" ? "#fff" : "#F1F5FE",
                  fontWeight: activetab == "Unpaid" ? "bold" : "400",
                }}
                class="inline-block px-4 text-[#001B66] py-3 rounded-lg  hover:bg-gray-100 rounded-xl  "
              >
                Unpaid
              </button>
            </li>
            <li class="me-2">
              <button
                onClick={() => setActivetab("Draft")}
                style={{
                  backgroundColor: activetab == "Draft" ? "#fff" : "#F1F5FE",
                  fontWeight: activetab == "Draft" ? "bold" : "400",
                }}
                class="inline-block px-4 py-3 text-[#001B66] rounded-lg  hover:bg-gray-100 rounded-xl  "
              >
                Draft
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivetab("All")}
                style={{
                  backgroundColor: activetab == "All" ? "#fff" : "#F1F5FE",
                  fontWeight: activetab == "All" ? "bold" : "400",
                }}
                class="rounded-xl inline-block px-4 py-3 text-[#001B66]   dark:text-gray-500"
              >
                All Invoices
              </button>
            </li>
          </ul>

          <div className="max-md:hidden h-[2px] bg-gray-500 w-2/6"></div>
        </div>

        <Table />
      </div>
    </AdminLayout>
  );
}

export default Invoices;
