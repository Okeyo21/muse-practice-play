import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, PlayCircle } from "lucide-react";

const rhythmPatterns = [
  { pattern: "♩ ♩ ♩ ♩", description: "Four quarter notes", difficulty: "Easy" },
  { pattern: "♩ ♪ ♪ ♩", description: "Quarter, two eighths, quarter", difficulty: "Easy" },
  { pattern: "♪ ♪ ♪ ♪ ♩ ♩", description: "Four eighths, two quarters", difficulty: "Easy" },
  { pattern: "♩ ♪ ♪ ♪ ♪ ♩", description: "Mixed pattern", difficulty: "Medium" },
  { pattern: "♩. ♪ ♩ ♩", description: "Dotted quarter, eighth, two quarters", difficulty: "Medium" },
  { pattern: "𝅘𝅥𝅮 𝅘𝅥𝅮 𝅘𝅥𝅮 𝅘𝅥𝅮 ♩ ♩", description: "Four sixteenths, two quarters", difficulty: "Medium" },
  { pattern: "♩ 𝅘𝅥𝅮 𝅘𝅥𝅮 ♪ ♪ ♩", description: "Complex mixed pattern", difficulty: "Hard" },
  { pattern: "♩. ♪ ♪ ♪ ♩", description: "Dotted rhythm with eighths", difficulty: "Hard" },
  { pattern: "𝅘𝅥𝅮 𝅘𝅥𝅮 ♪ 𝅘𝅥𝅮 𝅘𝅥𝅮 ♪ ♩", description: "Sixteenth note patterns", difficulty: "Hard" },
];

const timeSignatures = ["4/4", "3/4", "6/8", "2/4"];

export const RhythmExercise = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [timeSignature, setTimeSignature] = useState("4/4");

  const generateNewExercise = () => {
    const randomIndex = Math.floor(Math.random() * rhythmPatterns.length);
    const randomTime = timeSignatures[Math.floor(Math.random() * timeSignatures.length)];
    setCurrentExercise(randomIndex);
    setTimeSignature(randomTime);
  };

  const exercise = rhythmPatterns[currentExercise];
  const difficultyColor = {
    Easy: "bg-secondary/20 text-secondary-foreground",
    Medium: "bg-primary/20 text-primary-foreground",
    Hard: "bg-accent/20 text-accent-foreground",
  };

  return (
    <Card className="border-border/50 hover:shadow-musical transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Rhythm Exercise</CardTitle>
          <Badge className={difficultyColor[exercise.difficulty as keyof typeof difficultyColor]}>
            {exercise.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Time Signature</span>
            <span className="text-2xl font-bold">{timeSignature}</span>
          </div>
          
          <div className="flex items-center justify-center min-h-[120px] bg-card rounded-lg border-2 border-border">
            <div className="text-5xl md:text-6xl font-serif tracking-wider select-none">
              {exercise.pattern}
            </div>
          </div>
          
          <p className="text-sm text-center text-muted-foreground">{exercise.description}</p>
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
            <PlayCircle className="w-4 h-4" />
            Play
          </Button>
        </div>

        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center">
            Clap or tap along with the rhythm. Click "New Pattern" for unlimited practice!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
