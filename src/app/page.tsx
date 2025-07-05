import AutoScrollCardSection from "@/features/home/featured-courses";
import CourseCards from "@/features/home/available-course";
import CallToAction from "@/features/home/call-action";
import CommunityHubs from "@/features/home/hub";
import StepProcess from "@/features/home/step-process";
import Testimony from "@/features/home/testimony";
import TextWithCarousel from "@/features/home/TextWithCarousel";
import VideoCarousel from "@/features/home/videos";

export default function Home() {
  return (
    <div>
      <TextWithCarousel />
      <CourseCards />
      <CommunityHubs/>
      <AutoScrollCardSection/>

      <VideoCarousel/>
      <Testimony/>
      <StepProcess/>
      <CallToAction/>
    </div>
  );
}
