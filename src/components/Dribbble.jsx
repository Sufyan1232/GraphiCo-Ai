import React, { useState } from 'react';
import "./all.css"

const SearchApp = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  let Access_key = "H3s0Ay26iI-x_wZp9C2ly-Y91pIs_pENS1eN1YbKN2g";

  const inputHandle = (event) => {
    setValue(event.target.value);
  };

  const searchImg = async () => {
    if (value.trim() === "") return; // Prevent empty search

    const get = await fetch(
      `https://api.unsplash.com/search/photos?query=${value}&per_page=28&page=1&client_id=${Access_key}`
    );
    const jsonData = await get.json();
    setResult(jsonData.results);
    setValue(""); // Clear the input after search
  };

  return (
    <>
      <div className="container">
        <h1 className='inspi'>Search Your Inspiration</h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="Search Images"
            value={value}
            onChange={inputHandle}
          />
          <button onClick={searchImg}>Search</button>
        </div>
        <div className="images">
          {result.map((curVal, index) => (
            <div key={index} className="image-item">
              <img src={curVal.urls.small} alt={curVal.alt_description} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchApp;
