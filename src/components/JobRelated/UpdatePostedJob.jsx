import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdatePostedJob = () => {
    const data = useLoaderData();
    const job = data.data;
    const navigate = useNavigate();
    const categories = [
    "Web Development",
    "Graphics Design",
    "Digital Marketing",
    "Content Writing",
    "Video Editing",
  ];
    const [startDate, setStartDate] = useState(new Date(job.deadline));
    const {user} = useAuth();
    const handleUpdateJob =async(e)=>{
        e.preventDefault();
        const form= e.target;
        const formData = new FormData(form);
        const updatedData = Object.fromEntries(formData.entries());
        updatedData.deadline = startDate;
        updatedData.email = user?.email;
        await axios.put(`${import.meta.env.VITE_API_KEY}/updateJob/${job._id}`,updatedData)
        .then(data=>{
            if(data.data.modifiedCount){
                toast.success("Job Updated Successfully.")
            }
            navigate('/my-posted-jobs')
        }).catch(error=>{
            if(error){
                toast.error("Something went wrong!")
            }
        })
    }
    return (
          <div className="min-h-screen bg-gray-100 py-10">
              <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
                <h2 className="text-3xl font-bold mb-6 text-center">Update Job</h2>
        
                <form onSubmit={handleUpdateJob} className="space-y-5">
                  {/* Employer Email */}
                  <div>
                    <label className="block mb-1 font-medium">Employer Email</label>
                    <input
                      type="email"
                      value={user?.email || ""}
                      readOnly
                      className="w-full border px-4 py-2 rounded bg-gray-100"
                    />
                  </div>
        
                  {/* Job Title */}
                  <div>
                    <label className="block mb-1 font-medium">Job Title</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter job title"
                      required
                      defaultValue={job.title}
                      className="w-full border px-4 py-2 rounded"
                    />
                  </div>
        
                  {/* Deadline */}
                  <div>
                    <label className="block mb-1 font-medium">Deadline</label>
                    <DatePicker className="w-full border px-4 py-2 rounded" selected={startDate} onChange={(date) => setStartDate(date)} />
                  </div>
        
                  {/* Description */}
                  <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                      name="description"
                      rows="4"
                      placeholder="Write job details..."
                      required
                    defaultValue={job.description}
                      className="w-full border px-4 py-2 rounded"
                    ></textarea>
                  </div>
        
                  {/* Category Dropdown */}
                  <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select
                      name="category"
                      defaultValue={job.category}
                      className="w-full border px-4 py-2 rounded"
                    >
                
                      {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
        
                  {/* Price Range */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 font-medium">Minimum Price ($)</label>
                      <input
                        type="number"
                        name="minPrice"
                        placeholder="Min price"
                        required
                         defaultValue={job.minPrice}
                        className="w-full border px-4 py-2 rounded"
                      />
                    </div>
        
                    <div>
                      <label className="block mb-1 font-medium">Maximum Price ($)</label>
                      <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max price"
                        required
                       defaultValue={job.maxPrice}
                        className="w-full border px-4 py-2 rounded"
                      />
                    </div>
                  </div>
        
                  {/* Submit Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold">
                    Update Job
                  </button>
                </form>
              </div>
            </div>
    );
};

export default UpdatePostedJob;