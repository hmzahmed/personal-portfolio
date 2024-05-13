import { projects } from "@/data/constants";

export default function ProjectDetailPage({
  params: { id: projectId },
}: {
  params: { id: string };
}) {
  const project = projects[parseInt(projectId) - 1];
  return <div className="">Coming Soon</div>;
}
