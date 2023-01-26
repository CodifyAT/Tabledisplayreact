import React from "react";
import data from './data.json'

function Displaytable() {
    return (
      <div className="App">
        <table className="table">
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Latitude</th>
              <th scope='col'>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((place) => {
                let id=place.id;
                let city=place.name;
                let lon=place.lon;
                let lat=place.lati;
                return(
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{city}</td>
                    <td>{lat}</td>
                    <td>{lon}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Displaytable;