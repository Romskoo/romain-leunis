import { getAllSlugs } from '../../../data/projects';
import ProjectPageClient from './ProjectPageClient';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  return <ProjectPageClient slug={slug} />;
}
