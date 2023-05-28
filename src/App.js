import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'


function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
  <Routes>
    <Route path='/' exact element={<Login/>} />
    <Route path='/register' exact element={<Register/>} />
    <Route path='/home' exact element={<Home/>} />
    
  </Routes>
  
    </div>
    </Router>
  );
}

export default App;
