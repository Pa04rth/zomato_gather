import React from "react";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>
          Welcome to your dashboard! Here you can manage your account, view
          analytics, and more.
        </p>
        {/* Add more dashboard components here */}
      </div>
    </div>
  );
};

export default Dashboard;
