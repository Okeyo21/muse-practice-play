import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music2, Gauge, Clock, Layers } from "lucide-react";

const categories = [
  {
    icon: Music2,
    title: "Scales & Modes",
    description: "Master major, minor, pentatonic scales and explore modal theory",
    lessons: 12,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Layers,
    title: "Chords & Harmony",
    description: "Build triads, seventh chords, and understand chord progressions",
    lessons: 15,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Gauge,
    title: "Intervals",
    description: "Identify and apply intervals in melodies and harmonies",
    lessons: 8,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Clock,
    title: "Rhythm & Time",
    description: "Learn time signatures, rhythmic patterns, and syncopation",
    lessons: 10,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export const LessonCategories = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore comprehensive lessons covering all aspects of music theory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-musical transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{category.lessons} lessons</span>
                    <span className={`${category.color} font-medium`}>Start →</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
