// src/UserProfile.js
import React from 'react';

const UserProfile = ({ name, age, email, bio, profilePic }) => {
  return (
    <div style={styles.container}>
      <div style={styles.profilePicContainer}>
        <img src={profilePic} alt="Profile" style={styles.profilePic} />
      </div>
      <div style={styles.details}>
        <h2>{name}</h2>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Bio:</strong> {bio}</p>
      </div>
    </div>
  );
};

// Styling for the user profile with background color for the card
const styles = {
  container: {
    display: 'flex',
    alignItems: 'Center',
    padding: '20px',
    backgroundColor: '#fff', // White background color for the profile card
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: 'auto',
  },
  profilePicContainer: {
    marginRight: '20px',
  },
  profilePic: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default UserProfile;
