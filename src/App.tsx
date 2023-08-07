import React from 'react';
import { useState } from 'react';
import { Home, Skills, Contact, About } from './pages';
import { PageSelector } from './components';
import './App.css';

function App() {
  return (
    <>
    <header>
        <PageSelector>
        </PageSelector>
    </header>
    <Home>
    </Home>
    </>
  );
}

export default App;
