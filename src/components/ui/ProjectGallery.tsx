import React, { useEffect, useRef, useState } from 'react';
import { Project, ProjectShot } from '../../types';
import { ProjectPreviewMockup } from './ProjectPreviewMockup';

interface ProjectGalleryProps {
  project: Project;
  onClose: () => void;
}

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // A cached image can finish before React attaches onLoad.
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && (
        <div
          role="status"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-canvas-subtle"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-subtle">
            Loading image
          </span>
          <span className="h-px w-10 animate-pulse bg-ink/30" />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-contain transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
};

const ShotPlaceholder: React.FC<{ projectTitle: string; shot: ProjectShot; index: number }> = ({
  projectTitle,
  shot,
  index,
}) => (
  <div className="flex h-full w-full select-none flex-col justify-between bg-canvas-subtle p-6 sm:p-10">
    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-subtle">
      <span>Screen slot {String(index + 1).padStart(2, '0')}</span>
      <span>Capture pending</span>
    </div>
    <div className="space-y-3">
      <p className="font-mono text-[10px] uppercase tracking-widest text-ink-subtle">
        Interface preview
      </p>
      <p className="font-heading text-2xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        {shot.label}
      </p>
    </div>
    <div className="border-t border-border-subtle pt-4 font-mono text-[10px] uppercase tracking-widest text-ink-subtle">
      {projectTitle}
    </div>
  </div>
);

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, onClose }) => {
  const [index, setIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const shots = project.gallery;
  const count = shots.length;
  const shot = shots[index];

  const goTo = (next: number) => setIndex((next + count) % count);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setIndex((current) => (current + 1) % count);
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setIndex((current) => (current - 1 + count) % count);
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [count]);

  return (
    <div className="fixed inset-0 z-[60] flex">
      <div
        className="absolute inset-0 bg-canvas/70 backdrop-blur-xl"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} gallery`}
        className="relative z-10 mx-auto flex h-full w-full max-w-[1180px] flex-col px-4 py-5 sm:px-8 sm:py-8"
      >
        <div className="flex items-start justify-between gap-4 pb-4">
          <div className="min-w-0">
            <p className="truncate font-mono text-[11px] uppercase tracking-widest text-ink-subtle">
              {project.number} / {project.category} · {project.role}
            </p>
            <h3 className="mt-1 truncate font-heading text-lg font-bold tracking-tight text-ink sm:text-2xl">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-canvas/80 text-ink backdrop-blur transition-colors hover:bg-ink hover:text-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="relative min-h-0 flex-1">
          <div className="relative h-full w-full overflow-hidden border border-border-subtle bg-canvas-subtle">
            {shot.src ? (
              <GalleryImage key={index} src={shot.src} alt={shot.label} />
            ) : shot.mockup ? (
              <div className="h-full w-full p-4 sm:p-8">
                <ProjectPreviewMockup projectId={project.id} />
              </div>
            ) : (
              <ShotPlaceholder projectTitle={project.title} shot={shot} index={index} />
            )}
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-canvas/85 text-ink shadow-sm backdrop-blur transition-colors hover:bg-ink hover:text-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-canvas/85 text-ink shadow-sm backdrop-blur transition-colors hover:bg-ink hover:text-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0 space-y-1.5" aria-live="polite">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-subtle">
              {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')} · {shot.label}
            </p>
            {shot.caption && (
              <p className="max-w-xl font-body text-sm leading-relaxed text-ink-muted">
                {shot.caption}
              </p>
            )}
          </div>

          <div className="flex shrink-0 items-center" role="group" aria-label="Gallery slides">
            {shots.map((item, itemIndex) => (
              <button
                key={`${item.label}-${itemIndex}`}
                type="button"
                onClick={() => goTo(itemIndex)}
                aria-label={`Show ${item.label}`}
                aria-current={itemIndex === index ? 'true' : undefined}
                className="flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    itemIndex === index ? 'w-6 bg-ink' : 'w-2.5 bg-ink/25'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
