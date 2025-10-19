import React from 'react';
import AlertsPanel from '../components/AlertsPanel';

export default function Alerts(){
  return (
    <div>
      <h2 className="text-2xl mb-4">Alerts</h2>
      <AlertsPanel items={[]} />
    </div>
  );
}
