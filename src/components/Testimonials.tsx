import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Leonardo L.",
    role: "Google Play review",
    avatar: "LL",
    rating: 5,
    text: "Brilliant app. If you're studying japanese, Torii SRS is incredibly useful. I don't need any of the \"Pro\" features, but I think I'll go \"Pro\" to support the developer!"
  },
  {
    name: "Kyle W.",
    role: "Google Play review",
    avatar: "KW",
    rating: 5,
    text: "Going to be a hit. One of the best Japanese vocab learning programs available with example sentences and high quality audio. Can't believe it's free. And free of ads."
  },
  {
    name: "Yonas C.",
    role: "Google Play review",
    avatar: "YC",
    rating: 5,
    text: "Very useful app for learning japanese for beginners, I really love this app and the developers effort for making this amazing app. I really am thankful for them."
  },
  {
    name: "Allison",
    role: "Google Play review",
    avatar: "A",
    rating: 5,
    text: "Love it so simple to use compared to anki"
  },
  {
    name: "Keiko S.",
    role: "Google Play review",
    avatar: "KS",
    rating: 5,
    text: "Absolutely adore this app, thank you for making it. It's exactly what I needed to break through learning vocab. Esspecially with the to and from function for reviews."
  },
  {
    name: "Luca C.",
    role: "Google Play review",
    avatar: "LC",
    rating: 5,
    text: "I love this app especially coming from using both wanikani and bunpro. Whilst bunpro deal with my grammar wanikani does the kanji. I felt my vocab range not expanding though so found this and its perfect! I really love it. Especially the archive button! Total genius idea!!!"
  },
  {
    name: "Yiannos D.",
    role: "Google Play review",
    avatar: "YD",
    rating: 5,
    text: "Best app I have found for learning vocabulary (and I tried a lot!)"
  },
  {
    name: "Anonymous",
    role: "Google Play review",
    avatar: "A",
    rating: 4,
    text: "Pretty cool. The ux/ui needs some work/polish but overall it's my current favorite app to learn vocabulary"
  },
  {
    name: "Anonymous",
    role: "Google Play review",
    avatar: "A",
    rating: 5,
    text: "I love how the settings offer lots of useful customization options (especially the study modes!) in a way that is not overwhelming (the options are intuitive or come with a helpful explanation). Thanks for this great app!"
  },
  {
    name: "Anonymous",
    role: "Google Play review",
    avatar: "A",
    rating: 5,
    text: "Godlike SRS app. Like Anki but without any effort to set up."
  }
];

export function Testimonials() {
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-gray-50/60 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-indigo-600">TESTIMONIALS</h2>
          <h3 className="mb-4 text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl">
            Loved by learners worldwide
          </h3>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Join thousands of successful Japanese learners
          </p>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-6">
          <div className="flex w-max gap-8 animate-testimonials-marquee">
            {carouselItems.map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${index}`}
                aria-hidden={index >= testimonials.length}
                className="h-[26rem] w-[calc(100vw-3rem)] max-w-sm flex-none border-slate-200 bg-white shadow-sm shadow-slate-100 md:h-[22rem] md:w-[24rem]"
              >
                <CardContent className="flex h-full flex-col pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="mb-6 flex-1 text-slate-700">"{testimonial.text}"</p>
                  
                  <div className="mt-auto flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-indigo-100 text-indigo-700">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-slate-800">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
