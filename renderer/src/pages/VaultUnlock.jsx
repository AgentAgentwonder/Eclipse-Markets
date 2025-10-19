import React, { useState } from 'react';
export default function VaultUnlock(){ const [unlocked,setUnlocked]=useState(true); return (<div><button onClick={()=>setUnlocked(!unlocked)}>{unlocked?'Lock Vault':'Unlock Vault'}</button></div>); }
