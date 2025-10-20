import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Settings(){
  const [cfg, setCfg] = useState({});
  const [selectedDesign, setSelectedDesign] = useState('modern');

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

  const designs = [
    { 
      id: 'glassmorphism', 
      name: 'Glassmorphism', 
      desc: 'Frosted glass effect with animated gradient background' 
    },
    { 
      id: 'cyberpunk', 
      name: 'Cyberpunk', 
      desc: 'Neon green matrix style with sharp edges' 
    },
    { 
      id: 'luxury', 
      name: 'Minimal Luxury', 
      desc: 'Clean & elegant with gold accents' 
    },
    { 
      id: 'modern', 
      name: 'Modern Card', 
      desc: 'Top nav with cards (Current)' 
    }
  ];

  return (
    <div className="space-y-6">
      {/* Theme Selector */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-2">Choose Your Design</h3>
        <p className="text-sm text-gray-400 mb-6">Select a theme for your trading interface</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {designs.map((design) => (
            <motion.button
              key={design.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedDesign(design.id)}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                selectedDesign === design.id
                  ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/30'
                  : 'border-purple-500/30 bg-slate-700/30 hover:border-purple-500/60 hover:bg-slate-700/50'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`font-semibold text-lg ${
                  selectedDesign === design.id ? 'text-purple-300' : 'text-white'
                }`}>
                  {design.name}
                </div>
                {selectedDesign === design.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </div>
              <div className="text-sm text-gray-400">{design.desc}</div>
            </motion.button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <div className="text-sm font-medium text-purple-300 mb-1">Theme Preview</div>
              <div className="text-sm text-gray-400">
                Design changes will be applied in a future update. Currently using Modern Card theme.
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* API Configuration */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl"
      >
        <h3 className="text-xl font-semibold mb-4">API Configuration</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Helius API Key</label>
            <div className="flex gap-3">
              <input 
                className="flex-1 rounded-xl p-3 bg-slate-700/50 border border-purple-500/30 outline-none focus:border-purple-500 transition-all" 
                placeholder="Enter your Helius API key" 
                value={cfg.HELIUS_API_KEY||''} 
                onChange={e=>setCfg({...cfg,HELIUS_API_KEY:e.target.value})}
                type="password"
              />
              <button 
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-medium transition-all shadow-lg shadow-purple-500/30"
                onClick={()=>save('HELIUS_API_KEY', cfg.HELIUS_API_KEY||'')}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Security Settings */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl"
      >
        <h3 className="text-xl font-semibold mb-4">Security</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
            <div>
              <div className="font-medium mb-1">Vault Auto-lock</div>
              <div className="text-sm text-gray-400">Automatically lock vault after inactivity</div>
            </div>
            <div className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30 font-medium">
              15 min
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
            <div>
              <div className="font-medium mb-1">Two-Factor Authentication</div>
              <div className="text-sm text-gray-400">Add extra security to your account</div>
            </div>
            <button className="px-4 py-2 bg-slate-600/50 hover:bg-slate-600 rounded-lg transition-all">
              Enable
            </button>
          </div>
        </div>
      </motion.div>

      {/* Network Settings */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl"
      >
        <h3 className="text-xl font-semibold mb-4">Network</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate-700/30 rounded-xl border-2 border-purple-500 bg-purple-500/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="font-medium">Mainnet</div>
            </div>
            <div className="text-sm text-gray-400">Production network</div>
          </div>
          <div className="p-4 bg-slate-700/30 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="font-medium">Devnet</div>
            </div>
            <div className="text-sm text-gray-400">Testing network</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}