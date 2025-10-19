import React, { useEffect, useState } from 'react';

export default function Settings(){
  const [cfg, setCfg] = useState({});
  useEffect(()=> {
    if (window.secureConfig && window.secureConfig.getAll) {
      window.secureConfig.getAll().then(setCfg).catch(()=>{});
    }
  },[]);
  const save = async (k,v) => {
    if (window.secureConfig && window.secureConfig.set) {
      await window.secureConfig.set(k,v);
      setCfg(await window.secureConfig.getAll());
    }
  };
  return (
    <div className="space-y-6">
      <div className="bg-eclipse-panel rounded-2xl p-4">
        <h3 className="font-semibold mb-2">App Settings</h3>
        <div className="space-y-2">
          <div className="flex gap-2">
            <input className="flex-1 rounded-md p-2 bg-eclipse-input" placeholder="HELIUS_API_KEY" value={cfg.HELIUS_API_KEY||''} onChange={e=>setCfg({...cfg,HELIUS_API_KEY:e.target.value})}/>
            <button className="px-4 py-2 rounded-md bg-eclipse-accent" onClick={()=>save('HELIUS_API_KEY', cfg.HELIUS_API_KEY||'')}>Save</button>
          </div>
        </div>
      </div>
      <div className="bg-eclipse-panel rounded-2xl p-4">
        <h3 className="font-semibold mb-2">Security</h3>
        <div className="text-sm text-eclipse-muted">Vault auto-lock: 15m</div>
      </div>
    </div>
  );
}
