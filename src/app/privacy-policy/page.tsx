
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MotionDiv } from '@/components/MotionDiv';

const contactDetails = {
    whatsapp: "+91-9164290929",
    email: "hello@getrippinclub.com",
    website: "www.getrippinclub.com"
};

export default function PrivacyPolicyPage() {
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
                            Privacy Policy
                        </h1>
                    </MotionDiv>

                    <div className="prose prose-lg max-w-4xl mx-auto">
                        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            <h2>1. Information We Collect</h2>
                            <p>We collect personal information you provide during booking, such as your name, email address, phone number, and emergency contact details. We may also collect non-personal data like website usage statistics.</p>

                            <h2>2. How We Use Your Information</h2>
                            <ul>
                                <li>To process your booking and manage your trip.</li>
                                <li>To communicate important trip updates and information.</li>
                                <li>To send occasional marketing and promotional materials (you can opt out anytime).</li>
                                <li>To improve our services and website experience.</li>
                            </ul>

                            <h2>3. Information Sharing</h2>
                            <p>We do not sell, trade, or rent your personal information. We may share your information with trusted third-party partners (e.g., transport providers, hotels) strictly for operational purposes related to your trip.</p>

                            <h2>4. Data Security</h2>
                            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

                            <h2>5. Cookies</h2>
                            <p>Our website may use cookies to enhance your user experience. You can choose to disable cookies through your browser settings, but this may affect website functionality.</p>
                        </MotionDiv>
                        
                        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 pt-8 border-t">
                            <h2 className="text-center">Contact Us</h2>
                            <p className="text-center">For any questions regarding this policy, please contact us:</p>
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
