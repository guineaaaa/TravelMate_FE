import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProfileIntro from './pages/ProfileIntro';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/profileintro" element={<ProfileIntro />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
