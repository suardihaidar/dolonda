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
      className="group bg-canvas-card border border-border-subtle rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-ink/30 hover:shadow-lg"
      aria-labelledby={`project-title-${project.id}`}
    >
      <div
        className={`flex flex-col ${
          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } gap-8 lg:gap-12 items-stretch`}
      >
        {/* Visual Preview Container */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="relative w-full rounded-2xl overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
            <ProjectPreviewMockup projectId={project.id} />
          </div>
        </div>

        {/* Project Narrative & Details */}
        <div className="lg:w-1/2 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Header Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs text-ink-subtle uppercase tracking-wider">
                {project.number} / {project.category}
              </span>

              {/* Strict Concept Project Badge */}
              {project.isConcept && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas-subtle border border-border-subtle font-mono text-[11px] text-ink-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-accent" />
                  Concept Work
                </span>
              )}
            </div>

            {/* Project Title */}
            <h3
              id={`project-title-${project.id}`}
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight"
            >
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="font-body text-ink-muted text-base leading-relaxed">
              {project.description}
            </p>

            {/* Key Architectural & Functional Highlights */}
            <div className="space-y-2 pt-2">
              <p className="font-mono text-xs text-ink-subtle uppercase tracking-wider">
                Key Features Included:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-body text-ink">
                {project.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <span className="text-lime-accent font-bold mt-0.5">↳</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Area: Technologies & Actions */}
          <div className="pt-4 border-t border-border-subtle/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Technology Pills */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-canvas border border-border-subtle font-mono text-xs text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Indicators (with concept notice) */}
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-ink-subtle italic">
                Interactive Concept
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
