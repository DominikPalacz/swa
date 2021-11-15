import './App.css';
import MainUserLocation from '../src/components/MainUserLocation';
import Leaflet from './components/Map';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <>
      <div className="columns">

        <div className="column is-4">
          List of all searches
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
              <div class="field is-grouped">
                <p class="control is-expanded">
                  <input class="input" type="text" placeholder="Find a repository"></input>
                </p>
                <p class="control">
                  <button class="button is-info">
                    Search
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

export default App;
