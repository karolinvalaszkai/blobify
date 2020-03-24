import React, { Component } from 'react';
import { render } from 'react-dom';

const MainMenuButton = () =>{
  return (
    <React.Fragment>
      <div style={addPlStyle}>
        Main Menu
      </div>
    </React.Fragment>
  );
}

const addPlStyle = {
  borderStyle: "outset",
  backgroundColor : "green",
  borderRadius: "2px",
  margin: "20px",
  padding: "50px",
  display: "flex",
};

export default MainMenuButton;
