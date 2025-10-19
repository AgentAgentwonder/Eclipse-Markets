import React from 'react';
import { motion } from 'framer-motion';

export default function LiveFeed({ items=[] }) {
  return (
    <ul className="space-y-2">
      {items.map(it => (
        <motion.li key={it.id} initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="px-3 py-2 rounded-md bg-eclipse-feed">
          <div className="flex justify-between">
            <div className="text-sm">{it.text}</div>
            <div className="text-xs text-eclipse-muted">now</div>
          </div>
        </motion.li>
      ))}
      {!items.length && <div className="text-eclipse-muted text-sm">No recent activity</div>}
    </ul>
  );
}
