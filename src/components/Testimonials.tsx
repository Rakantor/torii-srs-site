import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "JLPT N2 Student",
    avatar: "SC",
    rating: 5,
    text: "This platform transformed my Japanese learning. The SRS system is incredibly effective - I went from N5 to N3 in just 6 months!"
  },
  {
    name: "Marcus Johnson",
    role: "Software Developer",
    avatar: "MJ",
    rating: 5,
    text: "As someone with a busy schedule, the quick review mode is perfect. I can study during my commute and the app keeps me on track."
  },
  {
    name: "Yuki Tanaka",
    role: "Japanese Teacher",
    avatar: "YT",
    rating: 5,
    text: "I recommend this to all my students. The analytics help them understand their progress, and the custom decks are great for tailored learning."
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
