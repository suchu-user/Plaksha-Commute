import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, CheckCircle2, Ban, Star, MapPin, Image as ImageIcon, SwitchCamera, Wallet, QrCode } from 'lucide-react';

export default function CyclesTab() {
  const [workflowState, setWorkflowState] = useState<'idle' | 'pending' | 'approved' | 'camera' | 'checkout'>('idle');

  if (workflowState !== 'idle') {
    return <CycleActiveWorkflow state={workflowState} setState={setWorkflowState} />;
  }

  return (
    <div className="animate-in fade-in duration-300">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-primary leading-tight">
              Academic <span className="text-surface-tint">Velocity</span>
            </h2>
            <p className="mt-4 text-on-secondary-container font-medium text-lg">Book sustainable campus transit shared by the Plaksha community.</p>
          </div>
          <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full w-fit">
            <Calendar className="text-primary w-4 h-4" />
            <span className="font-label text-sm font-bold text-primary">October 2023</span>
          </div>
        </div>

        {/* Calendar & Time Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 bg-surface-container-low p-6 rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline font-bold text-xl">Select Date</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-surface-container-lowest rounded-full hover:bg-white transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                <button className="p-2 bg-surface-container-lowest rounded-full hover:bg-white transition-colors"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-[10px] uppercase font-label font-bold text-slate-400 tracking-widest pb-2">{day}</div>
              ))}
              {/* Dummy days */}
              {[25, 26, 27, 28, 29, 30].map(d => (
                <div key={`prev-${d}`} className="aspect-square flex items-center justify-center font-label text-sm text-slate-300 pointer-events-none">{d}</div>
              ))}
              {[1, 2].map(d => (
                <div key={d} className="aspect-square flex items-center justify-center font-label text-sm bg-surface-container-highest rounded-xl text-primary font-bold shadow-sm cursor-pointer hover:scale-105 transition-transform">{d}</div>
              ))}
              <div className="aspect-square flex items-center justify-center font-label text-sm bg-primary text-white rounded-xl font-bold shadow-lg scale-110">3</div>
              {[4, 5, 6, 7, 8].map(d => (
                <div key={d} className="aspect-square flex items-center justify-center font-label text-sm bg-surface-container-highest rounded-xl text-primary font-bold shadow-sm cursor-pointer hover:scale-105 transition-transform">{d}</div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-surface-container-low p-6 rounded-xl flex flex-col">
            <h3 className="font-headline font-bold text-xl mb-6">Select Time</h3>
            <div className="flex flex-col gap-3 flex-1">
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest text-on-surface font-semibold shadow-sm transition-all active:scale-95">
                <span>09:00 AM - 11:00 AM</span>
                <CheckCircle2 className="text-primary w-5 h-5" />
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-surface-container-highest opacity-50 cursor-not-allowed grayscale pointer-events-none">
                <span className="line-through">11:00 AM - 01:00 PM</span>
                <Ban className="text-slate-400 w-5 h-5" />
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-surface-container-highest opacity-50 cursor-not-allowed grayscale pointer-events-none">
                <span className="line-through">01:00 PM - 03:00 PM</span>
                <Ban className="text-slate-400 w-5 h-5" />
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest text-on-surface font-semibold shadow-sm transition-all hover:bg-primary-fixed hover:text-on-primary-fixed active:scale-95">
                <span>03:00 PM - 05:00 PM</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline font-bold text-2xl tracking-tight">Available Cycles</h3>
        </div>
        <div className="space-y-4">
          <CycleCard 
            type="Road Commuter"
            name="Specialized Sirrus X"
            rate="₹15/hr"
            rateType="Campus Rate"
            owner="Prof. Arjun Mehta"
            rating="4.9"
            img="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            onBook={() => setWorkflowState('pending')}
          />
          <CycleCard 
            type="Electric Hub"
            name="VanMoof S3 (E-Bike)"
            rate="₹45/hr"
            rateType="Fixed Rate"
            owner="Dr. Sarah Chen"
            rating="5.0"
            img="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            onBook={() => setWorkflowState('pending')}
          />
        </div>
      </section>
    </div>
  );
}

function CycleCard({ type, name, rate, rateType, owner, rating, img, onBook }: any) {
  return (
    <div className="group bg-surface-container-lowest p-6 rounded-xl flex flex-col md:flex-row items-center gap-8 shadow-sm transition-all hover:shadow-xl border border-surface-container">
      <div className="w-full md:w-48 h-32 rounded-lg bg-surface-container overflow-hidden shrink-0">
        <img src={img} alt={name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
      </div>
      <div className="flex-1 w-full">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-surface-tint">{type}</span>
            <h4 className="font-headline font-bold text-xl text-primary mt-1">{name}</h4>
          </div>
          <div className="text-right">
            <span className="block font-headline font-extrabold text-xl text-primary">{rate}</span>
            <span className="text-[10px] font-label font-medium text-slate-400">{rateType}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${owner}`} alt={owner} className="w-full h-full" />
          </div>
          <span className="font-label text-sm font-semibold text-on-secondary-container">Owned by {owner}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span className="font-label text-xs font-bold">{rating}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={onBook}
        className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container px-8 py-4 rounded-full text-white font-bold tracking-tight text-sm shadow-lg active:scale-95 transition-transform"
      >
        Request to Book
      </button>
    </div>
  );
}

function CycleActiveWorkflow({ state, setState }: { state: string, setState: (s: any) => void }) {
  return (
    <div className="animate-in slide-in-from-right-8 duration-300">
      <div className="mb-10">
        <p className="font-label text-secondary uppercase tracking-[0.2em] text-[10px] mb-2">Active Session</p>
        <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight leading-none">Cycle Rental<br/>Workflow</h2>
      </div>

      <div className="space-y-12">
        {/* State A: Pending */}
        <section className={`relative transition-opacity duration-500 ${state !== 'pending' ? 'opacity-50 grayscale' : ''}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-label font-bold text-sm">A</span>
            <h3 className="font-headline font-bold text-lg">Initial Request</h3>
          </div>
          <div 
            className="bg-surface-container-lowest rounded-xl p-6 shadow-sm relative overflow-hidden cursor-pointer border border-surface-container"
            onClick={() => state === 'pending' && setState('approved')}
          >
            {state === 'pending' && (
              <div className="absolute top-0 right-0 p-4">
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
              </div>
            )}
            <div className="flex flex-col items-center py-8 text-center">
              {state === 'pending' ? (
                <div className="w-16 h-16 rounded-full border-4 border-surface-container-highest border-t-primary-container animate-spin mb-6"></div>
              ) : (
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
              )}
              <h4 className="text-xl font-headline font-bold text-primary mb-2">
                {state === 'pending' ? 'Waiting for Owner Approval' : 'Approved by Owner'}
              </h4>
              <p className="text-on-surface-variant text-sm max-w-xs">
                {state === 'pending' ? 'Aarav (Owner) is reviewing your request for the Blue Rockhopper. Hang tight! (Click to simulate approval)' : 'Request approved.'}
              </p>
            </div>
          </div>
        </section>

        {/* State B: Approved / QR */}
        {(state === 'approved' || state === 'camera' || state === 'checkout') && (
          <section className={`relative transition-opacity duration-500 ${state !== 'approved' ? 'opacity-50 grayscale' : 'animate-in fade-in slide-in-from-bottom-4'}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-label font-bold text-sm">B</span>
              <h3 className="font-headline font-bold text-lg">Security Clearance</h3>
            </div>
            <div 
              className="bg-surface-container-lowest rounded-xl p-8 border-l-4 border-primary shadow-sm cursor-pointer"
              onClick={() => state === 'approved' && setState('camera')}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="p-4 bg-white rounded-xl shadow-inner border border-surface-container">
                  <div className="w-40 h-40 bg-slate-100 flex items-center justify-center relative">
                    <QrCode className="w-32 h-32 text-primary" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-headline font-extrabold text-primary mb-3">Clearance QR</h4>
                  <p className="text-on-surface-variant leading-relaxed mb-4">Show this to the <span className="font-bold text-primary">Gate 1 security guard</span> to retrieve the lock key. (Click to simulate scan)</p>
                  <div className="flex items-center gap-2 text-primary-container bg-primary-fixed px-3 py-2 rounded-lg inline-flex">
                    <MapPin className="w-4 h-4" />
                    <span className="font-label font-bold text-xs">GATE 1 - NORTH PLAZA</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* State C: Camera */}
        {(state === 'camera' || state === 'checkout') && (
          <section className={`relative transition-opacity duration-500 ${state !== 'camera' ? 'opacity-50 grayscale' : 'animate-in fade-in slide-in-from-bottom-4'}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-label font-bold text-sm">C</span>
              <h3 className="font-headline font-bold text-lg">Asset Verification</h3>
            </div>
            <div className="relative overflow-hidden rounded-xl h-80 bg-slate-900 group">
              <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Camera view" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white">
                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    <span className="text-[10px] font-label font-bold tracking-widest uppercase">Live View</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-lg mb-4 drop-shadow-lg">Take Pre-Ride Photo</p>
                  <div className="flex justify-center items-center gap-8">
                    <div className="w-10 h-10 border-2 border-white/50 rounded-lg flex items-center justify-center">
                      <ImageIcon className="text-white/50 w-5 h-5" />
                    </div>
                    <button 
                      onClick={() => state === 'camera' && setState('checkout')}
                      className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center active:scale-95 transition-transform"
                    >
                      <div className="w-12 h-12 bg-white rounded-full"></div>
                    </button>
                    <div className="w-10 h-10 border-2 border-white/50 rounded-lg flex items-center justify-center">
                      <SwitchCamera className="text-white/50 w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-dashed border-white/30 rounded-2xl pointer-events-none"></div>
            </div>
          </section>
        )}

        {/* State D: Checkout */}
        {state === 'checkout' && (
          <section className="relative mb-12 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-label font-bold text-sm">D</span>
              <h3 className="font-headline font-bold text-lg">Final Settlement</h3>
            </div>
            <div className="bg-surface-container-high rounded-xl overflow-hidden shadow-xl">
              <div className="p-6 bg-primary text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-label uppercase tracking-widest opacity-70">Total Amount Due</p>
                    <h4 className="text-4xl font-headline font-extrabold tracking-tighter">₹45.00</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-label opacity-70">Ride: 45 mins</p>
                    <p className="text-xs font-label opacity-70">Rate: ₹1/min</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6 bg-white">
                <div className="flex flex-col items-center p-4 rounded-xl border-2 border-dashed border-surface-container">
                  <p className="text-xs font-label text-secondary font-bold mb-3 uppercase tracking-wider">Scan to Pay Owner Directly</p>
                  <div className="w-32 h-32 bg-slate-50 flex items-center justify-center border border-slate-100">
                    <QrCode className="w-24 h-24 text-slate-300" />
                  </div>
                  <p className="text-[10px] text-on-surface-variant mt-2 font-label">UPI ID: aarav.plaksha@okhdfc</p>
                </div>
                <div className="space-y-3">
                  <button 
                    onClick={() => setState('idle')}
                    className="w-full bg-primary text-white font-headline font-bold py-4 rounded-full flex items-center justify-center gap-3 transition-transform active:scale-95"
                  >
                    <Wallet className="w-5 h-5" />
                    Pay via Razorpay
                  </button>
                  <button 
                    onClick={() => setState('idle')}
                    className="w-full border-2 border-primary text-primary font-headline font-bold py-4 rounded-full transition-transform active:scale-95"
                  >
                    Cash Settlement
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
