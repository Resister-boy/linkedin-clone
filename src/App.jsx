import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import FeedArea from './components/FeedArea';

import './App.scss';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__body">
        <SideBar 
          avatar="" 
          title="user"
          email="jaehun4122@gmail.com" />
        <FeedArea />
      </div>
      {/* App Body */}
        {/* Slidebar */}
        {/* Feed */}
        {/* Widgets */}
      
      {/* Footer */}
    </div>
  );
}

export default App;
