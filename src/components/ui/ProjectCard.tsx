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
    <article className="group" aria-labelledby={`project-title-${project.id}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-border-subtle">
        {/* Media — 7 of 12 columns, tinted mat */}
        <div
          className={`lg:col-span-7 bg-canvas-subtle overflow-hidden ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
          aria-hidden="true"
        >
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.015]">
            {project.previewImage ? (
              <img
                src={project.previewImage}
                alt=""
                loading="lazy"
                decoding="async"
                width={1486}
                height={1782}
                className="w-full h-full object-contain object-top"
              />
            ) : (
              <ProjectPreviewMockup projectId={project.id} />
            )}
          </div>
        </div>

        {/* Case study text — 5 of 12 columns */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 md:p-12 space-y-8 ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-xs text-ink-subtle uppercase tracking-widest">
              {project.number} / {project.category}
            </span>
            <span
              className={`shrink-0 font-mono text-[11px] border px-2.5 py-1 ${
                project.badgeTone === 'commissioned'
                  ? 'bg-lime-accent text-ink border-lime-accent'
                  : 'text-indigo-accent border-indigo-accent/30'
              }`}
            >
              {project.badgeLabel}
            </span>
          </div>

          <div className="space-y-5">
            <h3
              id={`project-title-${project.id}`}
              className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-ink tracking-tight leading-tight"
            >
              {project.title}
            </h3>
            <p className="font-body text-ink-muted text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-3 border-l-2 border-border-subtle pl-5">
            <p className="font-mono text-xs text-ink-subtle uppercase tracking-widest">
              Engineering Approach
            </p>
            <p className="font-body text-sm text-ink-muted leading-relaxed">
              {project.architectureNote}
            </p>
          </div>

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
