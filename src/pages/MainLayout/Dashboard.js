import React, { useState } from "react";
import { Analytics, Table } from "../../components";
import AdminLayout from ".";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import TempInvoiceImg from "../../assets/images/temp_invoice.jpg";
import BankLogo from "../../assets/images/bank.png";
import BarGraph from "../../components/Charts/BarGraph";
import PieGraph from "../../components/Charts/PieChart";
import NetIncomeTable from "../../components/NetIncomeTable";
import BarGraphNoStack from "../../components/Charts/BarGraphNoStack";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Transactions() {
  return (
    <AdminLayout>
      <div class="container mx-auto">
        <div className="flex flex-col p-4 lg:ml-64">
          <div className="flex flex-rows max-md:flex-col w-full justify-between">
            <h2 className="text-4xl text-black font-semibold">Dashboard</h2>
            <div className="flex flex-rows  mt-4 xl:mt-0 ">
              <Menu as="div" className="relative inline-block text-left ">
                <div>
                  <Menu.Button className="border border-green-500 text-black hover:bg-green-100 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 inline-flex items-center justify-center gap-x-1.5">
                    Create New
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <div className="max-md:hidden"
                style={{
                  borderLeft: "1px solid grey ",
                  height: "42px",
                  margin: "0 20px",
                }}
              ></div>

              <button
                type="file"
                className="flex items-center border border-green-500 text-black hover:bg-green-100 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="my-8  flex flex-rows gap-2 max-md:flex-col">
            <div class="w-full lg:w-1/3">
              <div class="bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col">
                <img
                  src={TempInvoiceImg}
                  alt="Image"
                  class="w-25 h-25 rounded-lg mb-4"
                />
                <h2 class="text-xl font-semibold mb-2">
                  Scan receipts effortlessly, anywhere
                </h2>
                <p class="text-gray-700">
                  Automatic expense tracking with Wave’s mobile app, web upload,
                  and email forwarding.
                </p>
                <a class="mt-3 flex items-center font-semibold text-blue-800">
                  <span>Get started</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>

              <div class="py-3 px-3 mt-5">
                <div class="flex justify-between">
                  <h1 class="text-xl font-semibold mb-2 ">
                    Connected Accounts
                  </h1>

                  <a href="#" class="font-semibold text-blue-500">
                    View Report
                  </a>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-md">
                <div class="flex items-center  bg-gray-200 rounded-t-lg px-4 py-2">
                  <img src={BankLogo} width={50} height={50} />
                  <h2 class="text-lg text-gray-800 font-semibold">TD Bank</h2>
                </div>

                <div class="p-4">
                  <h3 class="text-xl  text-gray-800 mb-2">
                    TD CONVENIENCE CHECKING
                  </h3>
                  <p class="text-gray-700 mb-2">Checking •••• 871</p>
                  <div className="p-1  bg-blue-200 rounded-md items-center">
                    <p className="text-black text-center font-bold">Payments</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 class="text-xl font-semibold mb-4 mt-20">
                  Things You Can Do
                </h2>
                <ul>
                  <li class="mt-2">
                    <a
                      href="#"
                      class="text-lg font-semibold text-blue-500 hover:underline"
                    >
                      Add a customer
                    </a>
                  </li>
                  <li class="mt-2">
                    <a
                      href="#"
                      class="text-lg font-semibold text-blue-500 hover:underline"
                    >
                      Add a vendor
                    </a>
                  </li>
                  <li class="mt-2">
                    <a
                      href="#"
                      class="text-lg font-semibold text-blue-500 hover:underline"
                    >
                      Customize your invoices
                    </a>
                  </li>
                  <li class="mt-2">
                    <a
                      href="#"
                      class="text-lg font-semibold text-blue-500 hover:underline"
                    >
                      Invite a guest collaborator
                    </a>
                  </li>
                  <li class="mt-2">
                    <a
                      href="#"
                      class="text-lg font-semibold text-blue-500 hover:underline"
                    >
                      Professional accounting help
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-full  px-6 max-md:px-2 mt-4 md:mt-0">
              <div className="max-md:w-full">
                <h2 class=" text-xl font-semibold mb-2">Cash Flow</h2>
                <div class="flex justify-between">
                  <p class="text-gray-700">
                    Cash coming in and going out of your business.
                  </p>
                  <a href="#" class="font-semibold text-blue-500">
                    View Report
                  </a>
                </div>
                <div className="w-full max-md:hidden">
                  <BarGraph />
                </div>
                <div className="w-full max-md:show">
                  <BarGraphNoStack />
                </div>
              </div>
              <div class="mt-3">
                <h2 class="text-xl font-semibold mb-2">Profit And Loss</h2>
                <div class="flex justify-between">
                  <p class="text-gray-700">
                    Income and expenses only (includes unpaid invoices and
                    bills).
                  </p>
                  <a href="#" class="font-semibold text-blue-500">
                    View Report
                  </a>
                </div>

                <div className="w-full max-md:hidden">
                  <BarGraph />
                </div>
                <div className="w-full max-md:show">
                  <BarGraphNoStack />
                </div>
              </div>

              <div class="mt-3">
                <h2 class="text-xl font-semibold mb-2">Payable & Owing</h2>
                <div class="flex flex-col md:flex-row ">
                  <div class="relative overflow-x-auto flex-1 mr-4">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Invoices payable to you
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            1-30 days overdue
                          </th>
                          <td class="px-6 py-4 font-semibold text-blue-500">
                            $0.00
                          </td>
                        </tr>{" "}
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            1-30 days overdue
                          </th>
                          <td class="px-6 py-4 font-semibold text-blue-500">
                            $0.00
                          </td>
                        </tr>{" "}
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            1-30 days overdue
                          </th>
                          <td class="px-6 py-4 font-semibold text-blue-500">
                            $0.00
                          </td>
                        </tr>{" "}
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            1-30 days overdue
                          </th>
                          <td class="px-6 py-4 font-semibold text-blue-500">
                            $0.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="relative overflow-x-auto flex-1 mr-4 mt-3 md:mt-0">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Bills you owe
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            1-30 days overdue
                          </th>
                          <td class="px-6 py-4 font-semibold text-blue-500">
                            $0.00
                          </td>
                        </tr>{" "}
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            1-30 days overdue
                          </th>
                          <td class="px-6 py-4 font-semibold text-blue-500">
                            $0.00
                          </td>
                        </tr>{" "}
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            1-30 days overdue
                          </th>
                          <td class="px-6 py-4 font-semibold text-blue-500">
                            $0.00
                          </td>
                        </tr>{" "}
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            1-30 days overdue
                          </th>
                          <td class="px-6 py-4 font-semibold text-blue-500">
                            $0.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="mt-3">
                <h2 class="text-xl font-semibold mb-3">Net Income</h2>
                <NetIncomeTable />
              </div>
              <div class="mt-5">
                <h2 class="text-xl font-semibold mb-2">Expense Breakdown</h2>
                <div class="flex justify-end">
                  <a
                    href="#"
                    class="font-semibold text-black mr-4 hover:text-blue-500 hover:underline"
                  >
                    This Year
                  </a>
                  <a
                    href="#"
                    class="font-semibold text-blue-500 hover:text-black hover:underline"
                  >
                    This Month
                  </a>
                </div>

                <PieGraph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Transactions;
