
import Image from 'next/image';
import Link from 'next/link';
import { Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { trips } from '@/lib/data';
import ClientOnly from '@/components/ClientOnly';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/MotionDiv';
import BookingForm from '@/components/BookingForm';
import { WhyUsCard, type WhyUsItem } from '@/components/WhyUsCard';
import type { Testimonial } from '@/lib/types';

const whyUsData: WhyUsItem[] = [
    {
        iconName: "Send",
        title: "Built for Busy People",
        description: "You don’t need to plan or overthink. Just pack your bag — we handle the rest."
    },
    {
        iconName: "Globe",
        title: "Weekend Departures, Every Week",
        description: "Regular Friday night getaways, perfectly timed for that much-needed escape."
    },
    {
        iconName: "Users",
        title: "Solo-Friendly, Group-Ready",
        description: "Come solo or bring your gang — you’ll always find people to vibe with."
    },
    {
        iconName: "Sparkles",
        title: "Real Experiences, Not Tourist Traps",
        description: "Cliff treks, bonfires, surf lessons — crafted by travellers, not tour agents."
    },
    {
        iconName: "Heart",
        title: "Personalized Touches",
        description: "Want that secret waterfall detour? Drop a request — we’ll try to make it happen."
    },
    {
        iconName: "Award",
        title: "Trusted by Real Travellers",
        description: "1000+ happy explorers, zero boring moments. Every trip is a new story."
    }
]

const testimonials: Testimonial[] = [
    {
        name: "Priya S.",
        avatar: "10",
        trip: "Gokarna Beach Escape",
        text: "Solo travel was never this easy or fun. I met amazing people and discovered a new favorite beach. Can't wait for the next one!"
    },
    {
        name: "Rohan M.",
        avatar: "11",
        trip: "Wayanad Jungle Escape",
        text: "The entire weekend was planned flawlessly. All I had to do was show up and have a great time. The bonfire nights are the best!"
    },
    {
        name: "Anjali D.",
        avatar: "12",
        trip: "Sakleshpur Adventure Camp",
        text: "A much-needed break from the city chaos. It felt like a school trip for adults. 10/10 would recommend to anyone feeling stuck in a rut."
    }
]


const headingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};


export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-2');
  const headline = "Weekend • Road • Repeat".split(" ");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section
          id="home"
          className="relative h-[70vh] md:h-screen w-full flex items-center justify-center text-center text-white"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          {heroImage && (
             <MotionDiv
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                priority
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
              />
            </MotionDiv>
          )}
          <div className="relative z-20 container mx-auto px-4">
            <MotionDiv
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              className="font-headline text-6xl md:text-8xl lg:text-9xl tracking-wider mt-2"
            >
              {headline.map((word, index) => (
                <MotionDiv key={`${word}-${index}`} variants={wordVariants} className="inline-block mr-4">
                  {word}
                </MotionDiv>
              ))}
            </MotionDiv>
             <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 font-semibold"
            >
              Curated weekend getaways from Bangalore. Every Friday night, we hit the road — beaches, treks, waterfalls & good vibes.
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-8 flex justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href="/trips">Explore Trips</Link>
              </Button>
            </MotionDiv>
          </div>
        </section>

        <section id="trips" className="py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="font-headline text-4xl md:text-5xl tracking-wide">
                        Your Next Adventure Awaits
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We've got a trip for every mood. From serene beaches to thrilling treks, your weekend escape is just a click away.
                    </p>
                    <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg">
                        <Link href="/trips">View All Trips</Link>
                    </Button>
                </MotionDiv>
            </div>
        </section>
        
        <section id="why-us" className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center md:text-left"
            >
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-wide">
                We’re not a travel agency—<br/>we’re your weekend plug.
              </h2>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-4 max-w-3xl text-center md:text-left text-lg md:text-xl text-muted-foreground"
            >
              <p>
                Every Friday, we hit pause on the 9-to-5 and hit the road. No planning stress, no flaky friends—just good people, better vibes, and unforgettable escapes.
              </p>
            </MotionDiv>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUsData.map((item, index) => (
                <MotionDiv
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <WhyUsCard {...item} />
                </MotionDiv>
              ))}
            </div>
            <MotionDiv
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.6, delay: 0.5 }}
                 className="mt-16 text-center"
            >
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-shadow text-lg py-6 px-8">
                    <Link href="/trips">🚐 Join the next weekend getaway</Link>
                </Button>
            </MotionDiv>
          </div>
        </section>


        <section id="testimonials" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-headline text-4xl md:text-5xl tracking-wide">
                Traveler Stories
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Our first adventures are just around the corner. This is where you'll find real stories from our community.
              </p>
            </MotionDiv>

            <div className="max-w-md mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-secondary/50 border-dashed border-2 border-muted-foreground/30 shadow-none">
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                      <div className="p-3 rounded-full bg-accent/20 mb-4 animate-pulse">
                        <Construction className="w-10 h-10 text-accent" />
                      </div>
                      <CardTitle className="font-headline text-2xl tracking-wide text-primary">
                          Coming Soon
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                          Once our trips kick off, this space will be filled with authentic reviews and photos from our amazing travelers. Stay tuned!
                      </CardDescription>
                  </CardContent>
                </Card>
              </MotionDiv>
            </div>
          </div>
        </section>

        <section id="booking" className="py-16 md:py-24 bg-secondary scroll-mt-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
                >
                    <h2 className="font-headline text-4xl md:text-5xl tracking-wide">Ready for an Adventure?</h2>
                    <p className="mt-2 text-lg text-muted-foreground">Drop your details below. We'll send a payment link to your email & WhatsApp to confirm your spot!</p>
                </MotionDiv>
                <Card className="bg-background shadow-xl border-accent/50 border">
                    <CardContent className="p-6 md:p-8">
                        <ClientOnly>
                            <BookingForm trips={trips} showPickupPoint={false} />
                        </ClientOnly>
                    </CardContent>
                </Card>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
