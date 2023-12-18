import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './pages/mainpage/mainPage';
import Museum from './pages/museumPage/museum';
import LoginPage from './pages/loginPage/loginPage';
import SignupPage from './pages/signupPage/signupPage';   
// import EditProfilePage from './pages/editProfilePage'; 
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthentication = () => {
    setIsLoggedIn(true);
  };


  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   localStorage.clear();
  //   setIsNavCollapsed(true);
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/mainpage" /> : <LoginPage onLogin={handleAuthentication}/>} />
        <Route path="/signup" element={<SignupPage onSignup={handleAuthentication} />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/museum" element={<Museum />} />
        {/* <Route path="/museum/:id" element={<Museum />} /> */}
      </Routes>
    </Router>
  );
}

export default App;