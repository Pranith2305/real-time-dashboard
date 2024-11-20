"use client"
import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="text-gray-600 hover:text-gray-800">
          <span className="material-icons">notifications</span>
        </button>
        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
}
