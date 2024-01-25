import React from 'react';

const UserA = ({ userName, role, onEdit, onDelete, onAddNewUser }) => {
  const getInitials = (name) => {
    // Check if name is defined before attempting to split it
    if (name) {
      return name
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase())
        .join('');
    }
    // Return a default value if name is undefined
    return '';
  };

  return (
    <div className="User-dash">
      <div className="user-card">
        <div className="user-details">
          <h2>WELCOME TO YOUR DASHBOARD!</h2>
          <p>MR W {getInitials(userName)}</p>
          <p>Role: {role}</p>
        </div>

        <div >
          <button onClick={onEdit} className="login-btn">EDIT</button>
          <button onClick={onDelete} className="login-btn">DELETE</button>
        </div>

        <div >
          <button onClick={onAddNewUser} className="login-btn">ADD NEW USER</button>
        </div>
      </div>
    </div>
  );
};

export default UserA;

