import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navibar from '../pages/navbar';
import FindIdPwNavbar from '../components/FindIdPwNav';
import MainPage from '../pages/MainPage';
import Signup from '../pages/Signup';
import SignupModal from '../components/SignupModal';
import Login from '../pages/Login';
import ProfileIntro from '../pages/ProfileIntro';
import ProfileStep1 from '../pages/ProfileStep1';
import ProfileStep2 from '../pages/ProfileStep2';
import ProfileStep3 from '../pages/ProfileStep3';
import ProfileStep4 from '../pages/ProfileStep4';
import ProfileStep5 from '../pages/ProfileStep5';
import FindId from '../pages/FindId';
import FindIdNot from '../pages/FindIdNot';
import FindIdExist from '../pages/FindIdExist';
import FindPw from '../pages/FindPw';
import FindPwRe from '../pages/FindPwRe';
import Searching from '../pages/Searching';
import Accompany from '../pages/Accompany';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSignupModalClose = () => setShowSignupModal(false);
  const handleSignupModalOpen = () => setShowSignupModal(true);

  const navbarConfig = {
    hiddenNavbarPaths: ["/","/login", "profileintro", "/profilestep1", "/profilestep2", "/profilestep3", "/profilestep4", "/profilestep5", "/signup"],
    findIdPwPaths: ["/findid", "/findidnot", "/findpw", "/findpwre", "/findidexist"]
  };

  const isNavbarHidden = navbarConfig.hiddenNavbarPaths.includes(path);
  const isFindIdPwPage = navbarConfig.findIdPwPaths.includes(path);

  return (
    <div>
      {!isNavbarHidden && !isFindIdPwPage && <Navibar />}
      {isFindIdPwPage && <FindIdPwNavbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup openModal={handleSignupModalOpen} />} />
        
        <Route path="/searching" element={<Searching />} />
        <Route path="/profilestep1" element={<ProfileStep1 />} />
        <Route path="/profilestep2" element={<ProfileStep2 />} />
        <Route path="/profilestep3" element={<ProfileStep3 />} />
        <Route path="/profilestep4" element={<ProfileStep4 />} />
        <Route path="/profilestep5" element={<ProfileStep5 />} />
        <Route path="/profileintro" element={<ProfileIntro />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findidnot" element={<FindIdNot />} />
        <Route path="/findidexist" element={<FindIdExist />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/findpwre" element={<FindPwRe />} />
        <Route path="/accompany" element={<Accompany />} />
      </Routes>
      <SignupModal show={showSignupModal} handleClose={handleSignupModalClose} />
    </div>
  );
};

export default App;