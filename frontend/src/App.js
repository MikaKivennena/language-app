import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import UserView from './UserView';
import AdminView from './AdminView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Learn Language App
        </h1>
      </header>
      <BrowserRouter>
    <div className="navigation">
      <NavLink to="/main" className="link">
        Main
      </NavLink>
      <NavLink to="/user" className="link">
        User
      </NavLink>
      <NavLink to="/admin" className="link">
        Admin
      </NavLink>
    </div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user" element={<UserView />} />
      <Route path="/admin" element={<AdminView />} />
    </Routes>
  </BrowserRouter>
  </div>
  );



}

export default App;
