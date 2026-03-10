import React, { useEffect, useState } from "react";
import JobCard from "../JobRelated/JobCard";
import axios from "axios";

const Categories = () => {
  const [jobs,setJobs] = useState([]);
  useEffect(()=>{
       const getData = async()=>{
       const {data} = await axios(`${import.meta.env.VITE_API_KEY}/jobs`);
       setJobs(data);
       }
       getData();
  },[])


  
  return (
    <div>
      <div className="text-center my-7">
        <h3 className="text-3xl font-bold">Browser By Category</h3>
        <p className="text-lg">
          Build fast, responsive, and scalable websites that deliver exceptional
          user experiences. Transform your ideas into visually stunning designs
          that capture attention and tell your story. From logos and brand
          identity to social media graphics and print materials, every pixel is
          crafted with precision.
        </p>
      </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift flex items-center justify-center">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-lg font-semibold"
            aria-label="Web Development"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
             {
              jobs.filter(j=>j.category === "Web Development").map(job=><JobCard key={job._id} job={job}></JobCard>)
             }
           </div>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-lg font-semibold"
            aria-label="Digital Marketing"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
             {
              jobs.filter(j=>j.category === "Digital Marketing").map(job=><JobCard key={job._id} job={job}></JobCard>)
             }
           </div>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-lg font-semibold"
            aria-label="Graphics Design"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
             {
              jobs.filter(j=>j.category === "Graphics Design").map(job=><JobCard key={job._id} job={job}></JobCard>)
             }
           </div>
          </div>
        </div>
    </div>
  );
};

export default Categories;
