import './App.css';
import Address from './components/Address';
// import Footer from './components/Footer';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/address' element={<Address/>} />
      </Routes>
      {/* <Footer/>    */}
    </div>
  );
}

export default App;
