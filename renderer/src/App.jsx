import React, { useState } from 'react';
import Topbar from './layout/Topbar';
import Sidebar from './layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Insiders from './pages/Insiders';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [route, setRoute] = useState('dashboard');
  const renderPage = () => {
    switch (route) {
      case 'insiders': return <Insiders />;
      case 'alerts': return <Alerts />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };
  return (
    <div className="app-root min-h-screen flex bg-eclipse-bg text-white">
      <Sidebar route={route} setRoute={setRoute} />
      <div className="flex-1 flex flex-col">
        <Topbar setRoute={setRoute} />
        <main className="p-6 overflow-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={route} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-6}} transition={{duration:0.35}}>
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
