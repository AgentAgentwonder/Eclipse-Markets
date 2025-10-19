import React from 'react';
import { motion } from 'framer-motion';

export default function AlertsPanel({ items=[] }) {
  return (
    <div className="space-y-2">
      {items.map(it => (
        <motion.div key={it.id} initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.18}} className="p-3 rounded-lg bg-eclipse-alert">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-eclipse-muted">{it.symbol} • Risk {it.risk}</div>
            </div>
            <div className="text-xs text-eclipse-muted">{new Date(it.id).toLocaleTimeString()}</div>
          </div>
        </motion.div>
      ))}
      {!items.length && <div className="text-eclipse-muted">No alerts</div>}
    </div>
  );
}
