import React from 'react';

const ChatList = () => {
  return (
    <div>
      <div className="p-3 border-bottom">
        <input type="text" className="form-control" placeholder="Search for..." />
      </div>
      <div className="list-group list-group-flush">
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex align-items-center">
            <img src="user1.jpg" className="rounded-circle me-3" alt="User" width="40" height="40" />
            <div>
              <div>말랑콩떡</div>
              <small className="text-muted">언제 보실래요?? | 오후 8:39</small>
            </div>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex align-items-center">
            <img src="user2.jpg" className="rounded-circle me-3" alt="User" width="40" height="40" />
            <div>
              <div>나는야</div>
              <small className="text-muted">언제 보실래요?? | 오후 8:39</small>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ChatList;