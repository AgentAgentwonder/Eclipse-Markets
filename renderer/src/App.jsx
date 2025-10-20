import React, { useState } from 'react';
import { Home, Users, Bell, Settings as SettingsIcon, Search, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Dashboard from './pages/Dashboard';
import Insiders from './pages/Insiders';
import Alerts from './pages/Alerts';
import SettingsPage from './pages/Settings';

export default function App() {
  const [route, setRoute] = useState('dashboard');
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'insiders', label: 'Insiders', icon: Users },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'settings', label: 'Settings', icon: SettingsIcon }
  ];

  const renderPage = () => {
    switch (route) {
      case 'insiders': return <Insiders />;
      case 'alerts': return <Alerts />;
      case 'settings': return <SettingsPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="flex items-center gap-3 hover:opacity-80 transition-all group"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    scale: sidebarOpen ? 0.9 : 1,
                    rotate: sidebarOpen ? 360 : 0
                  }}
                  transition={{ 
                    type: 'spring', 
                    damping: 20, 
                    stiffness: 300 
                  }}
                  className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50 relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {sidebarOpen ? (
                      <motion.div
                        key="x"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.img 
                        key="logo"
                        src="./src/assets/icon.png" 
                        alt="Eclipse Market" 
                        className="w-8 h-8 object-contain"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        onError={(e) => {
                          e.target.outerHTML = '<span class="font-bold text-lg">E</span>';
                        }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
                <span className="text-xl font-bold group-hover:text-purple-300 transition-colors">Eclipse Market</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSearchOpen(!searchOpen)} 
                className="p-2 hover:bg-white/5 rounded-lg transition-all"
              >
                <Search className="w-5 h-5" />
              </button>
              <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                <span className="text-sm font-semibold">12.34 SOL</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Collapsible Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />

            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-80 z-50 bg-slate-900/95 backdrop-blur-xl border-r border-purple-500/20 shadow-2xl"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div 
                      initial={{ rotate: 0, scale: 1 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50 overflow-hidden"
                    >
                      <img 
                        src="./src/assets/icon.png" 
                        alt="Eclipse Market" 
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.target.outerHTML = '<span class="font-bold text-lg">E</span>';
                        }}
                      />
                    </motion.div>
                    <div>
                      <div className="text-xl font-bold">Eclipse</div>
                      <div className="text-xs text-gray-400">Market Trading Platform</div>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent mt-4"></div>
                </div>

                <nav className="flex-1 space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        setRoute(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
                        route === item.id
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 shadow-lg'
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        route === item.id
                          ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                          : 'bg-white/5'
                      }`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-gray-400">Navigate to {item.label.toLowerCase()}</div>
                      </div>
                      {route === item.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-purple-400"
                        />
                      )}
                    </motion.button>
                  ))}
                </nav>

                <div className="pt-6 border-t border-purple-500/20">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-400">Status</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-green-400 font-medium">Connected</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <div className="text-gray-400">Network</div>
                    <div className="text-white font-medium">Mainnet</div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-32"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="w-full max-w-2xl mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="flex-1 bg-transparent border-none outline-none text-lg"
                    autoFocus
                  />
                  <button onClick={() => setSearchOpen(false)} className="p-2 hover:bg-white/5 rounded-lg">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-sm text-gray-400">Try searching for wallets, transactions, or alerts</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}