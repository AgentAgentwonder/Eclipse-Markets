import React from 'react';
import { Home, Users, Bell, Settings as Cog } from 'lucide-react';

export default function Sidebar({ route, setRoute }) {
  const items = [
    { id: 'dashboard', label: 'Overview', Icon: Home },
    { id: 'insiders', label: 'Insiders', Icon: Users },
    { id: 'alerts', label: 'Alerts', Icon: Bell },
    { id: 'settings', label: 'Settings', Icon: Cog }
  ];

  return (
    <aside className="w-72 min-w-[220px] p-6 border-r border-eclipse-border bg-eclipse-side flex flex-col">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-eclipse-accent to-eclipse-accent-2 flex items-center justify-center shadow-eclipse-glow text-xl font-bold">EM</div>
          <div>
            <div className="text-lg font-semibold">Eclipse Market</div>
            <div className="text-sm text-eclipse-muted">Trading</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {items.map(it => (
          <button
            key={it.id}
            onClick={() => setRoute(it.id)}
            className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg transition 
              ${route === it.id ? 'bg-eclipse-active shadow-eclipse-glow' : 'hover:bg-eclipse-hover'}`}
          >
            <it.Icon className="w-5 h-5" />
            <span className="font-medium">{it.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-6 text-sm text-eclipse-muted">
        <div>Network: <span className="text-white">Mainnet</span></div>
        <div className="mt-2">Insiders tracked: <span className="text-white">2</span></div>
      </div>
    </aside>
  );
}
