// src/components/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <div className="text-2xl font-bold mb-6">Dashboard</div>
      <nav className="space-y-4">
        <Link href="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-700">
          Overview
        </Link>
        <Link href="/dashboard/kanban" className="block px-4 py-2 rounded hover:bg-gray-700">
          Kanban
        </Link>
      </nav>
    </aside>
  );
}
