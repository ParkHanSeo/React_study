import './App.css';
import { Header } from './components/Header/Header';
import { CoreConcepts } from './components/CoreConcept/CoreConcepts';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
      </main>
    </>
  );
}

export default App;
