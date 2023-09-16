import './App.css';
import Fireauth from './components/Fireauth';
import Firestore from './components/Firestore';
import Storage from './components/Storage';

function App() {
  return (
    <>
    <Fireauth/>
    {/* <Firestore/> */}
    <Storage/>
    </>
  );
}

export default App;
