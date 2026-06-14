import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [Index, setIndex] = useState(1);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(
        `https://picsum.photos/v2/list?page=${Index}&limit=15`,
      );

      let data = await response.json();
      setUsers(data);
    };

    getData();
  }, [Index]);

  return (
    <div className="bg-black min-h-screen text-white p-4">
      <h2 className="fixed top-2 left-2 bg-amber-600 px-3 py-1 rounded">
        Page: {Index}
      </h2>

      {/* GRID */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {users.map((user) => (
          <div key={user.id} className="border p-3 rounded bg-gray-800 w-60">
            <h1 className="text-sm mb-2">
              {user.author}, {user.id}
            </h1>

            <img
              className="h-40 w-40 rounded-full object-cover mx-auto"
              src={user.download_url}
              alt={user.author}
            />
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 justify-center p-5">
        <button
          className="bg-amber-400 px-4 py-2 rounded text-black font-bold active:scale-95"
          onClick={() => setIndex((prev) => Math.max(prev - 1, 1))}
        >
          Prev
        </button>

        <button
          className="bg-amber-400 px-4 py-2 rounded text-black font-bold active:scale-95"
          onClick={() => setIndex((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
