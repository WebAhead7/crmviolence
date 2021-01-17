import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom'
import CreateTest from './pages/CreateTest'
import Home from './pages/Home'
import DevComponent from './components/DevComponent'
import FooterPage from './components/FooterPage'
import Header from './components/Header'
import './index.css'
import { Container } from 'react-bootstrap'
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <h1> Test Router</h1>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/create'>
              <CreateTest />
            </Route>
            <Route exact path='/dev'>
              <DevComponent />
            </Route>
          </Switch>
        </Container>
      </main>
      <FooterPage />
    </BrowserRouter>
  )
}

export default Router
