// src/App.js
import React from 'react';
import UserProfile from './UserProfile';

function App() {
  // Sample user data to be passed as props
  const user = {
    name: 'Vijay',
    age: 50,
    email: 'vijay@gmail.com',
    bio: 'Indian Biggest Actor',
    profilePic: 'https://th.bing.com/th/id/OIP.Llrt05mjBVuzWPS0ngBxfAHaEc?w=314&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7', // Replace with actual image URL
  };

  return (
    <div style={appStyles.container}>
      <h1 style={appStyles.heading}>User Profile Page</h1>
      {/* Passing user data as props to the UserProfile component */}
      <UserProfile
        name={user.name}
        age={user.age}
        email={user.email}
        bio={user.bio}
        profilePic={user.profilePic}
      />
    </div>
  );
}

// Basic styles for the app container, including background color
const appStyles = {
  container: {
    padding: '50px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#87CEEB', // Sky blue background color
    minHeight: '10vh', // Ensure the color covers the full viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    color: '#fff', // White text to contrast with the background color
  },
};

export default App;
