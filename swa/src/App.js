import { useState, useEffect } from "react";
import axios from 'axios';
import MainUserLocation from '../src/components/MainUserLocation';
import ListOdAllSearches from "./components/ListOfAllSearches";
import Leaflet from './components/Map';
import urlRegEx from "../src/utils/urlRegEx"
import regexExp from "../src/utils/checkIP"
import './App.css';
import 'bulma/css/bulma.min.css';

function App() {
  // TODO create global state - can use Redux but atm it's overkill
  const [name, setName] = useSesionStorage("name", "");
  const [list, setList] = useState([]);
  const [data, setCurrentData] = useState({ });
  
  useEffect(() => {
    const fetchData = async () => {
      const value = name ? name : 'check';
      const result = await axios(
        `http://api.ipstack.com/${value}?access_key=924fecef7c399f4f8398bc01103377ae`, // TODO add process.env and create separate api Call Services.js
      );
      setCurrentData(result.data);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);
  
  const onClickHandle = (e) => {
    e.stopPropagation();
    if (urlRegEx.test(name) || regexExp.test(name)) {
      setList(current => [...current, data])
    } else {
      alert(`Wrong IP address or URL , please provides a correct one.`) // TODO add fe. React-Toastify
    }
  }
  
  // TODO divide huge component to small dumb and smart components
  // TODO implement forms with formik.js
  return (
    <>
      <div className="columns main">
        <div className="column is-4">
          List of all searches
          <ListOdAllSearches list={list} />
        </div>

        <div className="column">

          <div className="columns is-5">
            <div className="column">
              Map with user location
              <Leaflet data={data}/>
            </div>
            <div className="column">
              Information with user location
              <MainUserLocation data={data} />
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input className="input" type="text" placeholder="Find IP or URL" value={name} onChange={(e) => setName(e.target.value)}></input>
                </p>
                <p className="control">
                  <button className="button is-info" onClick={onClickHandle}>
                    Search
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              Map with last user location
              <Leaflet data={list[list.length - 1]}/>
            </div>
            <div className="column">
              Information about lats search
              <MainUserLocation data={list[list.length - 1]} />
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

// Hook
function useSesionStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.sessionStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to sessionStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default App;
