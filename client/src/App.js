import Login from './components/login/Login'
import Home from './components/home/Home';
import Register from './components/register/Register'
import { ProtectedRoute } from './ProtectedRoutes';
import { LoginProtectedRoutes } from './LoginProtectedRoutes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginProtectedRoutes />}>
            <Route exact path="/login" element={<Login />} />
          </Route>
          <Route exact path="/register" element={<Register />} />
          {/* <Route exact path="/register" element={<LoginProtectedRoutes />}>
            <Route exact path="/register" element={<Register/>} />
          </Route> */}
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="/" element={<Home />} />
          </Route>


        </Routes>

      </Router>
    </div>
  );
}

export default App;
