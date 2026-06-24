import { Check } from "lucide-react";
import anywhereImage from "../assets/feature-gallery-anywhere.webp";
import decksImage from "../assets/feature-gallery-decks.webp";
import srsImage from "../assets/feature-gallery-srs.webp";
import typedRecallImage from "../assets/feature-gallery-typed-recall.webp";

const galleryItems = [
  {
    id: "decks",
    title: "Learn From Curated Decks",
    description: "Start with Core 10k vocabulary, JLPT-focused sets, kana-only words, or WaniKani supplement content.",
    features: [
      "Daily lessons introduce new words in manageable batches",
      "Vocabulary includes readings, meanings, parts of speech, and example sentences",
      "Pitch accent, furigana, and audio options support deeper study",
      "Prioritize, archive, or customize what enters your lesson queue"
    ],
    image: decksImage.src,
    cropEdges: true
  },
  {
    id: "typed-recall",
    title: "Practice With Typed Recall",
    description: "Reviews ask you to produce answers, not just recognize them, so you strengthen active memory.",
    features: [
      "Choose Japanese to English, English to Japanese, mixed, or Japanese-only reviews",
      "Type answers with romaji-to-kana input support",
      "Alternate meanings, readings, synonyms, and minor typos are handled gracefully",
      "Use Quick Review or audio-focused practice when you want a lighter session"
    ],
    image: typedRecallImage.src
  },
  {
    id: "srs",
    title: "Let SRS Schedule The Next Review",
    description: "Correct answers move words forward through SRS stages; missed words return sooner for reinforcement.",
    features: [
      "Words progress from Lesson through Rookie, Apprentice, Adept, Expert, and Sensei",
      "Missed answers move items back based on their current stage",
      "Daily review counts keep the workload visible",
      "Vacation Mode can pause scheduling while you are away"
    ],
    image: srsImage.src
  },
  {
    id: "anywhere",
    title: "Keep Studying Anywhere",
    description: "Torii is built for regular use, including offline study and flexible extra practice outside the SRS queue.",
    features: [
      "Lessons, reviews, self-study, and browsing work from local data",
      "Progress syncs across devices when you are online",
      "Self-Study lets you drill learned, custom, or archived vocabulary",
      "Add custom vocabulary manually or from dictionary search"
    ],
    image: anywhereImage.src
  }
];

export function FeatureGallery() {
  return (
    <section className="bg-gray-50/60 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-indigo-600">HOW IT WORKS</h2>
          <h3 className="mb-4 text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl">
            Build vocabulary through daily recall
          </h3>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Torii combines curated Japanese vocabulary, typed reviews, and an SRS schedule so each word comes back when it needs practice.
          </p>
        </div>

        <div className="space-y-20">
          {galleryItems.map((item, itemIndex) => (
            <div
              key={item.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={itemIndex % 2 === 1 ? "lg:order-2" : ""}>
                <h4 className="mb-4 text-2xl font-medium tracking-tight text-slate-800 lg:text-3xl">{item.title}</h4>
                <p className="mb-8 text-base leading-relaxed text-slate-600 sm:text-lg">{item.description}</p>
                
                <ul className="space-y-4">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                        <Check className="h-3 w-3 text-indigo-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={itemIndex % 2 === 1 ? "lg:order-1" : ""}>
                <div className="overflow-hidden rounded-2xl shadow-xl shadow-slate-300/40 ring-1 ring-slate-900/5">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className={`h-auto w-full ${item.cropEdges ? "scale-[1.02]" : ""}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
