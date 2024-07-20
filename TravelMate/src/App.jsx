import React from 'react';
import ChatList from '../pages/chatList'
import ChatWindow from '../pages/chatWindow';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-3 border-end">
          <ChatList />
        </div>
        <div className="col-9">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default App;