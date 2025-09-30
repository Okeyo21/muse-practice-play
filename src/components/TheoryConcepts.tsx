import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const concepts = [
  {
    title: "Circle of Fifths",
    description: "Understand key relationships and chord progressions",
    level: "Intermediate",
    topics: ["Key Signatures", "Modulation", "Chord Relations"],
  },
  {
    title: "Chord Construction",
    description: "Build major, minor, diminished, and augmented chords",
    level: "Beginner",
    topics: ["Triads", "Seventh Chords", "Extensions"],
  },
  {
    title: "Scale Patterns",
    description: "Learn major, minor, and modal scale patterns",
    level: "Beginner",
    topics: ["Major Scales", "Natural Minor", "Modes"],
  },
  {
    title: "Voice Leading",
    description: "Master smooth transitions between chords",
    level: "Advanced",
    topics: ["Common Tones", "Contrary Motion", "Resolutions"],
  },
  {
    title: "Rhythm Notation",
    description: "Read and write rhythmic patterns accurately",
    level: "Beginner",
    topics: ["Note Values", "Rests", "Time Signatures"],
  },
  {
    title: "Harmonic Analysis",
    description: "Analyze chord progressions and harmonic functions",
    level: "Advanced",
    topics: ["Roman Numerals", "Function", "Cadences"],
  },
];

const levelColors = {
  Beginner: "bg-secondary/20 text-secondary-foreground hover:bg-secondary/30",
  Intermediate: "bg-primary/20 text-primary-foreground hover:bg-primary/30",
  Advanced: "bg-accent/20 text-accent-foreground hover:bg-accent/30",
};

export const TheoryConcepts = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Theory Concepts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore fundamental and advanced concepts with visual aids and practical examples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept, index) => (
            <Card 
              key={index}
              className="group hover:shadow-musical transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg">{concept.title}</CardTitle>
                  <Badge className={levelColors[concept.level as keyof typeof levelColors]}>
                    {concept.level}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {concept.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {concept.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
