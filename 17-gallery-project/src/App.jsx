import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./components/Gallery.jsx";
import Pagination from "./components/Pagination.jsx";

const App = () => {

  // ------------------store-api-data------------------

  const [userData, setUserData] = useState([]);

  // ------------------pagination-state------------------

  const [index, setIndex] = useState(1);

  // ------------------get-api-data------------------

  const getData = async () => {
    console.log("Data aa gaya");

    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );

    setUserData(response.data);
    console.log(response.data);
  };

  // ------------------useEffect-for-api-call------------------

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">

      {/* ------------------get-data-button------------------ */}

      {/* <button
        onClick={getData}
        className="bg-green-500 active:scale-95 mb-3 px-5 py-2 text-white rounded"
      >
        Get Data
      </button> */}

      {/* ------------------display-current-page------------------ */}

      <h1 className="fixed bg-amber-500 px-2 py-1 rounded text-6xl">
        {index}
      </h1>

      {/* ------------------gallery-component------------------ */}

      <Gallery userData={userData} />

      {/* ------------------pagination-component------------------ */}

      <Pagination
        index={index}
        setIndex={setIndex}
        setUserData={setUserData}
      />

    </div>
  );
};

export default App;