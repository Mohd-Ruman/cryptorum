import React from 'react'

import { Route, Link, Router, Routes } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import { Navbar, Exchanges, HomePage, Cryptocurrencies, News, CryptoDetails } from './components';

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/'>
                  <HomePage />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Routes>       
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
  )
}

export default App;
