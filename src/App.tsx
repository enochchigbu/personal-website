import React from 'react';
import { useState, Component } from 'react';
import { Home, Skills, Contact, About } from './pages';
import { PageNavigator } from './components';
import './App.css';

function App() {
  return (
    <>
    <header>
        <PageNavigator/>
    </header>
    </>
  );
}

export default App;
