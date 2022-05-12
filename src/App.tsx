import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EstimationManager from './pages/EstimationManager/test';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import 'antd/dist/antd.css';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/estimation-manager" element={<EstimationManager />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
