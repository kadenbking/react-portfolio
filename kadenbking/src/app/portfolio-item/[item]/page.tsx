"use client";

import { getProject } from "@/util/ProjectInformation";
import PortfolioItemPage from "@/components/PortfolioItem";
import { notFound } from "next/navigation";

interface Props {
  params: {
    item: string;
  };
}

export default function PortfolioItem({ params }: Props) {
  const project = getProject(params.item);

  if (!project) {
    notFound();
  }

  return <PortfolioItemPage projectId={params.item} />;
}
