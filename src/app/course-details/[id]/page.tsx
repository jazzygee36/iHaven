// app/course-details/[id]/page.tsx
import { notFound } from "next/navigation";
import { courses } from "@/utils/courses";
import CourseDetailsClient from "@/features/home/course-details-client";



interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseDetailsPage({ params }: PageProps) {
const { id } = await params; // Wait for params
  const courseId = parseInt(id, 10);
  const course = courses.find((c) => c.id === courseId);


  if (!course) return notFound();

  return <CourseDetailsClient course={course} />;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}


