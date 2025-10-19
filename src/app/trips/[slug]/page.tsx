
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { trips } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, XCircle, MapPin, Clock, IndianRupee, Mountain, Zap, Star } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import ClientOnly from '@/components/ClientOnly';
import { MotionDiv } from '@/components/MotionDiv';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export async function generateStaticParams() {
  return trips.map((trip) => ({
    slug: trip.slug,
  }));
}

const faqs = [
    {
        question: "What should I pack?",
        answer: "Pack light! Comfortable trekking shoes, a couple of quick-dry outfits, swimsuit (for beach trips), a jacket for the night, a reusable water bottle, sunscreen, and a positive attitude. We'll send a detailed packing list on WhatsApp before the trip."
    },
    {
        question: "What about refunds or cancellations?",
        answer: "We offer a flexible cancellation policy. You can find the full details in our terms and conditions, which will be shared with you upon booking. Generally, we provide credit shells for future trips if you cancel in advance."
    },
    {
        question: "How is the food situation?",
        answer: "We believe in authentic local experiences. Meals included are typically a mix of delicious local cuisine (both veg and non-veg options available). Lunches are usually on you, so you can explore local cafes and eateries."
    },
    {
        question: "Is it safe for solo female travelers?",
        answer: "Absolutely. Over 50% of our travelers are solo adventurers, and a majority of them are women. We prioritize safety with verified stays, professional trip captains, and a supportive community environment."
    }
]


export default function TripDetailPage({ params }: { params: { slug: string } }) {
  const trip = trips.find((t) => t.slug === params.slug);

  if (!trip) {
    notFound();
  }

  const heroImage = PlaceHolderImages.find((p) => p.id === trip.image);
  const galleryImages = trip.gallery.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] w-full text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={trip.name}
              fill
              priority
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="relative z-20 h-full flex flex-col justify-end items-center text-center container mx-auto px-4 pb-12 md:pb-20">
            <h1 className="font-headline text-5xl md:text-8xl tracking-wider">{trip.name}</h1>
            <p className="mt-2 text-lg md:text-xl max-w-2xl font-semibold">{trip.tagline}</p>
            <p className="mt-4 font-headline text-2xl md:text-3xl text-white/90 tracking-wide">Friday Night to Monday Morning | From ₹{trip.price.toLocaleString()}</p>
            <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#book-now">Book Now</Link>
            </Button>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Quick Info Bar */}
            <Card>
                <CardContent className='p-4 md:p-6'>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <Clock className="w-8 h-8 text-primary"/>
                            <h4 className="font-bold text-lg">Duration</h4>
                            <p className="text-muted-foreground font-semibold">{trip.duration}</p>
                        </div>
                         <div className="flex flex-col items-center gap-2">
                            <IndianRupee className="w-8 h-8 text-primary"/>
                            <h4 className="font-bold text-lg">Cost</h4>
                            <p className="text-muted-foreground font-semibold">₹{trip.price.toLocaleString()}</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Mountain className="w-8 h-8 text-primary"/>
                            <h4 className="font-bold text-lg">Trip Type</h4>
                            <p className="text-muted-foreground font-semibold">{trip.tripType}</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Zap className="w-8 h-8 text-primary"/>
                            <h4 className="font-bold text-lg">Difficulty</h4>
                            <p className="text-muted-foreground font-semibold">{trip.difficulty}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Trip Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl tracking-wide">Trip Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-muted-foreground">{trip.shortDescription}</p>
                </CardContent>
            </Card>
            
            {/* Trip Highlights */}
             <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-3xl tracking-wide">Trip Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    {trip.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>


            {/* Itinerary Section */}
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl tracking-wide">Your Itinerary</CardTitle>
                <CardDescription>A day-by-day plan for your adventure.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative space-y-8 border-l-2 border-accent pl-8">
                  {trip.itinerary.map((day, index) => (
                        <MotionDiv 
                            key={index} 
                            className="relative"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="absolute -left-[42px] top-0 h-8 w-8 rounded-full bg-accent border-4 border-background flex items-center justify-center">
                                <span className="font-bold text-xs text-accent-foreground">{day.day.split(' ')[0][0]}{day.day.split(' ')[1][0]}</span>
                            </div>
                            <p className="text-sm font-semibold text-muted-foreground">{day.day}</p>
                            <h3 className="font-bold text-xl text-primary">{day.title}</h3>
                            <p className="text-muted-foreground mt-1">{day.details}</p>
                        </MotionDiv>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl tracking-wide">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {trip.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl tracking-wide">What's Not Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {trip.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Pickup & Drop Points */}
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl tracking-wide">Pickup & Drop Points</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {trip.pickupPoints.map((point, i) => (
                             <li key={i} className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{point}</span>
                            </li>
                        ))}
                    </ul>
                    <p className='text-sm text-muted-foreground mt-4'>Return to same points Monday morning.</p>
                </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl tracking-wide">Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((image, index) => image && (
                            <MotionDiv 
                                key={index} 
                                className="overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Image 
                                    src={image.imageUrl} 
                                    alt={image.description} 
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                                    data-ai-hint={image.imageHint}
                                />
                            </MotionDiv>
                        ))}
                    </div>
                </CardContent>
            </Card>

             {/* FAQ */}
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl tracking-wide">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className='text-lg font-bold text-left hover:no-underline'>{faq.question}</AccordionTrigger>
                                <AccordionContent className='text-muted-foreground'>
                                   {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>


            {/* Book Now Section */}
            <div id="book-now" className="scroll-mt-20">
                <Card className="bg-background shadow-2xl border-accent border-2">
                    <CardHeader className="text-center">
                        <CardTitle className="font-headline text-4xl tracking-wide">Ready to escape this weekend?</CardTitle>
                        <p className="text-muted-foreground pt-2">Fill in your name, email, and WhatsApp — our team will confirm your seat and send your payment link within 24 hours.</p>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                        <ClientOnly>
                            <BookingForm trips={[trip]} defaultTripId={trip.id} showPickupPoint={true} />
                        </ClientOnly>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
