import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home

from './pages/home';
function App() {
  return (
    <>
    <Router>
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home/>} />
        </Routes>
    </Router>
    </>
    );
}

export default App;


