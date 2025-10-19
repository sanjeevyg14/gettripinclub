import Image from 'next/image';
import Link from 'next/link';
import { Calendar, IndianRupee, Mountain, Users, Zap } from 'lucide-react';
import type { Trip } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { MotionDiv } from './MotionDiv';

export default function TripCard({ trip, index }: { trip: Trip, index: number }) {
  const tripImage = PlaceHolderImages.find(p => p.id === trip.image);

  return (
    <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
    <Card className="group flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-background border-2 border-transparent hover:border-accent">
      <CardHeader className="p-0">
        <div className="relative h-60 w-full overflow-hidden">
          {tripImage && (
              <Image
                src={tripImage.imageUrl}
                alt={trip.name}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={tripImage.imageHint}
              />
          )}
          <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent' />
          <div className="absolute bottom-4 left-4">
              <h3 className="font-headline text-3xl tracking-wide text-white">{trip.name}</h3>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-1 flex flex-col">
        <p className="text-muted-foreground mb-4 text-sm">{trip.tagline}</p>
        <div className="mt-auto space-y-3 text-foreground flex-1">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-primary" />
            <span className='font-bold text-lg'>₹{trip.price.toLocaleString()}</span>
            <span className='text-sm text-muted-foreground'>per person</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Friday Night - Monday Morning</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span>{trip.difficulty} Difficulty</span>
          </div>
          <div className="flex items-start gap-2">
            <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{trip.tripType}</Badge>
              {trip.idealFor.map((ideal) => (
                <Badge key={ideal} variant="secondary">{ideal}</Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-secondary/30">
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-shadow">
          <Link href={`/trips/${trip.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
    </MotionDiv>
  );
}
