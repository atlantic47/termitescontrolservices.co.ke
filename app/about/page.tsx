import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us | Termite Control Specialists in Kenya",
  description: "Learn about our experience and mission in providing the best termite control services in Kenya. We partner with Pestraid Kenya for comprehensive pest solutions.",
};

export default function About() {
  return (
    <div className="py-24 bg-white">
      <Container>
         <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase text-navy tracking-tight mb-6">About Our Company</h1>
            <p className="text-gray-600 text-lg">
              We are dedicated specialists focusing exclusively on termite management and structural protection across Kenya.
            </p>
         </div>

         <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                   <Image 
                     src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/7c0a2c4a-a634-4054-b24b-e945f97660ec/8b7bc445-ca06-4081-b07c-2b3275fa5bc9.jpg"
                     alt="Termite Inspection Professional"
                     fill
                     className="object-cover"
                   />
                </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl font-bold uppercase text-navy mb-6">Our Mission & Expertise</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                 Subterranean termites pose a massive threat to Kenyan homes. Our mission is to educate property owners, implement cutting-edge termite baiting and soil barrier systems, and completely eliminate wood-boring threats from your premises.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                 By leveraging years of experience, we tackle termite colonies at the source. If you are struggling with other pests, we proudly partner with <a href="https://pestraid.co.ke/" className="text-red font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Pestraid Kenya</a>, who offer the strongest <a href="https://pestraid.co.ke/" className="text-red font-semibold hover:underline" target="_blank" rel="noopener noreferrer">professional pest control services in Kenya</a>.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red mr-3 flex-shrink-0" />
                  <span className="text-nav font-medium">Over a decade of focused termite eradication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red mr-3 flex-shrink-0" />
                  <span className="text-nav font-medium">Eco-friendly chemical barriers and baiting stations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red mr-3 flex-shrink-0" />
                  <span className="text-nav font-medium">Comprehensive warranties on our treatments</span>
                </li>
              </ul>

              <Link href="/contact" className="bg-red text-white py-4 px-8 rounded-full font-bold uppercase hover:bg-navy transition-colors">
                Schedule An Inspection
              </Link>
            </div>
         </div>
      </Container>
    </div>
  );
}
