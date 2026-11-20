import React from 'react';
import { Project } from '../../types';
import { ProjectPreviewMockup } from './ProjectPreviewMockup';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <article
      className="group"
      aria-labelledby={`project-title-${project.id}`}
    >
      <div
        className={`flex flex-col ${
          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } gap-0 lg:gap-0 items-stretch border border-border-subtle`}
      >
        {/* Visual canvas — full bleed, no rounded corners */}
        <div className="lg:w-[55%] flex-shrink-0 overflow-hidden bg-canvas-subtle">
          <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]">
            <ProjectPreviewMockup projectId={project.id} />
          </div>
        </div>

        {/* Case study text — editorial narrative format */}
        <div className="lg:w-[45%] flex flex-col justify-between p-8 sm:p-10 md:p-12 space-y-8">
          {/* Top: numbering + concept badge */}
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-xs text-ink-subtle uppercase tracking-widest">
              {project.number} / {project.category}
            </span>
            {project.isConcept && (
              <span className="shrink-0 font-mono text-[11px] text-indigo-accent border border-indigo-accent/30 px-2.5 py-1">
                Concept Study
              </span>
            )}
          </div>

          {/* Title — editorial scale */}
          <div className="space-y-5">
            <h3
              id={`project-title-${project.id}`}
              className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-ink tracking-tight leading-tight"
            >
              {project.title}
            </h3>

            {/* Description prose */}
            <p className="font-body text-ink-muted text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture note — the editorial alternative to bullet lists */}
          <div className="space-y-3 border-l-2 border-border-subtle pl-5">
            <p className="font-mono text-xs text-ink-subtle uppercase tracking-widest">
              Engineering Approach
            </p>
            <p className="font-body text-sm text-ink-muted leading-relaxed">
              {project.architectureNote}
            </p>
          </div>

          {/* Footer: role + stack metadata */}
          <div className="pt-4 border-t border-border-subtle space-y-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-xs">
              <span className="text-ink-subtle">Role</span>
              <span className="text-ink font-medium">{project.role}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-canvas border border-border-subtle font-mono text-[11px] text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
