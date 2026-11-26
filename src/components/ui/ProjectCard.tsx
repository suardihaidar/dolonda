import React from 'react';
import { Project } from '../../types';
import { ProjectPreviewMockup } from './ProjectPreviewMockup';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpen }) => {
  const isEven = index % 2 === 0;

  return (
    <article className="group" aria-labelledby={`project-title-${project.id}`}>
      <div className="grid grid-cols-1 border border-border-subtle lg:grid-cols-12">
        {/* Media — 7 of 12 columns, click opens the gallery */}
        <div
          className={`overflow-hidden bg-canvas-subtle lg:col-span-7 ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-label={`Open ${project.title} gallery`}
            className="relative block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-accent"
          >
            <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.015]">
              {project.previewImage ? (
                <img
                  src={project.previewImage}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={2000}
                  height={1299}
                  className="h-full w-full object-contain object-center p-10"
                />
              ) : (
                <ProjectPreviewMockup projectId={project.id} />
              )}
            </div>
          </button>
        </div>

        {/* Case study text — 5 of 12 columns */}
        <div
          className={`flex flex-col justify-between space-y-8 p-8 sm:p-10 md:p-12 lg:col-span-5 ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
              {project.number} / {project.category}
            </span>
            <span
              className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] ${
                project.badgeTone === 'commissioned'
                  ? 'border-lime-accent bg-lime-accent text-ink'
                  : 'border-blue-accent/30 text-blue-accent'
              }`}
            >
              {project.badgeLabel}
            </span>
          </div>

          <div className="space-y-5">
            <h3
              id={`project-title-${project.id}`}
              className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight tracking-tight text-ink"
            >
              {project.title}
            </h3>
            <p className="font-body text-base leading-relaxed text-ink-muted">
              {project.description}
            </p>
          </div>

          <div className="space-y-3 border-l-2 border-border-subtle pl-5">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
              Engineering Approach
            </p>
            <p className="font-body text-sm leading-relaxed text-ink-muted">
              {project.architectureNote}
            </p>
          </div>

          <div className="space-y-3 border-t border-border-subtle pt-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-xs">
              <span className="text-ink-subtle">Role</span>
              <span className="font-medium text-ink">{project.role}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border-subtle bg-canvas px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-2 border-b border-ink pb-0.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-blue-accent hover:text-blue-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
            >
              View gallery
              <span aria-hidden="true" className="text-ink-subtle">
                {String(project.gallery.length).padStart(2, '0')} →
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
