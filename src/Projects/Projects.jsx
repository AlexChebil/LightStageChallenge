import React, { useRef, useState } from "react";
import Card from "./Card/Card";
import "./Projects.scss";
import "./ProjectsMediaQ.scss";

function Projects({ data }) {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();

  return (
    <>
      <div className='inputContainer'>
        <h3 id='allJobs'>All jobs - {data.getState().length} results </h3>
        {/* Displaying the number of results. */}

        <input
          id='searchInput'
          type='search'
          list='projects'
          onChange={() => setSearchValue(inputRef.current.value)}
          ref={inputRef}
          placeholder='🔎 Search Creative projects'
        />

        <datalist id='projects'>
          {data.getState().length > 1 &&
            data
              .getState()
              .map((entry) => (
                <option key={Math.random()} value={entry.company.catchPhrase} />
              ))}
          {/* Mapping over the data and returning an option tag for each entry. */}
        </datalist>

        <hr id='projectsHR' />
      </div>

      <div className='gridContainer'>
        {data.getState().length > 1 &&
          data
            .getState()
            .filter((entry) => {
              /* Filtering the data. */
              if (searchValue && searchValue.length === 0) {
                return entry;
              } else if (
                entry.company.catchPhrase
                  .toUpperCase()
                  .includes(searchValue.toUpperCase())
              ) {
                return entry;
              }
            })
            .map((entry) => <Card key={entry.id} data={entry} />)}
        {/*  Mapping over the data and returning a Card component for each entry. */}
      </div>
    </>
  );
}

export default Projects;
