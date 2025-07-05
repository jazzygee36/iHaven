import Link from "next/link";
import { courses } from "@/utils/courses"; // ✅ correct path
import { CourseProps } from "@/utils/interface";
import Image from "next/image";

const CourseCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 md:px-10 py-12">
      <h2 className="text-[25px] md:text-3xl font-bold text-center text-gray-800 mb-10">
        Our Popular Courses
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
        {courses.map((course: CourseProps) => (
          <Link
            key={course.id}
            href={`/course-details/${course.id}`} // ✅ Use ID
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative w-full h-48">
              <Image
                src={course.image}
                alt={course.course}
                fill
                className="object-cover rounded-lg"
                priority // optional: preload important images
              />
            </div>

            <div className="p-2 md:p-5 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-yellow-500 flex items-center gap-1">
                  {"★".repeat(course.rating)}
                  {"☆".repeat(5 - course.rating)}
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  {course.duration}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {course.course}
              </h3>
              <p className="text-sm text-gray-500">
                Instructor: {course.title}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-600 mt-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                  {course.price}
                </span>
                <span className="underline text-[#FF6933] px-3 py-1 rounded-full font-medium">
                  Enrol
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CourseCards;
