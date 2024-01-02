// App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionList from './components/QuestionList';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import './App.css'; // Import your global styles

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <QuestionList />
        <RightSidebar />
        
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
