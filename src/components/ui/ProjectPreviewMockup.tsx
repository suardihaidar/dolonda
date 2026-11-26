import React from 'react';

interface ProjectPreviewMockupProps {
  projectId: string;
}

export const ProjectPreviewMockup: React.FC<ProjectPreviewMockupProps> = ({ projectId }) => {
  if (projectId === 'bali-villa') {
    return (
      <div className="w-full h-full min-h-[320px] sm:min-h-[380px] bg-canvas-subtle text-ink p-5 sm:p-7 flex flex-col justify-between overflow-hidden border border-border-subtle select-none">
        {/* Mockup Header: Minimal Luxury Editorial */}
        <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
          <div className="flex items-baseline gap-2.5">
            <span className="font-heading font-bold text-sm sm:text-base tracking-[0.2em] uppercase text-ink">
              ASMARA
            </span>
            <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase">
              Uluwatu, Bali
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-xs tracking-wider uppercase text-ink-muted font-mono">
            <span>The Villas</span>
            <span>Wellness</span>
            <span>Journal</span>
          </div>
          <div className="text-[11px] font-mono font-medium tracking-wider uppercase bg-ink text-canvas px-3.5 py-1.5 rounded-full">
            Inquire
          </div>
        </div>

        {/* Centerpiece: Architectural Composition */}
        <div className="my-auto py-6 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-ink-muted">
            <span>Ref. 08°48'S 115°08'E</span>
            <span>—</span>
            <span>Cliffside Sanctuary</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-normal tracking-tight text-ink leading-snug">
            Architecture sculptured above the Indian Ocean.
          </h3>

          {/* Accommodation Highlights Frame */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="bg-canvas-card p-3.5 rounded-xl border border-border-subtle space-y-1">
              <div className="flex justify-between items-center text-[10px] font-mono text-ink-muted uppercase">
                <span>The Pavilion Suite</span>
                <span>420 m²</span>
              </div>
              <p className="font-heading text-sm font-semibold text-ink">Private Infinity Pool & Ocean Frontage</p>
              <p className="text-[11px] font-mono text-ink-muted pt-0.5">Rates from $580 / night</p>
            </div>

            <div className="bg-canvas-card p-3.5 rounded-xl border border-border-subtle space-y-1">
              <div className="flex justify-between items-center text-[10px] font-mono text-ink-muted uppercase">
                <span>Direct Booking</span>
                <span className="text-ink-muted font-medium">WhatsApp Priority</span>
              </div>
              <p className="font-heading text-sm font-semibold text-ink">Tailored Concierge Reservation</p>
              <p className="text-[11px] font-mono text-ink-muted pt-0.5">Instant booking confirmation</p>
            </div>
          </div>
        </div>

        {/* Footer Bar: Editorial Details */}
        <div className="pt-3.5 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-ink-muted">
          <span>Sustainable Limestone & Teak Craft</span>
          <span className="text-ink font-medium">Concept Hospitality Case Study</span>
        </div>
      </div>
    );
  }

  // SaaS Workspace & Telemetry Interface (Grounded, Anti-Slop, No Cheesy Fake Bar Charts)
  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[380px] bg-ink text-canvas p-5 sm:p-7 flex flex-col justify-between overflow-hidden border border-border-dark select-none font-mono">
      {/* Top Bar: Authentic Developer Console Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border-dark">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-ink/50" />
          <span className="font-heading font-semibold text-xs tracking-wider uppercase text-canvas">
            KINETIC EDGE
          </span>
          <span className="text-[10px] text-canvas/60 bg-canvas/5 px-2 py-0.5 rounded-full border border-border-dark">
            prod-cluster-01
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-canvas/60">
          <span className="text-canvas/60 text-[11px]">All Nodes Synchronized</span>
        </div>
      </div>

      {/* Structured Metric Overview */}
      <div className="my-auto py-5 space-y-4">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 text-left">
          <div className="bg-canvas/10 p-3 rounded-xl border border-border-dark space-y-1">
            <span className="text-[10px] text-canvas/60 uppercase tracking-wider">Edge Requests</span>
            <p className="font-heading text-lg sm:text-xl font-bold text-canvas tracking-tight">14.2M</p>
            <span className="text-[10px] text-lime-accent font-mono">↑ 8.4% vs last week</span>
          </div>

          <div className="bg-canvas/10 p-3 rounded-xl border border-border-dark space-y-1">
            <span className="text-[10px] text-canvas/60 uppercase tracking-wider">Median Latency</span>
            <p className="font-heading text-lg sm:text-xl font-bold text-canvas tracking-tight">28ms</p>
            <span className="text-[10px] text-canvas/60 font-mono">Global edge p50</span>
          </div>

          <div className="bg-canvas/10 p-3 rounded-xl border border-border-dark space-y-1">
            <span className="text-[10px] text-canvas/60 uppercase tracking-wider">Availability</span>
            <p className="font-heading text-lg sm:text-xl font-bold text-canvas tracking-tight">99.99%</p>
            <span className="text-[10px] text-lime-accent font-mono">Zero degraded zones</span>
          </div>
        </div>

        {/* Real-looking Routing Table */}
        <div className="bg-canvas/10 rounded-xl border border-border-dark p-3 space-y-2 text-xs">
          <div className="flex items-center justify-between text-[10px] text-canvas/60 border-b border-border-dark pb-1.5">
            <span>ENDPOINT ROUTE</span>
            <span>METHOD</span>
            <span>STATUS</span>
            <span>LATENCY</span>
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between text-canvas/80">
              <span className="text-canvas">/v1/telemetry/events</span>
              <span className="text-blue-light text-[10px]">POST</span>
              <span className="text-lime-accent text-[10px]">200 OK</span>
              <span className="text-canvas/60">19ms</span>
            </div>
            <div className="flex items-center justify-between text-canvas/80">
              <span className="text-canvas">/v1/auth/session</span>
              <span className="text-blue-light text-[10px]">GET</span>
              <span className="text-lime-accent text-[10px]">200 OK</span>
              <span className="text-canvas/60">14ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="pt-3 border-t border-border-dark flex items-center justify-between text-[11px] text-canvas/60">
        <span>Region: Asia-Pacific (Jakarta · Singapore · Tokyo)</span>
        <span className="text-canvas/60">Concept Application UI</span>
      </div>
    </div>
  );
};
