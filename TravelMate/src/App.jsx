import React from 'react';
import ChatList from '../pages/chatList'
import ChatWindow from '../pages/chatWindow';
import Footer from '../pages/footer';
import Navibar from '../pages/navbar';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid p-0">
      <Navibar />
      <div className="row no-gutters w-100">
        <div className="col-3 border-end">
          <ChatList />
        </div>
        <div className="col-9">
          <ChatWindow />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;