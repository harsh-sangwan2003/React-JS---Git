import './App.css';
import { useState } from 'react';
import context from './components/Context'
import NavBar from './components/NavBar';
import Parent1 from './components/Parent1';
import Parent2 from './components/Parent2';

function App() {

  const [theme, setTheme] = useState(false);

  return (
    <context.Provider value={theme}>
      <button onClick={() => setTheme(!theme)}>Change theme</button>
      <NavBar />
      <Parent1 />
      <Parent2 />
    </context.Provider>
  );
}

export default App;
