import { Search, SlidersHorizontal, Clock, Users, ArrowRight, Plus } from 'lucide-react';

export default function CabsTab() {
  return (
    <div className="animate-in fade-in duration-300">
      <section className="mb-12">
        <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-primary leading-tight mb-4">
          Cab <span className="text-on-primary-container">Matchmaking</span>
        </h2>
        <p className="text-on-surface-variant max-w-xs font-medium">Find your travel partners and split the velocity.</p>
      </section>

      <div className="mb-8 flex gap-3">
        <div className="flex-1 bg-surface-container-high rounded-full px-5 py-3 flex items-center gap-3">
          <Search className="text-outline w-5 h-5" />
          <input 
            type="text" 
            placeholder="Where to?" 
            className="bg-transparent border-none focus:ring-0 w-full text-sm font-label font-medium placeholder:text-outline outline-none"
          />
        </div>
        <button className="bg-surface-container-high w-12 h-12 rounded-full flex items-center justify-center active:scale-95 transition-transform">
          <SlidersHorizontal className="text-on-surface w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col gap-5">
        <CabCard 
          tag="Leaving Soon"
          tagColor="bg-primary-fixed text-primary-container"
          destination="Going to Elante Mall"
          time="14:30 PM"
          seatsLeft={2}
          avatars={['1', '2']}
          extraAvatars="2+"
          primaryButton={true}
        />
        <CabCard 
          tag="Scheduled"
          tagColor="bg-secondary-container text-on-secondary-container"
          destination="Chandigarh Airport"
          time="17:15 PM"
          seatsLeft={3}
          avatars={['3']}
          extraAvatars="1+"
          primaryButton={false}
        />
        <CabCard 
          tag="Recurring"
          tagColor="bg-primary-fixed text-primary-container"
          destination="Sector 17 Market"
          time="Tomorrow, 10:00 AM"
          seatsLeft={4}
          avatars={['4']}
          extraAvatars=""
          primaryButton={false}
        />
      </div>

      <button className="fixed right-6 bottom-28 w-16 h-16 bg-primary-container text-white rounded-full shadow-2xl flex items-center justify-center z-40 transition-transform active:scale-90">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}

function CabCard({ tag, tagColor, destination, time, seatsLeft, avatars, extraAvatars, primaryButton }: any) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm transition-transform active:scale-[0.98] group relative overflow-hidden border border-surface-container">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <span className={`font-label text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded ${tagColor}`}>
            {tag}
          </span>
          <h3 className="font-headline text-2xl font-bold text-primary mt-3">{destination}</h3>
        </div>
        <div className="flex -space-x-2">
          {avatars.map((a: string) => (
            <img key={a} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${a}`} alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" />
          ))}
          {extraAvatars && (
            <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-primary">
              {extraAvatars}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6 mb-8">
        <div className="flex items-center gap-2">
          <Clock className="text-primary-container w-5 h-5" />
          <span className="font-label text-sm font-semibold text-on-surface">{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="text-primary-container w-5 h-5" />
          <span className="font-label text-sm font-semibold text-on-surface">{seatsLeft} Seats Left</span>
        </div>
      </div>

      <button className={`w-full py-4 rounded-full font-headline font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${
        primaryButton 
          ? 'bg-gradient-to-r from-primary to-primary-container text-white shadow-lg shadow-primary/20 hover:opacity-90' 
          : 'bg-surface-container-high text-primary hover:bg-surface-container-highest'
      }`}>
        Join Match
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
