import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch Data
  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=12`
      );

      // Append new images
      setUserdata((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch when page changes
  useEffect(() => {
    fetchData();
  }, [page]);

  // Infinite Scroll
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (bottom && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="p-4 min-h-screen bg-black text-white">
      <div className="flex gap-5 flex-wrap justify-center">
        {userdata.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="w-60 shadow-md mb-10"
          >
            <img
              src={item.download_url}
              alt={item.id}
              className="w-full h-60 object-cover rounded-lg"
              loading="lazy"
            />

            <h2 className="mt-2 font-semibold">{item.author}</h2>
          </div>
        ))}
      </div>

      {loading && (
        <h2 className="text-center text-xl font-semibold pb-5 left-1/2 top-1/2 text-gray-500">
          Loading...
        </h2>
      )}
    </div>
  );
};

export default App;