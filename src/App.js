import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
