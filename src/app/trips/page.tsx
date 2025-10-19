
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import TripList from '@/components/TripList';
import { trips } from '@/lib/data';

export default function TripsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <TripList allTrips={trips} />
      </main>
      <Footer />
    </div>
  );
}

    