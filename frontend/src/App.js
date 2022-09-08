import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home, Register, Login } from './pages';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register">
          <Route index element={<Register />} />
        </Route>
        <Route path="login">
          <Route index element={<Login />} />
        </Route>
      </Route>
    </Routes>
  );
}
