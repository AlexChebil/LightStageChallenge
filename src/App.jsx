import React, { useEffect, useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Projects from "./Projects/Projects";

function App() {
  const request = "https://jsonplaceholder.typicode.com/users";
  const [data, setdata] = useState("");

  /*  GetData() is an async function that fetches data from the API, 
    then sets the data to the state.
    */
  async function getDataFromAPI() {
    const rawData = await fetch(request);
    const response = await rawData.json();
    setdata(response);
  }

  useEffect(() => {
    getDataFromAPI();
  }, []);

  // REDUX

  function getData(state = [], action) {
    switch (action.type) {
      case "GET_FETCHED_DATA":
        return state.concat(data);
      default:
        return state;
    }
    /*
    If the action type is GET_FETCHED_DATA, return the state concatenated with 
    the data, otherwise return the state.
   */
  }

  const store = createStore(getData, []);
  /* Creating a store with the getData function and an empty array as 
  the initial state.*/

  store.dispatch({
    type: "GET_FETCHED_DATA",
    //dispatching an action with the type GET_FETCHED_DATA.
  });

  return (
    <>
      <Provider store={store}>
        <Header />
        <Projects data={store} />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
