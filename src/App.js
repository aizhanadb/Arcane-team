import './App.css';
import Address from './components/Address/Address';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';

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
