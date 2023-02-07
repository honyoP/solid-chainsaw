import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'App.css'
import Dashboard from 'Dashboard';
import Login from 'authentication/Login'
import Root from 'Root';
import CharacterSheet from 'CharacterSheet';

function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('pocketbase_auth')!));

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route
            path='/'
            element={<Root />}
          />
          <Route
            path='/Dashboard' 
            element={<Dashboard />}
          />
          <Route
            path='/Character'
            element={<CharacterSheet characterId={token.model.character} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
