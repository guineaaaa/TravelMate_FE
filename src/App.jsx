import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';
import WritePost from './pages/WritePost';
import Header from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/write-post" element={<WritePost />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
