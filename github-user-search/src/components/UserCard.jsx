// UserCard.jsx
import React from 'react';

const UserCard = ({ user }) => {
  if (!user) return null;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', maxWidth: '350px' }}>
      <img src={user.avatar_url} alt={user.login} style={{ width: '80px', borderRadius: '50%' }} />
      <h2>{user.name || user.login}</h2>
      <p>@{user.login}</p>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  );
};

export default UserCard;
