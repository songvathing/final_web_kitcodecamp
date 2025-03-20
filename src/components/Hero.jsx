import React from "react";
import { useState } from "react";
import axios from "axios";

function Hero() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

 const handleFetchData = async () => {
   setLoading(true);
   try {
     const response = await axios.get(
       "https://jsonplaceholder.typicode.com/posts/1"
     );
     setData(response.data);
   } catch (error) {
     console.error("Error fetching data:", error);
   }
   setLoading(false);
 };

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold">Welcome to Our Website</h1>
        <p className="text-lg mt-4">This is my first time with TailwindCSS.</p>
        <button
          onClick={handleFetchData}
          className="bg-blue-500 text-white px-6 py-2 rounded-full mt-8 inline-block hover:bg-blue-600"
        >
          Get Started
        </button>

        {/* Show loading text when fetching */}
        {loading && <p className="mt-4">Loading...</p>}

        {/* Show API Data */}
        {data && (
          <div className="mt-6 bg-white text-black p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{data.title}</h3>
            <p className="mt-2">{data.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
