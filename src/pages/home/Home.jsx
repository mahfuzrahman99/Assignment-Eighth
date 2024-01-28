// import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
// import { useEffect, useState } from "react";

const Home = () => {
  const [saveValue, setSaveValue] = useState("");

  const handleSearch = () => {
    const searchValue = document.getElementById("search-value");
    const valueSearch = searchValue.value;
    setSaveValue(valueSearch);
    searchValue.value = "";
  };

  return (
    <div>
      <div className="relative">
        <div
          style={{ backgroundImage: 'url("/Resources/OIP.jpg")' }}
          className="absolute top-0 -z-10 inset-0 bg-cover bg-black opacity-80"
        ></div>
        <Navbar></Navbar>
        <Banner handleSearch={handleSearch}></Banner>
      </div>

      <div className="md:mx-auto mx-6">
        <Cards saveValue={saveValue}></Cards>
      </div>
    </div>
  );
};

export default Home;
