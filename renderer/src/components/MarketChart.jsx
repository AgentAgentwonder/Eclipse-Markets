import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function MarketChart({ data }) {
  const formatted = data.map(d => ({ 
    time: new Date(d.time).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}), 
    price: d.price 
  }));
  
  return (
    <div style={{ width:'100%', height: 300, minHeight: 300 }}>
      <ResponsiveContainer width="100%" height="100%" minHeight={300}>
        <LineChart data={formatted}>
          <CartesianGrid stroke="#1f2233" strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize:12, fill: '#9ca3af' }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              border: '1px solid #374151',
              borderRadius: '8px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#7a4acf" 
            strokeWidth={2} 
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}