import { useState } from 'react'

import './App.css'
import OfflineTemplate from './page/templates/offline/OfflineTemplate'

function App() {


  return (
    <OfflineTemplate>
      <div className="App">
        <h1>Offline Mode</h1>
        <p>You are currently offline. Please check your internet connection.</p>
      </div>
    </OfflineTemplate>
  )
}

export default App
