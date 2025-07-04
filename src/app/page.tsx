import CourseCards from "@/features/home/available-course";
import CommunityHubs from "@/features/home/hub";
import TextWithCarousel from "@/features/home/TextWithCarousel";

export default function Home() {
  return (
    <div>
      <TextWithCarousel />
      <CourseCards />
      <CommunityHubs/>
    </div>
  );
}
