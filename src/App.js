import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Admin from './pages/Admin';




function App() {
  return (
    <>
    <Router>
        <Sidebar />
        <Routes>
          <Route path="/Admin" element={<Admin/>} />
        </Routes>
    </Router>
    </>
    );
}

export default App;


