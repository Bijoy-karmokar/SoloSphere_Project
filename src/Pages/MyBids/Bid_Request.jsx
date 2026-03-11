import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { MdDoNotDisturbAlt } from 'react-icons/md';
import { Check } from 'lucide-react';


const Bid_Request = () => {
  const {user} = useAuth();
    const [bids,setBids] = useState([]);

    useEffect(()=>{
      const getData =async()=>{
           const res = await axios(`${import.meta.env.VITE_API_KEY}/bid-request/${user?.email}`);
          //  console.log(res);
          setBids(res.data);
           
      }
      getData();
    },[user])
  //  console.log(bids);
   
    return (
         <section className="container px-4 mx-auto">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Bid request
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          {bids.length} bids
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
                        <span>#</span>
                        <span>Title</span>
                      </div>
                    </th>

                    <th className="px-12 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                     Email
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Deadline
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Price
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Category
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                     Action
                    </th>

                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                 {
                  bids.map((bid,index)=>
                     <tr key={bid._id}>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="inline-flex items-center gap-x-3">
                        {index + 1}

                        <div className="flex items-center gap-x-2">
                       {
                        bid.title
                       }
                        </div>
                      </div>
                    </td>

                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                       {
                        bid.buyer_email
                       }
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                     {new Date(bid.deadline).toLocaleDateString()}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      ${bid.price}
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      {
                        bid.category
                      }
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex gap-x-4">
                       
                        <button className={`${bid.status === "pending" && "badge badge-outline badge-error"} ${bid.status === "in-progress" && "badge badge-outline badge-success"} ${bid.status === "reject" && "badge badge-outline badge-info"}`}>
                          {bid.status}
                        </button>
                      
                       
                      </div>
                    </td>
                    <td className='flex items-center space-x-2 mt-4'>
                      <Check />
                      <MdDoNotDisturbAlt size={25}></MdDoNotDisturbAlt>
                    </td>
                  </tr>
                  )
                 }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Bid_Request;