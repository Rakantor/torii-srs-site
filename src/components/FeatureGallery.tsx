import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Check } from "lucide-react";

const galleryItems = [
  {
    id: "flashcards",
    title: "Smart Flashcards",
    description: "Interactive flashcards with kanji, hiragana, romaji, and English translations",
    features: [
      "Audio pronunciation by native speakers",
      "Stroke order animations for kanji",
      "Context-based example sentences",
      "Instant feedback on your answers"
    ],
    image: "https://images.unsplash.com/photo-1698510273393-a6302f3c90e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGthbmppJTIwc3R1ZHklMjBsZWFybmluZ3xlbnwxfHx8fDE3NzAyNDU0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "srs",
    title: "Spaced Repetition",
    description: "Intelligent review scheduling based on your performance and memory strength",
    features: [
      "Customizable review intervals",
      "Automatic difficulty adjustments",
      "Optimized for long-term retention",
      "Review forecasting and planning"
    ],
    image: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAxMjI1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "progress",
    title: "Progress Tracking",
    description: "Comprehensive analytics to monitor your learning journey and achievements",
    features: [
      "Daily, weekly, and monthly statistics",
      "Retention rate visualization",
      "Study streak tracking",
      "JLPT level progression"
    ],
    image: "https://images.unsplash.com/photo-1765978856539-b9247f2e0d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRleHQlMjBjaGFyYWN0ZXJzfGVufDF8fHx8MTc3MDI0NTQyOHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function FeatureGallery() {
  return (
    <section className="px-6 py-24 bg-muted">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 mb-4">HOW IT WORKS</h2>
          <h3 className="text-4xl sm:text-5xl tracking-tight mb-4">
            Experience the platform
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our core features designed to make Japanese vocabulary stick
          </p>
        </div>

        <Tabs defaultValue="flashcards" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            {galleryItems.map((item) => (
              <TabsTrigger key={item.id} value={item.id} className="text-sm sm:text-base">
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {galleryItems.map((item) => (
            <TabsContent key={item.id} value={item.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h4 className="text-3xl mb-4">{item.title}</h4>
                  <p className="text-lg text-muted-foreground mb-8">{item.description}</p>
                  
                  <ul className="space-y-4">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center">
                          <Check className="h-3 w-3 text-blue-600 dark:text-blue-300" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="order-1 lg:order-2">
                  <Card className="overflow-hidden shadow-xl border-border">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto"
                    />
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
