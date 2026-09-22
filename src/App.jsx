
import './App.css'
import Home from './pages/Home';
import PuzzleMode from './pages/PuzzleMode';
import ManualMode from './pages/ManualMode';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  

  return (

    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/puzzle'
          element={<PuzzleMode/>}
        />
        <Route
          path='/manual'
          element={<ManualMode/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
