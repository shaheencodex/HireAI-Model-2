import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

import LandingPage from "../pages/landing/Landingpage";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/main/Dashboard";
import Register from "../pages/auth/Signup";
import VerifyEmailSent from "../pages/auth/VerifyEmailSent";
import EmailAction from "../pages/auth/EmailAction";
import ForgotPassword from "../pages/auth/Forgotpassword";
import HireAISkeleton from "../components/HireAISkeleton";
import Calendar from "../pages/calendar/Calendar";
import JobDescription from "../pages/job-description/JobDescription";
import ResumeMatch from "../pages/resume-match/ResumeMatch";
import AIInterview from "../pages/ai-interview/AIInterview";
import Summary from "../pages/summary/Summary";
import UserManagement from "../pages/user-management/UserManagement";
import Subscription from "../pages/subscription/Subscription";
import Help from "../pages/help/Help";
import Sidebar from "../components/sidebar";

export default function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user && !!user.emailVerified);
    });
    return () => unsub();
  }, []);

  if (isLoggedIn === null) {
    return (
      <div>
        <HireAISkeleton />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />

        {/*  <Route
          path="/login"
          element={!isLoggedIn ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/signup"
          element={!isLoggedIn ? <Register /> : <Navigate to="/dashboard" />}
        /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/verify-email-sent" element={<VerifyEmailSent />} />
        <Route path="/auth-action" element={<EmailAction />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/dashboard/*"
          element={isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="jd-generator" element={<JobDescription />} />
          <Route path="resume-match" element={<ResumeMatch />} />
          <Route path="ai-interview" element={<AIInterview />} />
          <Route path="summary" element={<Summary />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="help" element={<Help />} />
        </Route>

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile); // Open on desktop, closed on mobile
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden font-[Poppins]">
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-45"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar isOpen={!isMobile} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#1d1f27]">
        <header className="flex items-center justify-between px-4 md:px-10 py-4 sticky top-0 z-30 bg-[#1d1f27] ">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="mr-4 p-2 rounded-lg text-[#01a982] hover:bg-gray-100 hover:text-black "
              aria-label="Toggle menu"
            >
              ☰
            </button>
            <h1
              className="text-xl text-white"
              style={{ fontFamily: "Nohemi, sans-serif" }}
            >
              Welcome back, <span className="text-[#01a982]">Karthik</span>
            </h1>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#01a982] text-white font-bold flex items-center justify-center shadow-md">
              K
            </div>
          </div>
        </header>

        <div className="mx-6 h-px bg-white mt-2"></div>

        <main className="flex-1 overflow-auto sidebar-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
