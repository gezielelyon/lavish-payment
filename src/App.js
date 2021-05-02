import {BrowserRouter} from 'react-router-dom';

import {Navbar} from './components/Navbar/index';

import './App.css';
import { Routes } from './Routes/index.routes';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
