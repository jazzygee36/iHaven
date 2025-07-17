// app/course-details/[id]/page.tsx
export const dynamic = "force-dynamic"; 

import { notFound } from "next/navigation";
import CourseDetailsClient from "@/features/home/course-details-client";
import { getAllCoursesDashboard } from "@/api/lib/all-courses.dashboard";

interface PageProps {
  params: { id: string };
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const courseId = params.id; // params is already resolved here

  const allCourses = await getAllCoursesDashboard();
  const course = allCourses.find((c: any) => c._id.toString() === courseId);

  if (!course) return notFound();

  return <CourseDetailsClient course={course} />;
}
