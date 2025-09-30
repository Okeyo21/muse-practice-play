import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, TrendingUp } from "lucide-react";

export const ProgressTracker = () => {
  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Track Your Progress</h2>
            <p className="text-lg text-muted-foreground">
              Monitor your learning journey and celebrate achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-border/50 hover:shadow-musical transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Lessons Completed</CardTitle>
                <Trophy className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground mt-1">of 45 total lessons</p>
                <Progress value={53} className="mt-3" />
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-musical transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Practice Streak</CardTitle>
                <Target className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7 Days</div>
                <p className="text-xs text-muted-foreground mt-1">Keep it going!</p>
                <Progress value={70} className="mt-3" />
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-musical transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Skill Level</CardTitle>
                <TrendingUp className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Intermediate</div>
                <p className="text-xs text-muted-foreground mt-1">Great progress!</p>
                <Progress value={65} className="mt-3" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
