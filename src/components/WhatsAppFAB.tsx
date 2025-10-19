'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WhatsAppIcon = ({className}: {className?: string}) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={cn("text-white", className)}>
       <path d="M16.75 13.96c.25.13.43.2.5.25.13.06.16.19.12.31-.03.13-.25.44-.5.75-.25.31-.5.56-.88.75-.38.19-.75.25-1.19.12-.44-.13-1.5-.56-2.69-1.69-1.19-1.12-1.94-2.5-2.19-2.94-.25-.44-.06-.75.12-1 .13-.19.31-.25.44-.25.13 0 .25-.06.38.19.12.25.43.88.5.94.06.06.12.13.03.25-.09.12-.13.19-.25.31-.12.13-.25.25-.19.44.06.19.31.56.81 1.06.5.5 1.13.81 1.31.88.19.06.31.03.44-.09.13-.12.25-.25.31-.31.06-.06.13-.13.25-.06Z M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm0 18.13a8.13 8.13 0 1 1 8.13-8.13A8.14 8.14 0 0 1 12 20.13Z"/>
    </svg>
)


export const WhatsAppFAB = ({ phoneNumber }: { phoneNumber: string }) => {
    if (!phoneNumber) return null;
    const message = encodeURIComponent("Hi! I have a question about a trip.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button asChild size="icon" className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                    <WhatsAppIcon className="h-8 w-8" />
                </a>
            </Button>
        </div>
    );
};
