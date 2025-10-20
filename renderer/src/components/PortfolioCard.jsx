import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const sampleSpark = [{v:1},{v:2},{v:3},{v:4},{v:3},{v:5},{v:6},{v:5},{v:7}];

export default function PortfolioCard(){
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-sm text-gray-400">Total Portfolio Value</div>
          </div>
          <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            12.34 SOL
          </div>
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm font-semibold border border-green-500/30">
              +3.4%
            </div>
            <span className="text-sm text-gray-400">Last 24 hours</span>
          </div>
        </div>
        
        <div style={{width: 240, height: 80}}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sampleSpark}>
              <defs>
                <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="v" 
                stroke="#a855f7" 
                fill="url(#portfolioGradient)" 
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}