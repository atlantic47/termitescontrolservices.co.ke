import Container from "@/components/Container";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | Termite Control Services in Kenya",
  description: "Get in touch for professional termite inspections and treatments in Kenya. Contact us via phone, WhatsApp, or email today.",
};

export default function Contact() {
  return (
    <div className="py-24 bg-white">
      <Container>
         <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase text-navy tracking-tight mb-4">Contact Us</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to eradicate termites from your property? Reach out to our experts for a detailed quotation, site survey, or emergency response.
            </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
               <h2 className="font-heading text-2xl font-bold uppercase text-navy mb-8">Send Us A Message</h2>
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-red focus:ring-1 focus:ring-red" placeholder="John Doe" />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-red focus:ring-1 focus:ring-red" placeholder="0710..." />
                     </div>
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                     <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-red focus:ring-1 focus:ring-red" placeholder="john@example.com" />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2">How can we help?</label>
                     <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-red focus:ring-1 focus:ring-red" placeholder="Tell us about the termite signs you've noticed..."></textarea>
                  </div>
                  <button type="button" className="bg-red text-white py-4 px-8 rounded-full font-bold uppercase w-full hover:bg-navy transition-colors">
                     Submit Request
                  </button>
               </form>
            </div>

            <div className="bg-gray-light p-10 rounded-2xl">
               <h2 className="font-heading text-2xl font-bold uppercase text-navy mb-8">Contact Information</h2>
               
               <div className="space-y-8">
                  <div className="flex items-start">
                     <div className="bg-white p-4 rounded-full shadow-sm mr-6 text-red">
                        <Phone className="h-6 w-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-navy text-lg mb-1">Phone / WhatsApp</h4>
                        <p className="text-gray-600">0710907628</p>
                        <p className="text-sm text-gray-500 mt-1">Available Mon-Sat, 8am - 6pm</p>
                     </div>
                  </div>
                  
                  <div className="flex items-start">
                     <div className="bg-white p-4 rounded-full shadow-sm mr-6 text-red">
                        <Mail className="h-6 w-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-navy text-lg mb-1">Email</h4>
                        <p className="text-gray-600">sales@pestraid.co.ke</p>
                        <p className="text-sm text-gray-500 mt-1">We typically reply within 24 hours</p>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <div className="bg-white p-4 rounded-full shadow-sm mr-6 text-red">
                        <MapPin className="h-6 w-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-navy text-lg mb-1">Office Location</h4>
                        <p className="text-gray-600">Argwings Kodhek Road, Rose Ave, Nairobi</p>
                        <p className="text-sm text-gray-500 mt-1">Serving all major cities in Kenya</p>
                     </div>
                  </div>
               </div>

               <div className="mt-12 p-6 bg-navy text-white rounded-xl">
                  <h4 className="font-bold text-lg mb-2 text-red">Partner with Pestraid</h4>
                  <p className="text-sm text-gray-300">
                     For comprehensive pest control (bedbugs, rodents, snakes), visit <a href="https://pestraid.co.ke/" className="text-white underline font-bold" target="_blank" rel="noopener noreferrer">Pestraid Kenya</a>.
                  </p>
               </div>
            </div>
         </div>
      </Container>
    </div>
  );
}
