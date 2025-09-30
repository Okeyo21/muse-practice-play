import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, PlayCircle, Volume2 } from "lucide-react";

const solfegePatterns = [
  { notes: ["Do", "Re", "Mi"], pattern: "C - D - E", description: "Ascending major steps", difficulty: "Easy" },
  { notes: ["Do", "Mi", "Sol"], pattern: "C - E - G", description: "Major triad", difficulty: "Easy" },
  { notes: ["Sol", "Fa", "Mi", "Re", "Do"], pattern: "G - F - E - D - C", description: "Descending scale", difficulty: "Easy" },
  { notes: ["Do", "Re", "Mi", "Fa", "Sol"], pattern: "C - D - E - F - G", description: "Five-note scale", difficulty: "Medium" },
  { notes: ["Mi", "Re", "Do", "Re", "Mi"], pattern: "E - D - C - D - E", description: "Melodic pattern", difficulty: "Medium" },
  { notes: ["Do", "Mi", "Sol", "Mi", "Do"], pattern: "C - E - G - E - C", description: "Arpeggio pattern", difficulty: "Medium" },
  { notes: ["Do", "Re", "Mi", "Fa", "Sol", "La", "Ti", "Do"], pattern: "C - D - E - F - G - A - B - C", description: "Full octave scale", difficulty: "Hard" },
  { notes: ["Do", "Ti", "La", "Sol", "Fa", "Mi", "Re", "Do"], pattern: "C - B - A - G - F - E - D - C", description: "Descending octave", difficulty: "Hard" },
  { notes: ["Sol", "Do", "Mi", "Sol", "Do"], pattern: "G - C - E - G - C", description: "Extended arpeggio", difficulty: "Hard" },
];

const keys = ["C Major", "G Major", "D Major", "F Major", "A Minor", "E Minor"];

export const SolfegeExercise = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [currentKey, setCurrentKey] = useState("C Major");

  const generateNewExercise = () => {
    const randomIndex = Math.floor(Math.random() * solfegePatterns.length);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setCurrentExercise(randomIndex);
    setCurrentKey(randomKey);
  };

  const exercise = solfegePatterns[currentExercise];
  const difficultyColor = {
    Easy: "bg-secondary/20 text-secondary-foreground",
    Medium: "bg-primary/20 text-primary-foreground",
    Hard: "bg-accent/20 text-accent-foreground",
  };

  return (
    <Card className="border-border/50 hover:shadow-musical transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Solfege Exercise</CardTitle>
          <Badge className={difficultyColor[exercise.difficulty as keyof typeof difficultyColor]}>
            {exercise.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Key</span>
            <span className="text-lg font-bold">{currentKey}</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-3 min-h-[100px] bg-card rounded-lg border-2 border-border p-4">
              {exercise.notes.map((note, index) => (
                <div key={index} className="flex flex-col items-center gap-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-musical">
                    {note}
                  </div>
                  {index < exercise.notes.length - 1 && (
                    <span className="text-muted-foreground">→</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-sm font-mono text-muted-foreground">{exercise.pattern}</p>
              <p className="text-sm text-muted-foreground">{exercise.description}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={generateNewExercise}
            className="flex-1 gap-2"
            variant="outline"
          >
            <RefreshCw className="w-4 h-4" />
            New Pattern
          </Button>
          <Button className="flex-1 gap-2">
            <Volume2 className="w-4 h-4" />
            Play
          </Button>
        </div>

        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center">
            Sing along using solfege syllables. Generate unlimited exercises to improve!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
