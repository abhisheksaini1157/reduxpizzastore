// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import AllPizzas from './pages/AllPizzas';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
   <>
  <Router>
    <Navbar/>
    <ToastContainer
    position="top-center"
    autoClose={1000}
    hideProgressBar={true}
    newestOnTop={true}
    closeOnClick
    />
    <Routes>
    <Route path="/" element={<AllPizzas/>} />
    <Route path="/cart" element={<Cart/>} />
    </Routes>
    </Router>
   </>
  );
}

export default App;
