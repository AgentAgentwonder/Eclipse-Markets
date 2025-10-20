import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '../components/PortfolioCard';
import MarketChart from '../components/MarketChart';
import AlertsPanel from '../components/AlertsPanel';
import LiveFeed from '../components/LiveFeed';

function generateMockData() {
  const now = Date.now();
  const base = 100 + Math.random()*50;
  const points = Array.from({length: 48}).map((_,i)=>({
    time: new Date(now - (47-i)*1800*1000).toISOString(),
    price: +(base + Math.sin(i/6)*5 + (Math.random()-0.5)*3).toFixed(2),
    volume: Math.round(200 + Math.random()*200)
  }));
  return points;
}

export default function Dashboard(){
  const [marketData, setMarketData] = useState(generateMockData());
  const [alerts, setAlerts] = useState([]);
  const [nowFeed, setNowFeed] = useState([]);

  useEffect(() => {
    const interval = setInterval(()=>{
      setMarketData(prev => {
        const nextPrice = +(prev[prev.length-1].price * (1 + (Math.random()-0.5)/200)).toFixed(2);
        const next = [...prev.slice(1), { time: new Date().toISOString(), price: nextPrice, volume: Math.round(100+Math.random()*300) }];
        return next;
      });
      if (Math.random() > 0.75) {
        const alert = { id: Date.now(), title: 'Insider trade detected', symbol: 'SOL', risk: Math.round(Math.random()*100) };
        setAlerts(a => [alert, ...a].slice(0,8));
      }
      setNowFeed(f => [{ id: Date.now(), text: `Tx ${Math.random().toString(36).slice(2,8)} - ${Math.round(Math.random()*10)} SOL`}, ...f].slice(0,6));
    }, 3000);
    return ()=> clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <PortfolioCard />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl"
        >
          <h3 className="text-lg font-semibold mb-4">Market Overview (Live)</h3>
          <MarketChart data={marketData} />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl"
        >
          <h3 className="text-lg font-semibold mb-4">Live Feed</h3>
          <LiveFeed items={nowFeed} />
        </motion.div>
      </div>
      
      <aside className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl"
        >
          <h3 className="text-lg font-semibold mb-4">Alerts</h3>
          <AlertsPanel items={alerts} />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl"
        >
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-medium transition-all shadow-lg shadow-purple-500/30">
              Rotate Keys
            </button>
            <button className="w-full py-3 rounded-xl border-2 border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all">
              Run Diagnostics
            </button>
          </div>
        </motion.div>
      </aside>
    </div>
  );
}