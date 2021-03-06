import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import UserView from './UserView';
import AdminView from './AdminView';

function App() {

  return (
/** Container contains grid layout with app-header taking top and content taking the rest of the screen */
    <div className="container">
      <div className="App-header">
      <h1>Learn Language App</h1>
      </div>
      {/* Create navigation links for User and Admin view each. */}
    <BrowserRouter>
    <div className="links">
      <ul>
      <li><NavLink to="/user" className="link">
        User
      </NavLink></li>
      <li><NavLink to="/admin" className="link">
        Admin
      </NavLink></li>
      </ul>
    </div>
    <div className="content">
      {/* Create paths to user and admin components and call for the component */}
    <Routes>
      <Route path="/user" element={<UserView />} />
      <Route path="/admin" element={<AdminView />} />
    </Routes>
    </div>
  </BrowserRouter>
  </div>
  );
}

export default App;
