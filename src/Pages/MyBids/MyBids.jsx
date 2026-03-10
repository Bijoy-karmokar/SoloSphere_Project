import React from "react";
import { useLoaderData } from "react-router";

const MyBids = () => {
    const bidData = useLoaderData();
    const bids = bidData.data;
    console.table(bids);
    
  return (
    <section className="container px-4 mx-auto">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Team members
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          100 users
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-x-3">
                        <input type="checkbox" className="rounded" />
                        <span>Name</span>
                      </div>
                    </th>

                    <th className="px-12 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Role
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Email
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Teams
                    </th>

                    <th className="px-4 py-3.5" />
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="inline-flex items-center gap-x-3">
                        <input type="checkbox" className="rounded" />

                        <div className="flex items-center gap-x-2">
                          <img
                            className="object-cover w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                            alt=""
                          />
                          <div>
                            <h2 className="font-medium text-gray-800 dark:text-white">
                              Arthur Melo
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              @authurmelo
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs text-green-600 bg-green-100 rounded-full">
                        Active
                      </span>
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      Design Director
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      authurmelo@example.com
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex gap-x-2">
                        <span className="px-3 py-1 text-xs text-indigo-500 bg-indigo-100 rounded-full">
                          Design
                        </span>
                        <span className="px-3 py-1 text-xs text-blue-500 bg-blue-100 rounded-full">
                          Product
                        </span>
                        <span className="px-3 py-1 text-xs text-pink-500 bg-pink-100 rounded-full">
                          Marketing
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex gap-x-4">
                        <button className="text-red-500 hover:text-red-700">
                          Delete
                        </button>
                        <button className="text-yellow-500 hover:text-yellow-600">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBids;