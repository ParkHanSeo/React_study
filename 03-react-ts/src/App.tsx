import React, { useRef, useState } from 'react';

import { TPLACES, AVAILABLE_PLACES } from './data';
import { Header } from './component/Header/Header';
import { Modal } from './component/Modal/Modal';
import { Places } from './component/Places/Places';

function App() {
  const modal = useRef(null);
  const selectedPlace = useRef<string>();
  const [pickedPlaces, setPickedPlaces] = useState<TPLACES[]>([]);

  const handleStartRemovePlace = (id: string) => {
    selectedPlace.current = id;
  }

  const handleSelectPlace = (id: string) => {
    setPickedPlaces((prevPickedPlaces) => {
      const alreadySelected = prevPickedPlaces.some((place) => place.id === id);
      if (alreadySelected) {
        return prevPickedPlaces;
      } else {
        return prevPickedPlaces;
      }
    });
  }

  return (
    <>
      <Header />
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
