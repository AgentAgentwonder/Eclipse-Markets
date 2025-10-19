import React from 'react';
import { SunMoon, RefreshCw, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Topbar({ setRoute }) {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-eclipse-border bg-eclipse-topback">
      <div className="flex items-center gap-4">
        <div className="text-xl font-semibold">Eclipse Market Trading</div>
        <div className="text-sm text-eclipse-muted">v{process.env.npm_package_version || 'dev'}</div>
      </div>

      <div className="flex items-center gap-3">
        <motion.button whileTap={{ scale: 0.95 }} title="Refresh" className="p-2 rounded-md hover:bg-eclipse-hover">
          <RefreshCw className="w-5 h-5" />
        </motion.button>
        <motion.button whileTap={{ scale: 0.95 }} title="Lock vault" className="p-2 rounded-md hover:bg-eclipse-hover">
          <Lock className="w-5 h-5" />
        </motion.button>
        <motion.button whileTap={{ scale: 0.95 }} title="Theme" className="p-2 rounded-md hover:bg-eclipse-hover">
          <SunMoon className="w-5 h-5" />
        </motion.button>
      </div>
    </header>
  );
}
