import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';

export default function ShuttlesTab() {
  const [shuttles, setShuttles] = useState([
    { id: 1, destination: 'Elante Mall', date: 'Saturday, 5:00 PM', joined: 8, total: 10, status: 'crowdfunding' },
    { id: 2, destination: 'CP67', date: 'Sunday, 2:00 PM', joined: 10, total: 10, status: 'confirmed' },
    { id: 3, destination: 'Chandigarh Station', date: 'Friday, 8:00 PM', joined: 3, total: 10, status: 'crowdfunding' },
  ]);

  const handleJoin = (id: number) => {
    setShuttles(prev => prev.map(s => {
      if (s.id === id && s.joined < s.total) {
        const newJoined = s.joined + 1;
        return { ...s, joined: newJoined, status: newJoined === s.total ? 'confirmed' : 'crowdfunding' };
      }
      return s;
    }));
  };

  return (
    <div className="animate-in fade-in duration-300">
      <section className="mb-12">
        <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-primary leading-tight mb-4">
          Demand-Driven <span className="text-on-primary-container">Shuttles</span>
        </h2>
        <p className="text-on-surface-variant max-w-xs font-medium">Crowdfund your campus shuttle. 10 students to dispatch.</p>
      </section>

      <div className="flex flex-col gap-6">
        {shuttles.map(shuttle => (
          <div key={shuttle.id} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-container">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className={`font-label text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded ${shuttle.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-primary-fixed text-primary-container'}`}>
                  {shuttle.status === 'confirmed' ? 'Confirmed' : 'Crowdfunding'}
                </span>
                <h3 className="font-headline text-2xl font-bold text-primary mt-3">{shuttle.destination}</h3>
                <p className="text-sm text-on-surface-variant mt-1">{shuttle.date}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm font-label font-bold mb-2">
                <span className="text-primary">{shuttle.joined} Joined</span>
                <span className="text-slate-400">{shuttle.total} Required</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${shuttle.status === 'confirmed' ? 'bg-green-500' : 'bg-primary'}`}
                  style={{ width: `${(shuttle.joined / shuttle.total) * 100}%` }}
                ></div>
              </div>
            </div>

            <button 
              onClick={() => handleJoin(shuttle.id)}
              disabled={shuttle.status === 'confirmed'}
              className={`w-full py-4 rounded-full font-headline font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${
                shuttle.status === 'confirmed' 
                  ? 'bg-surface-container-highest text-slate-500 cursor-not-allowed' 
                  : 'bg-primary text-white hover:opacity-90 active:scale-95 shadow-lg shadow-primary/20'
              }`}
            >
              {shuttle.status === 'confirmed' ? 'Dispatch Locked' : 'Commit to Ride'}
              {shuttle.status !== 'confirmed' && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        ))}
      </div>

      <button className="fixed right-6 bottom-28 w-16 h-16 bg-primary-container text-white rounded-full shadow-2xl flex items-center justify-center z-40 transition-transform active:scale-90">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}
