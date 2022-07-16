import React, { useRef, useState, useEffect } from "react";
import Card from "./Card/Card";
import "./Projects.scss";

function Projects() {
  const reqest = "https://jsonplaceholder.typicode.com/users";
  const [data, setdata] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();

  async function getData() {
    const rawData = await fetch(reqest);
    const response = await rawData.json();
    setdata(response);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='inputContainer'>
        <h3 id='allJobs'>All jobs - {data.length} results </h3>
        <input
          id='searchInput'
          type='search'
          list='browsers'
          onChange={() => setSearchValue(inputRef.current.value)}
          ref={inputRef}
          placeholder='🔎 Search Creative projects'
        />

        <datalist id='browsers'>
          {data &&
            data.map((entry) => (
              <option key={Math.random()} value={entry.company.catchPhrase} />
            ))}
        </datalist>

        <hr />
      </div>

      <div className='gridContainer'>
        {data &&
          data
            .filter((entry) => {
              if (searchValue && searchValue.length === 0) {
                return entry;
              } else if (
                entry.company.catchPhrase
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              ) {
                return entry;
              }
            })
            .map((entry) => <Card key={entry.id} data={entry} />)}
      </div>
    </>
  );
}

export default Projects;
