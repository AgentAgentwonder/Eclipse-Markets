import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const sampleSpark = [{v:1},{v:2},{v:3},{v:4},{v:3},{v:5}];

export default function PortfolioCard(){
  return (
    <div className="bg-eclipse-panel rounded-2xl p-5 flex items-center justify-between shadow-eclipse-soft">
      <div>
        <div className="text-sm text-eclipse-muted">Total Portfolio</div>
        <div className="text-3xl font-bold mt-1">12.34 SOL</div>
        <div className="text-sm text-eclipse-green mt-1">+3.4% (24h)</div>
      </div>
      <div style={{width:220, height:70}}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sampleSpark}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7a4acf" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#7a4acf" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke="#A78BFA" fill="url(#g1)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
