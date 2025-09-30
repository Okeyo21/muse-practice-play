import { RhythmExercise } from "./RhythmExercise";
import { SolfegeExercise } from "./SolfegeExercise";
import { Music4, Repeat } from "lucide-react";

export const ExerciseSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-4">
            <Repeat className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary-foreground">Unlimited Practice</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Master Rhythm & Solfege</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practice with unlimited exercises. Each time you click "New Pattern," you'll get a fresh challenge to develop your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <RhythmExercise />
          <SolfegeExercise />
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-primary rounded-xl p-8 text-center space-y-4">
            <Music4 className="w-12 h-12 mx-auto text-white" />
            <h3 className="text-2xl font-bold text-white">Practice Makes Perfect</h3>
            <p className="text-white/90">
              These exercises are designed to build your sight-reading and ear training skills. 
              Regular practice will help you recognize patterns faster and improve your musical fluency.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span>Rhythm Reading</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span>Pitch Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span>Sight-Singing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
