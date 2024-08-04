import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProfileIntro from './pages/ProfileIntro';
import Footer from './pages/footer';
import Navibar from './pages/navbar';

function App() {

  return (
    <>
    <Navibar />
    <BrowserRouter>
      <Routes>
        <Route path="/profileintro" element={<ProfileIntro />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
