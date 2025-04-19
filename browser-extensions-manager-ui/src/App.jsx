import React from "react";
import { useState, useEffect } from "react";
import ThemeSwitch from "./components/ThemeSwitch";
import FilterButton from "./components/FilterButton";
import Extension from "./components/Extension";
import axios from 'axios';

const App = () => {
  const [extensionData, setExtensionData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get("/data.json");
        setExtensionData(response.data);
      }
      catch (error) {
        console.error("Error fetching extension data")
      }
    }

    fetchData();
  }, [])

  console.log(extensionData)

  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-4 bg-custom-skyblue">
      <ThemeSwitch></ThemeSwitch>
      <h1 className="font-NotoSans text-dark-blue font-[700] text-3xl mt-8 mb-4">
        Extensions List
      </h1>
      <div className="FilterButtonsList flex w-xs justify-around mb-8">
        <FilterButton filterName={"All"}></FilterButton>
        <FilterButton filterName={"Active"}></FilterButton>
        <FilterButton filterName={"Inactive"}></FilterButton>
      </div>

      {extensionData && extensionData.map(extension => (
        <Extension key={extension.id} {...extension}/>
      ))}
    </div>
  );
};

export default App;
