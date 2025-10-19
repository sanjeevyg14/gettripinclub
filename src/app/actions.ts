'use server';

import { z } from 'zod';

const bookingSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  whatsappNumber: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian mobile number.' }),
  numberOfTravelers: z.coerce.number().min(1),
  preferredDate: z.string().min(1, { message: 'Please select a date.' }),
  selectedTrip: z.string().min(1, { message: 'Please select a trip.' }),
  pickupPoint: z.string().optional(),
});

export async function handleBookingRequest(values: unknown) {
  const parsed = bookingSchema.safeParse(values);

  if (!parsed.success) {
    console.error('Form validation failed:', parsed.error.flatten().fieldErrors);
    // Returning a more structured error message
    const errors = parsed.error.flatten().fieldErrors;
    const firstError = Object.values(errors)[0]?.[0] || 'Invalid form data. Please check your inputs.';
    return { success: false, message: firstError };
  }

  // In a real application, you would save this data to a database (e.g., Firestore)
  // and trigger an email/WhatsApp notification.
  console.log('New Booking Request:', parsed.data);

  // You can also trigger an email confirmation here.
  // For now, we just simulate a success response.
  
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'We’ve got your request! You’ll receive your payment link & trip details within 24 hours.' };
}
