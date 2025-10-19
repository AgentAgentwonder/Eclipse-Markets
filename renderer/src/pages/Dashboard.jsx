import React, { useEffect, useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import MarketChart from '../components/MarketChart';
import AlertsPanel from '../components/AlertsPanel';
import LiveFeed from '../components/LiveFeed';
import { motion } from 'framer-motion';

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
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <PortfolioCard />
        <div className="bg-eclipse-panel rounded-2xl p-4 shadow-eclipse-soft">
          <h3 className="text-lg font-semibold mb-2">Market (mock)</h3>
          <MarketChart data={marketData} />
        </div>
        <div className="bg-eclipse-panel rounded-2xl p-4 shadow-eclipse-soft">
          <h3 className="text-lg font-semibold mb-2">Live Feed</h3>
          <LiveFeed items={nowFeed} />
        </div>
      </div>
      <aside className="space-y-6">
        <div className="bg-eclipse-panel rounded-2xl p-4 shadow-eclipse-soft">
          <h3 className="text-lg font-semibold mb-2">Alerts</h3>
          <AlertsPanel items={alerts} />
        </div>
        <div className="bg-eclipse-panel rounded-2xl p-4 shadow-eclipse-soft">
          <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full py-2 rounded-lg bg-eclipse-accent hover:brightness-110">Rotate Keys</button>
            <button className="w-full py-2 rounded-lg border border-eclipse-border">Run Diagnostics</button>
          </div>
        </div>
      </aside>
    </motion.div>
  );
}
