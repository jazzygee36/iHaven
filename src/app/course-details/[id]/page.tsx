import { notFound } from "next/navigation";
import { courses } from "@/utils/courses";
import BackArrow from "@/assets/icons/back-arrow";
import HomeButton from "@/components/button";
import Image from "next/image";


interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { id } = await params; // Wait for params
  const courseId = parseInt(id, 10);
  const course = courses.find((c) => c.id === courseId);

  if (!course) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="my-4">
        <BackArrow />
      </div>
      <div className='relative w-full h-64 8'>
        <Image
        src={course.image}
        alt={course.course}
       fill

        className="w-full h-64 object-cover rounded-lg shadow"
      />
      </div>
      <div className="mt-8 space-y-4 flex w-full md:w-1/2 flex-col m-auto">
        <h1 className="text-3xl font-bold text-gray-800">{course.course}</h1>
        <p className="text-gray-500 border-b-gray-700 pb-2">
          {course.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Instructor:</p>
          <p className="text-gray-500">{course.title}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Level:</p>
          <p className="text-gray-600 font-semibold">{course.level}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-semibold">Duration:</p>
          <p className="text-gray-600 font-semibold">{course.duration}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Price</p>
          <p className="text-lg font-semibold text-green-700">
            {course.price}
          </p>
        </div>
        <HomeButton
          title={"Enroll Now"}
          type={"button"}
          bg={"#FF6933"}
          width={""}
          height={"45px"}
        />
      </div>
    </section>
  );
}

// ✅ Only this function should be async
export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}
