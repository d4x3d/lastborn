import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Markets from './pages/Markets';
import Dashboard from './pages/Dashboard';
import Deposit from './pages/dashboard/Deposit';
import Withdraw from './pages/dashboard/Withdraw';
import Settings from './pages/dashboard/Settings';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main className="pt-24 animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="deposit" element={<Deposit />} />
              <Route path="withdraw" element={<Withdraw />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}