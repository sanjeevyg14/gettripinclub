export type TripCategory = 'Beach' | 'Trek' | 'Adventure' | 'Relaxation' | 'Camp';

export type ItineraryItem = {
  day: string;
  icon: string;
  title: string;
  details: string;
};

export type Addon = {
  name: string;
  price: number;
};

export type Trip = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  shortDescription: string;
  duration: string;
  tripType: TripCategory;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  idealFor: ('Solo' | 'Groups' | 'Couples')[];
  highlights: string[];
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  pickupPoints: string[];
  gallery: string[];
  addons: Addon[];
  upcomingDates: string[];
};

export type Testimonial = {
  name: string;
  avatar: string;
  text: string;
  trip: string;
};
