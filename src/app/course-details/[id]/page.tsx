// File: src/app/course-details/[id]/page.tsx
import { notFound } from "next/navigation";
import CourseDetailsClient from "@/features/home/course-details-client";
import { getAllCoursesDashboard } from "@/api/lib/all-courses.dashboard";

interface PageProps {
  params: Promise<{ id: string }>; // as Next infers
}


export default async function CourseDetailsPage(props: PageProps) {
  const { id } = await props.params; // ✅ Await here

  const allCourses = await getAllCoursesDashboard();
  const course = allCourses.find((c: any) => c._id === id);

  if (!course) return notFound();

  return <CourseDetailsClient course={course} />;
}

