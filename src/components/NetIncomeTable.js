import React, { useState } from "react";

function NetIncomeTable() {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Fiscal Year
            </th>
            <th scope="col" class="px-6 py-3">
              Previous
            </th>
            <th scope="col" class="px-6 py-3">
              Current
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4 font-semibold text-blue-500">Silver</td>
            <td class="px-6 py-4 font-semibold text-blue-500">Laptop</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4 font-semibold text-blue-500">White</td>
            <td class="px-6 py-4 font-semibold text-blue-500">Laptop PC</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4 font-semibold text-blue-500">Black</td>
            <td class="px-6 py-4 font-semibold text-blue-500">Accessories</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NetIncomeTable;