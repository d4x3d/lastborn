import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Home from '@/pages/Home';
import Markets from '@/pages/Markets';
import Trade from '@/pages/Trade';
import Portfolio from '@/pages/Portfolio';
import Dashboard from '@/pages/Dashboard';
import Deposit from '@/pages/dashboard/Deposit';
import Withdraw from '@/pages/dashboard/Withdraw';
import Settings from '@/pages/dashboard/Settings';
import Login from '@/pages/auth/Login';
import Signup from '@/pages/auth/Signup';
import Privacy from '@/pages/legal/Privacy';
import Terms from '@/pages/legal/Terms';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/deposit" element={<Deposit />} />
          <Route path="/dashboard/withdraw" element={<Withdraw />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
