import React from 'react';
import ReactDOM from 'react-dom/client';
import ContentProjects from '../components/ContentProjects';
import reportWebVitals from './reportWebVitals';
import Header from '../components/head';
import Footer from '../components/footer';
import '../css/header-footer.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="page-container">
      <Header />
      <div className="content">
        <ContentProjects />
  
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);

reportWebVitals();
