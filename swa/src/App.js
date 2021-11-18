import { useState } from "react";
import './App.css';
import MainUserLocation from '../src/components/MainUserLocation';
import Leaflet from './components/Map';
import 'bulma/css/bulma.min.css';
import urlRegEx from "../src/utils/urlRegEx"
import regexExp from "../src/utils/checkIP"
import ListOdAllSearches from "./components/ListOfAllSearches";

function App() {
  const [name, setName] = useSesionStorage("name", "");
  // create global state - can use Redux but atm it's overkill
  const [list, setList] = useState([]);

// eslint-disable-next-line
  const [newSearch, setNewSearch] = useState("");

  const onClickHandle = (e) => {
    e.stopPropagation();
    // if (urlRegEx.test(name) || regexExp.test(name)) {
    //   setNewSearch(name)
    //   setList(current => [...current, name])
    //   console.log('correct', newSearch)
    // } else {
    //   console.log('validation error')
    //   alert(`Wrong IP ${urlRegEx.test(name)}  address or URL ${regexExp.test(name)}, please provides a correct one.`) // todo fe. React-Toastify
    // }
    if (regexExp.test(name.toString())) {
      setNewSearch(name.toString())
      setList(current => [...current, name.toString()])
      console.warn('jest prawdą IP', name)
    }

    console.log('drugie wywołanie urlRegEx.test(name) || regexExp.test(name)', urlRegEx.test(name.toString()), regexExp.test(name.toString()))

    alert(`Wrong IP ${urlRegEx.test(name.toString())}  address or URL ${regexExp.test(name.toString())}, please provides a correct one.`) // todo fe. React-Toastify

  }

  return (
    <>
      <div className="columns">

        <div className="column is-4">
          List of all searches
          <p>{list.length}</p>
          <pre>{regexExp.test(name)}</pre>
          <ListOdAllSearches list={list} />
        </div>

        <div className="column">
          Second column

          <div className="columns is-5">
            <div className="column">
              Map with user location
              <Leaflet />
            </div>
            <div className="column">
              Information with user location
              <MainUserLocation />
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input className="input" type="text" placeholder="Find a repository" value={name} onChange={(e) => setName(e.target.value)}></input>

                </p>
                <p className="control">
                  <button className="button is-info" onClick={onClickHandle}>
                    Search:
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              Map with last user location
              <Leaflet />
            </div>
            <div className="column">
              Information about lats search
              <MainUserLocation />
            </div>
          </div>

        </div>

      </div>
      {/* <MapUserLocation /> */}




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
