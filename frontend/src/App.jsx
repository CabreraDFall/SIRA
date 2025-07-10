import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/client/home/Home'

import './App.css'
import OfflineTemplate from './page/templates/offline/OfflineTemplate'

function App() {


  return (
    <BrowserRouter>
      <OfflineTemplate>
        <Routes>
          <Route path="/" element={<Home />

          } />
          <Route path="/dashboard" element={
            <div className="App">
              <h1>online Mode</h1>
              <p>You are currently offline. Please check your internet connection.</p>
            </div>

          } />
        </Routes>
      </OfflineTemplate>
    </BrowserRouter>
  )
}

export default App
