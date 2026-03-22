import Container from "@/components/Container";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Droplets, FlaskConical, MapPin, Building, Home as HomeIcon } from "lucide-react";
import Image from "next/image";

export default function AreasOverview() {
  const areas = [
    { city: "Nairobi", slug: "nairobi", desc: "Targeted termite control and inspections for homes and commercial buildings throughout the capital." },
    { city: "Mombasa", slug: "mombasa", desc: "Specialized termite baiting and soil treatments for coastal properties facing high humidity." },
    { city: "Kisumu", slug: "kisumu", desc: "Heavy-duty barrier treatments to safeguard lakeside homes and businesses from extensive damage." },
    { city: "Nakuru", slug: "nakuru", desc: "Comprehensive termite eradication services tailored to the specific soil and building profiles." }
  ];

  return (
    <div className="py-24 bg-gray-50 flex-grow">
      <Container>
         <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase text-navy tracking-tight mb-6">Our Service Areas</h1>
            <p className="text-gray-600 text-lg">
              We provide expert termite inspections, treatments, and prevention across all major cities in Kenya. Select your area below for localized information.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {areas.map((area, idx) => (
              <Link key={idx} href={`/areas/${area.slug}`} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red transition-all group flex items-start">
                 <div className="bg-red/10 p-4 rounded-full mr-6 group-hover:bg-red group-hover:text-white transition-colors text-red">
                    <MapPin className="h-8 w-8" />
                 </div>
                 <div>
                    <h2 className="font-heading text-2xl font-bold uppercase text-navy mb-3">Termite Control {area.city}</h2>
                    <p className="text-gray-600 mb-4">{area.desc}</p>
                    <span className="text-red font-bold uppercase text-sm flex items-center group-hover:text-navy transition-colors">
                       View Local Services <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                 </div>
              </Link>
            ))}
         </div>

         <div className="mt-20 bg-navy p-12 rounded-2xl text-center text-white max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-bold uppercase mb-4">Don't see your town?</h3>
            <p className="text-gray-300 mb-6">
              Our technicians operate nationwide. Contact our support team to verify dispatch availability to your exact location in Kenya.
            </p>
            <div className="flex justify-center gap-4">
               <Link href="/contact" className="bg-red text-white py-3 px-8 rounded-full font-bold uppercase hover:bg-white hover:text-navy transition-colors">
                  Contact Support
               </Link>
            </div>
         </div>
      </Container>
    </div>
  );
}
