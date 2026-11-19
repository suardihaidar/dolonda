import React from 'react';

interface ProjectPreviewMockupProps {
  projectId: string;
}

export const ProjectPreviewMockup: React.FC<ProjectPreviewMockupProps> = ({ projectId }) => {
  if (projectId === 'bali-villa') {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#EAE7DC] text-[#2B2B28] rounded-2xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner border border-stone-300/60 font-sans select-none">
        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-300">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-sm tracking-widest uppercase">
              VILLA ASMARA
            </span>
            <span className="text-[10px] font-mono text-stone-600 bg-stone-200/80 px-2 py-0.5 rounded">
              ULUWATU
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs font-serif italic text-stone-600">
            <span>Suites</span>
            <span>Dining</span>
            <span>Sanctuary</span>
          </div>
          <div className="text-[11px] font-mono bg-[#2B2B28] text-white px-3 py-1 rounded-full">
            Reserve
          </div>
        </div>

        {/* Mockup Centerpiece / Hero representation */}
        <div className="my-auto py-4 space-y-3">
          <div className="inline-block bg-white/70 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase text-stone-700">
            Exclusive Clifftop Retreat
          </div>
          <p className="font-heading text-xl sm:text-2xl font-semibold text-stone-900 leading-snug">
            Where Balinese heritage meets contemporary oceanfront serenity.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-stone-200 space-y-1">
              <span className="text-[10px] font-mono uppercase text-stone-500">Ocean Villa</span>
              <p className="font-heading text-sm font-bold text-stone-900">Cliffside Suite</p>
              <span className="text-[10px] text-stone-600 font-mono">From $450 / night</span>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-stone-200 space-y-1">
              <span className="text-[10px] font-mono uppercase text-stone-500">Concierge</span>
              <p className="font-heading text-sm font-bold text-stone-900">WhatsApp Booking</p>
              <span className="text-[10px] text-emerald-700 font-mono font-medium">Instant confirmation</span>
            </div>
          </div>
        </div>

        {/* Mockup Footer bar */}
        <div className="pt-3 border-t border-stone-300 flex items-center justify-between text-[11px] font-mono text-stone-600">
          <span>Private Pool · Butler Service · Ocean View</span>
          <span className="font-semibold text-stone-800">4.9 ★ (84 reviews)</span>
        </div>
      </div>
    );
  }

  // SaaS Analytics Dashboard Mockup
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#18181B] text-zinc-100 rounded-2xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner border border-zinc-800 font-sans select-none">
      {/* Mockup Top Navigation Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-lime-accent" />
          <span className="font-heading font-semibold text-xs tracking-wider uppercase text-zinc-300">
            Vortex Pulse
          </span>
          <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
            v2.4
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
          <span>Filter: Last 30 Days</span>
        </div>
        <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live telemetry
        </div>
      </div>

      {/* Mockup Metrics Cards */}
      <div className="my-auto py-3 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-zinc-900/90 p-2.5 sm:p-3 rounded-xl border border-zinc-800 space-y-0.5">
            <span className="text-[10px] font-mono text-zinc-400">Total ARR</span>
            <p className="font-heading text-base sm:text-lg font-bold text-white">$142.8k</p>
            <span className="text-[10px] text-emerald-400 font-mono">+18.4%</span>
          </div>
          <div className="bg-zinc-900/90 p-2.5 sm:p-3 rounded-xl border border-zinc-800 space-y-0.5">
            <span className="text-[10px] font-mono text-zinc-400">Active Nodes</span>
            <p className="font-heading text-base sm:text-lg font-bold text-white">1,248</p>
            <span className="text-[10px] text-emerald-400 font-mono">100% online</span>
          </div>
          <div className="bg-zinc-900/90 p-2.5 sm:p-3 rounded-xl border border-zinc-800 space-y-0.5">
            <span className="text-[10px] font-mono text-zinc-400">P99 Latency</span>
            <p className="font-heading text-base sm:text-lg font-bold text-white">42ms</p>
            <span className="text-[10px] text-emerald-400 font-mono">-12ms</span>
          </div>
        </div>

        {/* Visual Simulated Bar Chart */}
        <div className="bg-zinc-900/70 p-3 rounded-xl border border-zinc-800 space-y-2">
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
            <span>Throughput Activity</span>
            <span>Peak: 4.8k req/s</span>
          </div>
          <div className="flex items-end justify-between gap-1.5 h-12 pt-2">
            {[40, 65, 55, 80, 70, 95, 85, 100, 75, 90, 80, 100].map((val, i) => (
              <div
                key={i}
                className="flex-1 bg-zinc-800 hover:bg-lime-accent/80 transition-colors rounded-t-sm"
                style={{ height: `${val}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mockup Bottom Status */}
      <div className="pt-2.5 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span>Region: ap-southeast-1</span>
        <span className="text-zinc-400">Synced: Just now</span>
      </div>
    </div>
  );
};
