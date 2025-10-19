
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTransition, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { handleBookingRequest } from '@/app/actions';
import type { Trip } from '@/lib/types';
import { Loader2, Minus, Plus } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

const bookingSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  whatsappNumber: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian mobile number.' }),
  numberOfTravelers: z.number().min(1, { message: 'At least one traveler is required.' }),
  preferredDate: z.date({ required_error: "A date is required." }),
  selectedTrip: z.string().min(1, { message: 'Please select a trip.' }),
  pickupPoint: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm({ trips, defaultTripId, showPickupPoint = false }: { trips: Trip[], defaultTripId?: string, showPickupPoint?: boolean }) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  
  const relevantTrip = trips.find(t => t.id === defaultTripId) || trips[0];

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema.extend({
        pickupPoint: showPickupPoint 
            ? z.string().min(1, { message: 'Please select a pickup point.' }) 
            : z.string().optional(),
    })),
    defaultValues: {
      fullName: '',
      email: '',
      whatsappNumber: '',
      numberOfTravelers: 1,
      selectedTrip: defaultTripId || (trips.length > 0 ? trips[0].id : ''),
      pickupPoint: '',
    },
  });
  
  const travelers = form.watch('numberOfTravelers');
  const selectedTripId = form.watch('selectedTrip');

  const currentTrip = trips.find(trip => trip.id === selectedTripId);

  useEffect(() => {
    if (defaultTripId) {
      form.setValue('selectedTrip', defaultTripId);
    }
  }, [defaultTripId, form]);
  
  useEffect(() => {
    form.reset({
      ...form.getValues(),
      preferredDate: undefined,
      pickupPoint: '',
    });
  }, [selectedTripId, form]);

  const onSubmit = (values: BookingFormValues) => {
    startTransition(async () => {
      const formattedValues = {
        ...values,
        preferredDate: format(values.preferredDate, 'PPP'),
      }
      const result = await handleBookingRequest(formattedValues);
      if (result.success) {
        toast({
          title: 'Booking Request Received! 🎉',
          description: `We'll send a payment link to your email & WhatsApp to confirm your spot for the ${currentTrip?.name} trip.`,
          duration: 5000,
        });
        form.reset();
        form.setValue('selectedTrip', defaultTripId || (trips.length > 0 ? trips[0].id : ''));
        form.setValue('numberOfTravelers', 1);
      } else {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: result.message || 'There was a problem with your request. Please try again.',
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        
        {(!defaultTripId || trips.length > 1) && (
            <FormField
              control={form.control}
              name="selectedTrip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Your Next Adventure</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-auto py-3 text-left justify-between">
                         <div className="flex flex-col">
                            <span className="font-semibold">{currentTrip?.name}</span>
                            <span className="text-xs text-muted-foreground">{currentTrip?.tagline}</span>
                          </div>
                          <div className="ml-4 flex items-center gap-2">
                             <span className="text-xs font-bold text-accent">Select</span>
                          </div>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {trips.map(trip => (
                        <SelectItem key={trip.id} value={trip.id} className="py-2">
                           <div className="flex flex-col">
                            <span className="font-semibold">{trip.name}</span>
                            <span className="text-xs text-muted-foreground">{trip.tagline}</span>
                            <span className="text-xs font-bold mt-1">₹{trip.price.toLocaleString()} per person</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
        )}
        { defaultTripId && <input type="hidden" {...form.register('selectedTrip')} value={defaultTripId} /> }

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="whatsappNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="9876543210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <FormField
            control={form.control}
            name="numberOfTravelers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Travelers</FormLabel>
                <FormControl>
                   <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 shrink-0"
                      onClick={() => form.setValue('numberOfTravelers', Math.max(1, travelers - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input {...field} readOnly className="text-center font-bold text-lg" value={travelers} />
                     <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 shrink-0"
                      onClick={() => form.setValue('numberOfTravelers', travelers + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         <FormField
          control={form.control}
          name="preferredDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Preferred Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a Friday</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() !== 5
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        {showPickupPoint && (
        <FormField
            control={form.control}
            name="pickupPoint"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Preferred Pickup Point</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                    <SelectTrigger>
                    <SelectValue placeholder="Select a pickup point" />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {currentTrip?.pickupPoints?.map((point, index) => (
                      <SelectItem key={index} value={point}>{point}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
                <FormMessage />
            </FormItem>
            )}
        />
        )}
        
        <Button type="submit" className="w-full font-bold text-lg py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-shadow" size="lg" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit & Continue'
          )}
        </Button>
      </form>
    </Form>
  );
}

    