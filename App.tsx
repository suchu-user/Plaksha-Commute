/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, Bike, Bus, Car } from 'lucide-react';
import CyclesTab from './components/CyclesTab';
import ShuttlesTab from './components/ShuttlesTab';
import CabsTab from './components/CabsTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('cycles');

  return (
    <div className="min-h-screen pb-24">
      {/* Top App Bar */}
      <header className="bg-slate-50/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-sm flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <Menu className="text-primary w-6 h-6" />
          <h1 className="text-xl font-extrabold tracking-tighter text-primary font-headline">Plaksha Commute</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        {activeTab === 'cycles' && <CyclesTab />}
        {activeTab === 'shuttles' && <ShuttlesTab />}
        {activeTab === 'cabs' && <CabsTab />}
      </main>

      {/* Bottom Nav Bar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-slate-50/70 backdrop-blur-xl z-50 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,30,64,0.1)]">
        <button 
          onClick={() => setActiveTab('cycles')}
          className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all ${activeTab === 'cycles' ? 'bg-primary text-white scale-105' : 'text-slate-500 hover:text-primary'}`}
        >
          <Bike className="w-6 h-6" />
          <span className="font-label text-[10px] font-semibold uppercase tracking-widest mt-1">Cycles</span>
        </button>
        <button 
          onClick={() => setActiveTab('shuttles')}
          className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all ${activeTab === 'shuttles' ? 'bg-primary text-white scale-105' : 'text-slate-500 hover:text-primary'}`}
        >
          <Bus className="w-6 h-6" />
          <span className="font-label text-[10px] font-semibold uppercase tracking-widest mt-1">Shuttles</span>
        </button>
        <button 
          onClick={() => setActiveTab('cabs')}
          className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all ${activeTab === 'cabs' ? 'bg-primary text-white scale-105' : 'text-slate-500 hover:text-primary'}`}
        >
          <Car className="w-6 h-6" />
          <span className="font-label text-[10px] font-semibold uppercase tracking-widest mt-1">Cabs</span>
        </button>
      </nav>
    </div>
  );
}
