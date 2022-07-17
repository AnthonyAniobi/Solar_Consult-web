import React from 'react';
import { ResponsiveAppbar } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppbar />
        <Routes>
          <Route path=''>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
