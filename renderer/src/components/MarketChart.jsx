import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function MarketChart({ data }) {
  const formatted = data.map(d => ({ time: new Date(d.time).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}), price: d.price }));
  return (
    <div style={{ width:'100%', height:300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formatted}>
          <CartesianGrid stroke="#1f2233" strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize:12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#7a4acf" strokeWidth={2} dot={{ r:0 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
