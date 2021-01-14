import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import CreateTest from './pages/CreateTest';
import Home from './pages/Home';

const Router = () => {
  return (
    <div>
      <h1>Test Router</h1>
      <CreateTest />
      <Home />
    </div>
  );
};

export default Router;
