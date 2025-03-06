import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes instead of Router
import Home from './Pages/Home';
// import './App.css';
import Success from './Pages/Success';
import Error from './Pages/Error';
import Protector from './Component/Protector';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Protector element={<Success />}/>} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
