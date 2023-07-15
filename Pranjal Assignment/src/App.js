  import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Foot';
import Dashboard from './components/Dash';


function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' element = { <Home />}/> 
          <Route path='/home' element = { <Home />}/> 
          <Route path='/dashboard' element = {<Dashboard/> }/>         
          </Routes>
          </BrowserRouter>
          <Footer />
    </div>
  );
}

export default App;
