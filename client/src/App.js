import React, { useState } from 'react';
import "./index.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

function App() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  return (
    <div className="app-root">
      <Header />
      <main className='container'>
        <Card title="welcome">
          <SearchBar query={query} onQuery={setQuery} region={region} onRegion={setRegion} />
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default App;
