import { NavLink, useLocation } from "react-router-dom";

import logo from "../assets/images/AMZLogo.png";
import dashboardicon from "../assets/images/dashboard.svg";
import calendaricon from "../assets/images/calendar.svg";
import jdgeneratoricon from "../assets/images/GenerateJD.svg";
import resumeicon from "../assets/images/ResumeMatch.svg";
import aiinterviewicon from "../assets/images/AI-Interview.svg";
import summaryicon from "../assets/images/summary.svg";
import usericon from "../assets/images/user-group.svg";
import subscriptionicon from "../assets/images/managesubscriptions.svg";
import helpicon from "../assets/images/help-circle.svg";
import logouticon from "../assets/images/logout.svg";
import chevronicon from "../assets/images/collapse_13726.png";
import closelogo from "../assets/images/closedlogo.svg";

interface SidebarProps {
  isOpen?: boolean;
  toggleSidebar?: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const location = useLocation();
  const menuItems = [
    { name: "Dashboard", icon: dashboardicon, path: "/dashboard", badge: "9" },
    { name: "Calendar", icon: calendaricon, path: "/dashboard/calendar" },
    {
      name: "Job Description",
      icon: jdgeneratoricon,
      path: "/dashboard/jd-generator",
    },
    { name: "Resume Match", icon: resumeicon, path: "/dashboard/resume-match" },
    {
      name: "AI Interview",
      icon: aiinterviewicon,
      path: "/dashboard/ai-interview",
    },
    { name: "Summary", icon: summaryicon, path: "/dashboard/summary" },
  ];

  const accountItems = [
    {
      name: "User Management",
      icon: usericon,
      path: "/dashboard/user-management",
    },
    {
      name: "Manage Subscription",
      icon: subscriptionicon,
      path: "/dashboard/subscription",
    },
    { name: "Help & Support", icon: helpicon, path: "/dashboard/help" },
    { name: "Logout", icon: logouticon, path: "/logout", isLogout: true },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } h-screen bg-[#292d3a] shadow-lg flex flex-col transition-all duration-300 font-[Manrope]`}
    >
      {/* Logo Section */}
      <div className="px-6 py-5 flex justify-center">
        <img
          src={isOpen ? logo : closelogo}
          alt="Logo"
          className={`transition-all duration-300 ${
            isOpen ? "h-auto w-80" : "h-8 w-8"
          }`}
        />
      </div>

      {/* Menu Section */}
      <div className="flex flex-col grow overflow-y-auto">
        {isOpen && (
          <div className="px-6 pt-2">
            <h2 className="text-gray-300 text-sm font-medium mb-2">Menu</h2>
          </div>
        )}

        <nav className="px-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`flex items-center ${
                  isOpen ? "justify-between" : "justify-center"
                } px-2 py-3 mb-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[#01a982] text-white"
                    : "text-gray-300 hover:bg-[#01a982]/10 hover:text-[#01a982]"
                }`}
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="w-5 h-5 transition-all duration-200 brightness-0 invert "
                  />
                  {isOpen && <span className="ml-3">{item.name}</span>}
                </div>
                {isOpen && item.badge && (
                  <span className="bg-white text-[#01a982] text-xs font-semibold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Account Section */}
        {isOpen && (
          <div className="px-6 pt-6">
            <h2 className="text-gray-300 text-sm font-medium mb-2">Account</h2>
          </div>
        )}

        <nav className="px-4 space-y-1">
          {accountItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`flex items-center ${
                  isOpen ? "justify-between" : "justify-center"
                } px-2 py-3 mb-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[#01a982] text-white"
                    : "text-gray-300 hover:bg-[#01a982]/10 hover:text-[#01a982]"
                }`}
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="w-5 h-5 transition-all duration-200 brightness-0 invert hover:fill-[#01a982]"
                  />
                  {isOpen && <span className="ml-3">{item.name}</span>}
                </div>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Collapse Button */}
      <div className="px-4 py-4 flex justify-center border-t border-gray-100">
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center w-full  hover:bg-[#01a982]/10 rounded-lg p-2 transition-all"
        >
          <img
            src={chevronicon}
            alt="Collapse"
            className={`w-5 h-5 transform transition-transform duration-300 brightness-0 invert ${
              isOpen ? "rotate-270" : "rotate-90"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
