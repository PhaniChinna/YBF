import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HomeCart() {
  const [useData, setData] = useState([]);
  useEffect(() => {
    const getDataList = () => {
      axios
        .get("http://localhost:3000/get")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(`Server Error ${error.message}`);
        });
    };
    getDataList();
  }, []);
  console.log(useData);
  return (
    <div>
      <ul>
        {useData.map((each, index) => {
          return (
            <div key={index}>
              <li>{each.PersonID}</li>
              <li>{each.LastName}</li>
              <li>{each.FirstName}</li>
              <li>{each.City}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
