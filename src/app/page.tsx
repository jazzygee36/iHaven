import AutoScrollCardSection from "@/features/home/featured-courses";
import CourseCards from "@/features/home/available-course";
import CallToAction from "@/features/home/call-action";
import StepProcess from "@/features/home/step-process";
import Testimony from "@/features/home/testimony";
import TextWithCarousel from "@/features/home/TextWithCarousel";
import VideoCarousel from "@/features/home/videos";
import HubDetails from "@/features/home/hub";
import FAQ from "@/features/home/faq";

export default function Home() {
  return (
    <div>
      <TextWithCarousel />
      <CourseCards />
      <HubDetails/>
      <AutoScrollCardSection/>
      <VideoCarousel/>
      <Testimony/>
      <StepProcess/>
      <CallToAction/>
      <FAQ/>
      
    </div>
  );
}
