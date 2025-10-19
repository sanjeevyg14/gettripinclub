'use client';

import type { Trip } from '@/lib/types';
import { MotionDiv } from '@/components/MotionDiv';
import TripCard from '@/components/TripCard';

export default function TripList({ allTrips }: { allTrips: Trip[] }) {
  return (
    <section id="trips" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-4xl md:text-5xl tracking-wide">
            Upcoming Weekend Trips
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Choose your next adventure. We'll handle the rest.
          </p>
        </MotionDiv>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTrips.map((trip, index) => (
                <TripCard key={trip.id} trip={trip} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
}
