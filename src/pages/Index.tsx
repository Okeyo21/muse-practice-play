import { Hero } from "@/components/Hero";
import { LessonCategories } from "@/components/LessonCategories";
import { InteractivePiano } from "@/components/InteractivePiano";
import { TheoryConcepts } from "@/components/TheoryConcepts";
import { ProgressTracker } from "@/components/ProgressTracker";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LessonCategories />
      <InteractivePiano />
      <TheoryConcepts />
      <ProgressTracker />
    </div>
  );
};

export default Index;
