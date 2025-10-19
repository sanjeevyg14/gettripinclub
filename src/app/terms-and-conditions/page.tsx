
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MotionDiv } from '@/components/MotionDiv';

const contactDetails = {
    whatsapp: "+91-9164290929",
    email: "hello@getrippinclub.com",
    website: "www.getrippinclub.com"
};

export default function TermsAndConditionsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="font-headline text-4xl md:text-5xl tracking-wide text-primary">
                            Terms & Conditions
                        </h1>
                    </MotionDiv>

                    <div className="prose prose-lg max-w-4xl mx-auto">
                        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            <h2>1. Booking & Payments</h2>
                            <p>A trip is considered confirmed only after receipt of full payment. By booking a trip with GetrippinClub, you agree to these terms and conditions.</p>

                            <h2>2. Cancellation Policy</h2>
                            <ul>
                                <li><strong>More than 15 days before departure:</strong> 90% refund or 100% credit for a future trip.</li>
                                <li><strong>7-15 days before departure:</strong> 50% refund or 75% credit.</li>
                                <li><strong>Less than 7 days before departure:</strong> No refund, 25% credit.</li>
                                <li><strong>No-shows:</strong> No refund or credit.</li>
                            </ul>
                            <p>Cancellations must be made in writing via email. Refunds will be processed within 7-10 working days.</p>

                            <h2>3. Itinerary Changes</h2>
                            <p>The itinerary is subject to change due to unforeseen circumstances like weather, road closures, or local restrictions. The Trip Captain’s decision will be final. We will ensure the best possible alternative is provided.</p>

                            <h2>4. Code of Conduct</h2>
                            <p>All travelers are expected to behave respectfully. Any form of harassment, use of illegal substances, or disruptive behavior will result in immediate removal from the trip without a refund.</p>

                            <h2>5. Health & Safety</h2>
                            <p>You are responsible for your own health and safety. Inform us of any medical conditions beforehand. While we take all necessary precautions, GetrippinClub is not liable for any injuries, accidents, or health issues during the trip.</p>
                        </MotionDiv>
                        
                        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 pt-8 border-t">
                            <h2 className="text-center">Contact Us</h2>
                            <p className="text-center">For any questions regarding these terms, please contact us:</p>
                             <ul className='list-none pl-0 text-center'>
                                <li><strong>📞 WhatsApp:</strong> <a href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">{contactDetails.whatsapp}</a></li>
                                <li><strong>📧 Email:</strong> <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></li>
                                <li><strong>🌐 Website:</strong> <a href={`https://${contactDetails.website}`} target="_blank" rel="noopener noreferrer">{contactDetails.website}</a></li>
                            </ul>
                        </MotionDiv>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
