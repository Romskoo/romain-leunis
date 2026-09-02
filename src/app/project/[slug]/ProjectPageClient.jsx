'use client';

import ProjectDetail from '../../../views/ProjectDetail/ProjectDetail';
import { getProjectBySlug } from '../../../data/projects';

export default function ProjectPageClient({ slug }) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail project={project} />;
}
