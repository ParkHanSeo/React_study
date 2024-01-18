import React, { useRef, useState } from 'react';

import { TPLACES, AVAILABLE_PLACES } from './data';
import { Header } from './component/Header/Header';
import { Modal, ModalMethods } from './component/Modal/Modal';
import { Places } from './component/Places/Places';

function App() {
  const modal = useRef<ModalMethods | null>(null);
  const selectedPlace = useRef<string>();
  const [pickedPlaces, setPickedPlaces] = useState<TPLACES[]>([]);

  const handleStartRemovePlace = (id: string) => {
    if(modal.current) {
      modal.current.open();
      selectedPlace.current = id;
    }
  }

  const handleStopRemovePlace = () => {
    if(modal.current) {
      modal.current.close();      
    }
  }

  const handleSelectPlace = (id: string): void => {
    setPickedPlaces((prevPickedPlaces: TPLACES[]) => {
      const alreadySelected = prevPickedPlaces.some((place) => place.id === id);
      if (alreadySelected) {
        return prevPickedPlaces;
      } else {
        const place = AVAILABLE_PLACES.find((place) => place.id === id);
        return [place, ...prevPickedPlaces].filter(Boolean) as TPLACES[]; 
      }
    });
  };  

  return (
    <>
      <Modal ref={modal}></Modal>

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
