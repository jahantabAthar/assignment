"use client";
import React from "react";

const StepTwo: React.FC = () => {
  return (
    <>
      <div className="min-w-47.5 min-h-120 max-w-4xl flex flex-col">
        <div className="font-bold">Company Detail</div>
        <div className="mt-3 text-sm">Please provide the necessary contact information.</div>

          <div className="relative overflow-x-auto shadow-md rounded mt-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" colSpan={3} className="px-6 py-5 bg-slate-200">Representative 1</th>
                      </tr>
                  </thead>
                  <tbody className="bg-slate-100">
                      <tr className="dark:border-gray-700">
                          <td className="px-6 py-4">
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-fit p-2.5  dark:text-white" required />
                          </td>
                          <td className="px-6 py-4">
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-fit p-2.5  dark:text-white" required />
                          </td>
                          <td className="px-6 py-4">
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile number</label>
                              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-fit p-2.5  dark:text-white" required />
                          </td>
                      </tr>
                      <tr className="dark:border-gray-700">
                          <td className="px-6 py-4" colSpan={3}>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Whatsapp number</label>
                              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-fit p-2.5  dark:text-white" required />
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>

      </div>
    </>
  );
};

export default StepTwo;
