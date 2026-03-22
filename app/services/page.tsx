import Container from "@/components/Container";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Professional Termite Control & Treatment in Kenya",
  description: "Get the best termite treatment in Nairobi and across Kenya. We offer soil treatment, baiting, wood preservation, and pre-construction termite control.",
};

const services = [
  { name: "Pre-Construction Termite Treatment", slug: "pre-construction-termite-treatment", desc: "Treating the soil before building to block termites from ever entering the structure." },
  { name: "Post-Construction Termite Treatment", slug: "post-construction-termite-treatment", desc: "Chemical barriers applied around existing homes to eradicate active infestations." },
  { name: "Termite Inspection Services", slug: "termite-inspection-services", desc: "Thorough mapping of mud tubes, damaged wood, and moisture points to find colonies." },
  { name: "Anti-Termite Soil Treatment", slug: "anti-termite-soil-treatment", desc: "Long-lasting soil termiticides injected via trenching and rodding methods." },
  { name: "Commercial Termite Control", slug: "commercial-termite-control", desc: "Large-scale termite baiting and monitoring systems for businesses and warehouses." }
];

export default function Services() {
  return (
    <div className="py-24 bg-gray-light">
      <Container>
         <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase text-navy tracking-tight mb-6">Termite Control Kenya</h1>
            <p className="text-gray-600 text-lg mb-6">
              Protecting your property from subterranean and drywood termites requires expert diagnosis and specialized treatment. We provide the most effective <strong>termite treatment in Nairobi</strong> and beyond.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our holistic approach uses a combination of liquid barriers and bait stations. For broader pest management such as rodents or roaches, we highly recommend the <a href="https://pestraid.co.ke/" className="text-red font-bold hover:underline" target="_blank" rel="noopener noreferrer">fumigation experts at Pestraid Kenya</a>.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red hover:shadow-xl transition-shadow flex flex-col h-full">
                 <h3 className="font-heading text-xl font-bold uppercase mb-4 text-navy">{service.name}</h3>
                 <p className="text-gray-600 flex-grow mb-6">{service.desc}</p>
                 <Link href={`/services/${service.slug}`} className="text-red font-bold uppercase text-sm flex items-center hover:text-navy transition-colors mt-auto">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                 </Link>
              </div>
            ))}
         </div>

         <div className="bg-navy text-white p-12 rounded-2xl text-center">
            <h2 className="font-heading text-3xl font-bold uppercase mb-6">Signs You Need Immediate Treatment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto mb-8">
               <div className="bg-white/10 p-6 rounded-lg">
                  <h4 className="font-bold text-red mb-2">Mud Tubes</h4>
                  <p className="text-sm text-gray-300">Pencil-thin dirt lines on foundation walls or skirting boards.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-lg">
                  <h4 className="font-bold text-red mb-2">Hollow Wood</h4>
                  <p className="text-sm text-gray-300">Skirting boards or door frames that sound hollow when tapped.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-lg">
                  <h4 className="font-bold text-red mb-2">Discarded Wings</h4>
                  <p className="text-sm text-gray-300">Found near light sources after a termite swarm (flying ants).</p>
               </div>
            </div>
            <Link href="/contact" className="bg-red text-white py-4 px-10 rounded-full font-bold uppercase hover:bg-white hover:text-navy transition-colors inline-block">
               Book An Inspection
            </Link>
         </div>
      </Container>
    </div>
  );
}
