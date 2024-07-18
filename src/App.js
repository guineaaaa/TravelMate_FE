import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProfileStep1 from './pages/ProfileStep1';
import ProfileStep2 from './pages/ProfileStep2';
import ProfileStep3 from './pages/ProfileStep3';
import ProfileStep4 from './pages/ProfileStep4';
import ProfileStep5 from './pages/ProfileStep5';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();
  const hiddenNavbarPaths = ["/login", "/profilestep1", "/profilestep2", "/profilestep3", "/profilestep4", "/profilestep5"];
  const isNavbarHidden = hiddenNavbarPaths.includes(location.pathname.toLowerCase());

  return (
    <div>
      {!isNavbarHidden && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profilestep1" element={<ProfileStep1 />} />
        <Route path="/profilestep2" element={<ProfileStep2 />} />
        <Route path="/profilestep3" element={<ProfileStep3 />} />
        <Route path="/profilestep4" element={<ProfileStep4 />} />
        <Route path="/profilestep5" element={<ProfileStep5/>}/>
      </Routes>
    </div>
  );
}

export default App;
