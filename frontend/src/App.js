import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Layout } from './components';
import { Home, Authenticate, Activate, Rooms } from './pages';
import './App.css';

const isAuth = false;
const user = {
  activated: false,
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<GuestRoute />}>
          <Route index element={<Home />} />
          <Route path="authenticate" element={<Authenticate />} />
        </Route>
        <Route element={<SemiProtectedRoute />}>
          <Route path="activate" element={<Activate />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="rooms" element={<Rooms />} />
        </Route>
      </Route>
    </Routes>
  );
}

const GuestRoute = () => {
  // const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();

  return isAuth ? <Navigate to="/rooms" state={{ from: location }} replace /> : <Outlet />;
};

const SemiProtectedRoute = () => {
  // const { user, isAuth } = useSelector((state) => state.auth);
  const location = useLocation();

  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : !user.activated ? (
    <Outlet />
  ) : (
    <Navigate to="/rooms" state={{ from: location }} replace />
  );
};

const ProtectedRoute = () => {
  // const { user, isAuth } = useSelector((state) => state.auth);
  const location = useLocation();

  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : !user.activated ? (
    <Navigate to="/activate" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
