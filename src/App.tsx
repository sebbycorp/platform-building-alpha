import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Playground from './components/Playground';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Playground />
      <Services />
      <Footer />
    </div>
  );
}

export default App;