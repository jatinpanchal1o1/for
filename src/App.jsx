import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppProvider } from './app/context/AppContext';

const AppShell = lazy(() => import('./app/components/AppShell'));
const Landing = lazy(() => import('./app/pages/Landing'));
const AuthPage = lazy(() => import('./app/pages/Auth'));
const Discover = lazy(() => import('./app/pages/Discover'));
const Likes = lazy(() => import('./app/pages/Likes'));
const Matches = lazy(() => import('./app/pages/Matches'));
const Messages = lazy(() => import('./app/pages/Messages'));
const Profile = lazy(() => import('./app/pages/Profile'));
const Settings = lazy(() => import('./app/pages/Settings'));
const Onboarding = lazy(() => import('./app/pages/Onboarding'));
const Admin = lazy(() => import('./app/pages/Admin'));
const NotFound = lazy(() => import('./app/pages/NotFound'));

function RouteFallback() {
  return <div className="route-loading"><span className="loading-orbit" /><p>Getting things ready…</p></div>;
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<AuthPage mode="login" />} />
            <Route path="/signup" element={<AuthPage mode="signup" />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route element={<AppShell />}>
              <Route path="/discover" element={<Discover />} />
              <Route path="/likes" element={<Likes />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<Navigate to="/" replace />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
