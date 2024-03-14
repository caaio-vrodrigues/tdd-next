'use client';

import axios from "axios";
import { useState } from "react";

export const MockTest = () => {
  const [apiData, setApiData] = useState<string[]>([]);

  const getDataOnClick = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    data.forEach((userData: {title: string}) => setApiData((val: string[]) => [...val, userData.title]));
  };

  return (
    <div className={`flex flex-col justify-center items-center h-screen`}>
      <h1>Mock Test</h1>
      <br />
      <button onClick={() => getDataOnClick()}
      className={`border border-white p-3`}>
        Get Data
      </button>
      <br />
      {apiData.length !== 0 && 
        <div className={`border border-white p-3`}>
          <h1 className={`text-center text-red-300`}>Users Titles</h1>
          <br />
          {apiData.map((tile, i) => (
          <p key={i}>{tile}</p>))}
        </div>}
    </div>
  );
};