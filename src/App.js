import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './useToken';



function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/preferences" exact element={<Preferences />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
