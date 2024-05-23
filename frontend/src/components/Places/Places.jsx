import React from 'react';
import CreatePlace from '../CreatePlace/CreatePlace'

function Places({ places, handleSelectPlace, handleCreatePlace }) {
  return (
    <div>
      <h2>Places</h2>
      <ul>
        {places.map((place) => (
          <li key={place._id} onClick={() => handleSelectPlace(place)}>
            {place.name} - {place.type}
          </li>
        ))}
      </ul>
      <CreatePlace handleCreatePlace={handleCreatePlace}/>
    </div>
  );
}

export default Places;
