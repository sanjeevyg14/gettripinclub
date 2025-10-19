
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MotionDiv } from '@/components/MotionDiv';

const contactDetails = {
    whatsapp: "+91-9164290929",
    email: "hello@getrippinclub.com",
    website: "www.getrippinclub.com"
};

export default function DisclaimerPage() {
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
                            Disclaimer
                        </h1>
                    </MotionDiv>

                    <div className="prose prose-lg max-w-4xl mx-auto">
                        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            <h2>1. Assumption of Risk</h2>
                            <p>Participation in adventure travel and outdoor activities involves inherent risks. By joining a trip with GetrippinClub, you acknowledge and accept these risks, which may include but are not limited to, accidents, illness, injury, and unforeseen events. You agree to release GetrippinClub from any liability.</p>

                            <h2>2. Valuables</h2>
                            <p>You are responsible for your personal belongings. GetrippinClub is not liable for any loss, theft, or damage to your valuables during the trip.</p>

                            <h2>3. Third-Party Services</h2>
                            <p>We may use third-party services (e.g., transport, accommodation, activity providers). While we choose our partners carefully, we are not responsible for their service quality, actions, or omissions.</p>

                            <h2>4. Website Content</h2>
                            <p>The information on this website is for general purposes only. While we strive to keep it accurate and up-to-date, we make no guarantees about its completeness or reliability. Trip details, prices, and itineraries are subject to change without notice.</p>
                        </MotionDiv>
                        
                        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 pt-8 border-t">
                            <h2 className="text-center">Contact Us</h2>
                            <p className="text-center">For any questions regarding this disclaimer, please contact us:</p>
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
