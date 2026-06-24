import { BarChart3, BookOpen, BookPlus, Cloud, Headphones, Keyboard, Repeat, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    icon: Repeat,
    title: "Spaced Repetition System",
    description: "Our battle-tested SSR schedules words at the right intervals to move them into long-term memory.",
    color: "text-blue-600 dark:text-blue-300",
    bgColor: "bg-blue-50 dark:bg-blue-950/40"
  },
  {
    icon: Keyboard,
    title: "Active Recall Reviews",
    description: "Type answers instead of guessing multiple choice to build stronger recall.",
    color: "text-purple-600 dark:text-purple-300",
    bgColor: "bg-purple-50 dark:bg-purple-950/40"
  },
  {
    icon: BookOpen,
    title: "Core 10k + JLPT Modes",
    description: "Learn the 10,000 most common words with focused study options for JLPT N5-N1, kana-only vocabulary, and more.",
    color: "text-green-600 dark:text-green-300",
    bgColor: "bg-green-50 dark:bg-green-950/40"
  },
  {
    icon: Headphones,
    title: "Audio Review Mode",
    description: "Train listening with vocab and sentence audio from native speakers, plus AI-powered text-to-speech options for Japanese and English.",
    color: "text-orange-600 dark:text-orange-300",
    bgColor: "bg-orange-50 dark:bg-orange-950/40"
  },
  {
    icon: Zap,
    title: "Endless Practice",
    description: "Study outside the SRS schedule with highly customizable self-study sessions and optional Quick Review flashcards.",
    color: "text-yellow-600 dark:text-yellow-300",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/40"
  },
  {
    icon: Cloud,
    title: "Offline-First + Sync",
    description: "Keep studying without a connection using local data storage, then sync progress across devices when you're back online.",
    color: "text-pink-600 dark:text-pink-300",
    bgColor: "bg-pink-50 dark:bg-pink-950/40"
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Track learned vocabulary, answer accuracy, study time, review forecasts, and SRS stage distribution.",
    color: "text-indigo-600 dark:text-indigo-300",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/40"
  },
  {
    icon: BookPlus,
    title: "Custom Vocabulary",
    description: "Add your own words and phrases manually or from dictionary search, then memorize them with the same SRS workflow.",
    color: "text-red-600 dark:text-red-300",
    bgColor: "bg-red-50 dark:bg-red-950/40",
    pro: true
  }
];

export function Features() {
  return (
    <section className="px-6 py-24 bg-background" id="features">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-indigo-600">FEATURES</h2>
          <h3 className="mb-4 text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl">
            Built for long-term vocabulary retention
          </h3>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            SRS, typed recall, and practical study tools that help Japanese words stay in memory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-slate-200 bg-white shadow-sm shadow-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-slate-100 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    {feature.pro ? (
                      <Badge variant="secondary" className="uppercase tracking-wide">
                        Pro
                      </Badge>
                    ) : null}
                  </div>
                  <CardTitle className="text-xl font-medium">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
