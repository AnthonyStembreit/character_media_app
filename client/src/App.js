
import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import Layout from './Layout.js'
import Login from './pages/Login'
import Profile from './pages/Profile'

function RequireAuth({ children }) {
  const state = useSelector(state => state);
  let auth = state.auth
  console.log(auth)
  let location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
function App() {
  return (
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      {/* <Route
        path="/projects"
        element={
          <RequireAuth>
            <ProjectsPage />
          </RequireAuth>
        }
      /> */}
    </Route>
  </Routes>
  );
}

export default App;
