import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Leonardo L.",
    role: "JLPT N2 Student",
    avatar: "LL",
    rating: 5,
    text: "Brilliant app. If you're studying japanese, Torii SRS is incredibly useful. I don't need any of the \"Pro\" features, but I think I'll go \"Pro\" to support the developer!"
  },
  {
    name: "Kyle W.",
    role: "Japanese Teacher",
    avatar: "KW",
    rating: 5,
    text: "Going to be a hit. One of the best Japanese vocab learning programs available with example sentences and high quality audio. Can't believe it's free. And free of ads."
  },
  {
    name: "Allison",
    role: "Software Developer",
    avatar: "A",
    rating: 5,
    text: "Love it so simple to use compared to anki"
  }
];

export function Testimonials() {
  return (
    <section className="px-6 py-24 bg-muted">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 mb-4">TESTIMONIALS</h2>
          <h3 className="text-4xl sm:text-5xl tracking-tight mb-4">
            Loved by learners worldwide
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful Japanese learners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-200">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
