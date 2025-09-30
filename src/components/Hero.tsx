import { Button } from "@/components/ui/button";
import { Music, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative musical notes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 text-6xl animate-pulse">♪</div>
        <div className="absolute top-40 right-20 text-8xl animate-pulse delay-300">♫</div>
        <div className="absolute bottom-32 left-1/4 text-7xl animate-pulse delay-500">♩</div>
        <div className="absolute bottom-20 right-1/3 text-6xl animate-pulse delay-700">♬</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Music className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Master Music Theory</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Learn Music Theory
            <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
              With Practical Examples
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master scales, chords, intervals, and rhythm through interactive lessons and hands-on practice. 
            From beginner to advanced, learn at your own pace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="gap-2 shadow-musical hover:shadow-glow transition-all duration-300">
              <Play className="w-5 h-5" />
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
              Explore Lessons
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Interactive Practice</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-300" />
              <span>Visual Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-500" />
              <span>Real Examples</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
