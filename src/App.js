import './App.css';
import { useState } from 'react';
import AppMode from './AppMode'
import ChatContainer from './ChatContainer'
import DiaryContainer from './DiaryContainer'

function App() {
  const [appMode, setAppMode] = useState("begin")

  const handleClick = () => {
      setAppMode("begin")
  }

  return (
    <div className="app wrapper">
      <header>
        <h1>Fireplace Finances</h1>
      </header>
      <main>
      {
      appMode === "begin" 
        ? <AppMode chooseAppMode={setAppMode}/>
        : appMode === "diary"
          ? <DiaryContainer />
          : <ChatContainer />
      }
      </main>
      <footer>
        <button onClick={handleClick}>Restart</button>
      </footer>
    </div>
  );
}

export default App;
