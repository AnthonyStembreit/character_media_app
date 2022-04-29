

import React from 'react';
import { useSelector } from 'react-redux';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import Layout from './Layout.js'
import Auth from './pages/Auth'
import About from './pages/About'
import MessageBoard from './pages/MessageBoard'
import Search from './pages/Search'
import SingleUser from './pages/SingleUser'
import ForgotPassword from './pages/ForgotPassword/index.js';

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
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route
          path="/:username"
          element={
            <RequireAuth>
              <SingleUser />
            </RequireAuth>
          }
        />
        <Route
          path="/messages"
          element={
            <RequireAuth>
              <MessageBoard />
            </RequireAuth>
          }
        />
        <Route
          path="/search"
          element={
            <RequireAuth>
              <Search />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
