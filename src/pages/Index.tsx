import { Hero } from "@/components/Hero";
import { LessonCategories } from "@/components/LessonCategories";
import { InteractivePiano } from "@/components/InteractivePiano";
import { TheoryConcepts } from "@/components/TheoryConcepts";
import { ProgressTracker } from "@/components/ProgressTracker";
import { ExerciseSection } from "@/components/ExerciseSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LessonCategories />
      <InteractivePiano />
      <ExerciseSection />
      <TheoryConcepts />
      <ProgressTracker />
    </div>
  );
};

export default Index;
