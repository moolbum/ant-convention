import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EstimationManager from './pages/EstimationManager';
import Detail from './pages/Detail';
import 'antd/dist/antd.css';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/estimation-manager" element={<EstimationManager />} />
        <Route path="/detail/:user_id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
