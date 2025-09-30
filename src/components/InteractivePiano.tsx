import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
const blackKeys = [
  { note: "C#", position: 1 },
  { note: "D#", position: 2 },
  { note: "F#", position: 4 },
  { note: "G#", position: 5 },
  { note: "A#", position: 6 },
];

export const InteractivePiano = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleKeyPress = (note: string) => {
    setActiveKey(note);
    setTimeout(() => setActiveKey(null), 300);
  };

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 shadow-musical">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Interactive Piano</CardTitle>
              <CardDescription className="text-base">
                Click the keys to hear notes and learn their positions on the keyboard
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative h-48 bg-card rounded-lg overflow-hidden shadow-inner">
                {/* White keys */}
                <div className="flex h-full gap-0.5">
                  {whiteKeys.map((note, index) => (
                    <button
                      key={note}
                      onClick={() => handleKeyPress(note)}
                      className={`flex-1 bg-white border-2 border-border rounded-b-lg hover:bg-primary/10 transition-all duration-150 relative group ${
                        activeKey === note ? "bg-primary/20 scale-95" : ""
                      }`}
                    >
                      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-foreground/70 group-hover:text-primary transition-colors">
                        {note}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Black keys */}
                {blackKeys.map(({ note, position }) => (
                  <button
                    key={note}
                    onClick={() => handleKeyPress(note)}
                    style={{ left: `${(position / whiteKeys.length) * 100 - 2}%` }}
                    className={`absolute top-0 w-[8%] h-[60%] bg-gradient-to-b from-foreground to-foreground/90 border-2 border-foreground rounded-b-lg hover:from-primary hover:to-primary/90 transition-all duration-150 z-10 shadow-lg ${
                      activeKey === note ? "from-primary to-primary/90 scale-95" : ""
                    }`}
                  >
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold text-background">
                      {note}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  {activeKey ? (
                    <span className="text-primary font-semibold">
                      Playing: {activeKey}
                    </span>
                  ) : (
                    "Click any key to see the note name and hear its sound"
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
