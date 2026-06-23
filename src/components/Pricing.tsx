import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Check, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with Japanese vocabulary",
    features: [
      "Full access to core features:",
      "Spaced Repetition System (SRS)",
      "Pre-made decks (Core 10K, JLPT N5-N1, and more)",
      "Audio for all vocabulary and example sentences",
      "Unlimited reviews",
      "Progress tracking and statistics",
      "Offline mode",
      "Ad-free"
    ],
    cta: "Start Learning Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "per month",
    description: "For serious learners ready to accelerate their progress",
    features: [
      "Everything in Free",
      "Unlimited custom flashcards",
      "Create custom decks",
      "Support the developer and future development",
    ],
    cta: "Start Learning Free",
    popular: false
  },
  {
    name: "Lifetime",
    price: "$49.99",
    period: "one-time",
    description: "Make a one-time investment in your Japanese journey",
    features: [
      "Everything in Pro",
      "Lifetime access to all features",
      "Future feature updates included",
      "Early access to beta features",
    ],
    cta: "Start Learning Free",
    popular: true
  }
];

export function Pricing() {
  return (
    <section className="px-6 py-24 bg-background" id="pricing">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 mb-4">PRICING</h2>
          <h3 className="text-4xl sm:text-5xl tracking-tight mb-4">
            Choose your plan
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you're ready. All plans include a 14-day money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative flex flex-col ${
                plan.popular 
                  ? 'border-blue-500 border-2 shadow-xl scale-105' 
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 gap-1">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-5xl">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center">
                        <Check className="h-3 w-3 text-blue-600 dark:text-blue-300" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.popular ? "default" : "secondary"}
                  size="lg"
                >
                  <a href="https://app.torii-srs.com/">{plan.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
