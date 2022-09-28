import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import LeagueTable from './components/LeagueTable';
import { Route, Routes } from 'react-router-dom';
import Results from './components/Results';
import TitlePage from './components/TitlePage';
import Clubs from './components/Clubs';

function App() {

    return (
        <div className='App'>
            <NavBar />
            <Routes>
                <Route path='' element={<TitlePage />} />
                <Route path="fixtures" element={<Results />} />
                <Route path="table" element={<LeagueTable />} />
                <Route path="clubs" element={<Clubs />} />
            </Routes>
        </div>
  );
}

export default App;


