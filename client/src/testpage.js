import React from 'react';

const MyPage = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '3em',
  };

  const textStyle = {
    color: '#555',
    fontSize: '1.2em',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Welcome to My Page</h1>
      <p style={textStyle}>This is a simple React page example with some inline styles.</p>
      <button style={buttonStyle} onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default MyPage;