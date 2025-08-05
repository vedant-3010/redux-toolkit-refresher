import React from 'react';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-center text-2xl font-bold p-4">Pokémon Browser</h1>
      <Home />
    </div>
  );
};

export default App;
