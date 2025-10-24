import React from 'react';
import "./index.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className="app-root">
      <Header />
      <main className='container'>
        <Card title="welcome">
          <p>Building a country list, search, and detail view</p>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default App;
