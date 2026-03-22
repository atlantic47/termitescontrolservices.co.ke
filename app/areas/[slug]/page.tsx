import Container from "@/components/Container";
import Link from "next/link";
import { CheckCircle, MapPin, ShieldAlert, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

// Comprehensive location-based data
const areasData: Record<string, { 
  city: string; 
  description: string;
  intro: string[];
  local_threats: string;
  why_us: string[];
}> = {
  nairobi: {
    city: "Nairobi",
    description: "Nairobi's growing infrastructure and varied climate make it highly susceptible to subterranean termites. We offer rapid, targeted termite control and inspections for homes and commercial buildings throughout the capital.",
    intro: [
      "As Kenya's bustling capital and economic hub, Nairobi features a dense mix of residential estates, high-rise commercial buildings, and historic properties. Unfortunately, this rapid urban expansion often intersects with the natural habitats of highly destructive subterranean termites.",
      "At Pestraid Kenya, we have deployed our specialized termite eradication teams across every major neighborhood in Nairobi—from the leafy suburbs of Karen and Muthaiga to the densely populated commercial zones of Westlands and the CBD.",
      "Our localized approach means we understand the exact soil compositions and varying moisture levels across the city, allowing us to deploy chemical barriers and baiting systems that are perfectly calibrated for Nairobi's unique environment."
    ],
    local_threats: "Nairobi's dual rainy seasons (March-May and October-December) create severe moisture traps around building foundations, triggering massive termite swarms (alates) that quickly establish new colonies in unprotected properties.",
    why_us: [
      "Rapid emergency dispatch to any location within the Nairobi Metropolitan area.",
      "Deep understanding of Nairobi's specific zoning and construction regulations.",
      "Partnership with top real-estate developers for pre-construction soil treatments."
    ]
  },
  mombasa: {
    city: "Mombasa",
    description: "The hot, humid coastal climate of Mombasa provides the perfect breeding ground for both subterranean and drywood termites. Protect your coastal property with our specialized termite baiting and soil treatments.",
    intro: [
      "Mombasa's breathtaking coastal environment comes with a significant caveat for property owners: the sustained high humidity and year-round heat create an absolute paradise for termite colonies to thrive without interruption.",
      "Coastal properties face a dual threat. Not only do subterranean termites heavily attack foundations from the sandy soils, but highly resilient drywood termites can effortlessly colonize structural roof timbers, antique wooden furniture, and coastal resort decking.",
      "Pestraid Kenya maintains a dedicated rapid-response team customized for the Mombasa region. Our treatments are specifically formulated to withstand the salty, humid coastal air without degrading, ensuring your beautiful beachfront home or commercial resort remains completely structurally sound."
    ],
    local_threats: "The constant coastal humidity prevents timber from fully drying out, making it soft and incredibly easy for Drywood and Subterranean termites to consume rapidly. Hotels and beachfront properties are particularly at high risk.",
    why_us: [
      "Treatments specifically designed to adhere to sandy, highly-draining coastal soils.",
      "Expertise in treating luxury resorts discretely without disrupting guest experiences.",
      "Advanced drywood termite management specifically for coastal timber framing."
    ]
  },
  kisumu: {
    city: "Kisumu",
    description: "Lakeside humidity in Kisumu often accelerates termite infestations. Our expert technicians deploy heavy-duty barrier treatments to safeguard Kisumu homes and businesses from extensive structural damage.",
    intro: [
      "Situated on the shores of Lake Victoria, Kisumu experiences a unique micro-climate characterized by heavy localized afternoon rainfall and intense tropical heat. This combination creates incredibly lush soils that are heavily populated by aggressive subterranean termite species.",
      "For property owners in Kisumu, preventative termite management isn't a luxury; it's an absolute necessity. The lakeside moisture accelerates the speed at which a termite colony can consume load-bearing timber and breach foundational concrete slabs.",
      "Pestraid Kenya's Kisumu division utilizes heavy-duty, moisture-resistant termiticides. We create deep chemical trenches that lock into the muddy or clay-heavy soils common in the region, ensuring the protective barrier isn't washed away during the heavy monsoons."
    ],
    local_threats: "Lake Victoria's proximity means the water table is high in many parts of Kisumu. This drives termites upwards, causing them to aggressively seek out the dry, cellulose-rich environments found inside residential homes.",
    why_us: [
      "Specialized heavy-duty soil treatments engineered for high-moisture environments.",
      "Deep expertise in protecting agricultural and lakeside commercial processing facilities.",
      "Long-lasting warranties that hold up even during intense Kisumu rainy seasons."
    ]
  },
  nakuru: {
    city: "Nakuru",
    description: "In Nakuru's agricultural and developing suburban zones, termites pose a significant threat. We provide comprehensive termite eradication services tailored to the specific soil and building profiles of Nakuru.",
    intro: [
      "As one of Kenya's fastest-growing cities, Nakuru is experiencing a massive boom in both suburban housing developments and commercial agriculture. However, building in previously undisturbed agricultural land often means building directly on top of massive, established termite super-colonies.",
      "In Nakuru, we frequently encounter massive termite mounds and aggressive foraging behavior. When natural food sources are cleared for development, these colonies immediately turn their attention to the nearest available timber—your new home or business.",
      "Pestraid Kenya provides Nakuru residents with unparalleled protection. We focus heavily on pre-construction soil drenching for new developments and deploy advanced intercept-and-bait systems for established properties bordering agricultural land."
    ],
    local_threats: "The transition of agricultural land into residential estates forces massive, starving termite colonies to aggressively attack new buildings in search of cellulose. Furthermore, the volcanic ash soils around the Rift Valley require specialized chemical application techniques.",
    why_us: [
      "Extensive experience dealing with large-scale agricultural and Rift Valley soil profiles.",
      "Preferred partner for new suburban estate developments in and around Nakuru.",
      "Comprehensive post-construction baiting systems to neutralize large, aggressive mounds."
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(areasData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areasData[slug];
  
  if (!area) return { title: "Area Not Found" };
  
  return {
    title: `Termite Control ${area.city} | Professional Treatment by Pestraid Kenya`,
    description: area.description,
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areasData[slug];
  
  if (!area) return notFound();

  return (
    <div className="py-16 md:py-24 bg-white relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-96 bg-gray-50 rounded-bl-full -z-10" />
      
      <Container>
         {/* HERO HEADER */}
         <div className="text-center mb-20 max-w-4xl mx-auto">
            <span className="text-red font-bold uppercase tracking-widest text-sm mb-4 block">Local Service Coverage</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black uppercase text-navy tracking-tight mb-6 flex justify-center items-center flex-wrap">
               <MapPin className="h-10 w-10 md:h-14 md:w-14 text-red mr-4 mb-2 md:mb-0" /> Termite Control <br className="hidden md:block"/> {area.city}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
               {area.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-red text-white py-4 px-10 rounded-full font-black uppercase tracking-wide hover:bg-navy transition-colors shadow-lg shadow-red/20 inline-flex items-center justify-center">
                Book Inspection in {area.city} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="bg-white border-2 border-gray-100 text-navy py-4 px-10 rounded-full font-bold uppercase hover:border-navy transition-colors inline-block">
                View All Services
              </Link>
            </div>
         </div>

         {/* MAIN CONTENT GRID */}
         <div className="flex flex-col lg:flex-row gap-16 mb-20">
            {/* Overview & Intro */}
            <div className="lg:w-2/3">
               <h2 className="font-heading text-3xl md:text-4xl font-black uppercase text-navy mb-8 border-l-8 border-red pl-6">Why {area.city} Properties are at Risk</h2>
               <div className="prose prose-lg max-w-none text-gray-600 space-y-6 mb-12">
                  {area.intro.map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? "text-xl font-medium text-navy leading-relaxed" : "leading-relaxed"}>
                        {paragraph}
                    </p>
                  ))}
               </div>

               <div className="bg-red p-8 rounded-2xl text-white shadow-xl mb-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -mr-10 -mt-10" />
                  <div className="flex items-start">
                     <ShieldAlert className="h-10 w-10 mr-5 flex-shrink-0" />
                     <div>
                        <h3 className="font-heading text-2xl font-black uppercase mb-3">Local Threat Profile: {area.city}</h3>
                        <p className="text-white/90 leading-relaxed font-medium">
                           {area.local_threats}
                        </p>
                     </div>
                  </div>
               </div>

               <h2 className="font-heading text-3xl font-black uppercase text-navy mb-8 border-l-8 border-gray-200 pl-6">Why Choose Pestraid in {area.city}?</h2>
               <div className="space-y-4">
                  {area.why_us.map((reason, idx) => (
                    <div key={idx} className="flex items-center bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                       <CheckCircle className="h-6 w-6 text-red mr-4 flex-shrink-0" />
                       <span className="text-gray-700 font-medium">{reason}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:w-1/3">
               <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-28 shadow-sm">
                  <h4 className="font-heading text-xl font-black uppercase text-navy mb-6 pb-4 border-b border-gray-200">Our Treatment Process</h4>
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center shadow-sm text-red font-black text-xl flex-shrink-0 border border-gray-100">1</div>
                        <div>
                           <h5 className="font-bold text-navy uppercase text-sm mb-1">Local Inspection</h5>
                           <p className="text-xs text-gray-500 leading-relaxed">Rapid dispatch of our {area.city}-based termite experts to assess the damage seamlessly.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center shadow-sm text-red font-black text-xl flex-shrink-0 border border-gray-100">2</div>
                        <div>
                           <h5 className="font-bold text-navy uppercase text-sm mb-1">Targeted Treatment</h5>
                           <p className="text-xs text-gray-500 leading-relaxed">Applying the correct mix of chemical barriers explicitly formulated for {area.city}'s unique soil profile.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center shadow-sm text-red font-black text-xl flex-shrink-0 border border-gray-100">3</div>
                        <div>
                           <h5 className="font-bold text-navy uppercase text-sm mb-1">Long-Term Safety</h5>
                           <p className="text-xs text-gray-500 leading-relaxed">Continuous monitoring guarantees that {area.city} homes remain deeply protected for the next decade.</p>
                        </div>
                     </div>
                  </div>

                  <div className="mt-10 p-6 bg-navy rounded-2xl text-center shadow-lg">
                     <h5 className="font-heading text-lg font-bold uppercase text-white mb-2">Emergency Service</h5>
                     <p className="text-xs text-gray-300 mb-5">Available across {area.city} and surrounding sub-counties.</p>
                     <a href="tel:0710907628" className="w-full bg-red text-white py-3 rounded-full font-bold uppercase text-sm inline-block hover:bg-white hover:text-navy transition-colors">
                        Call 0710907628
                     </a>
                  </div>
               </div>
            </div>
         </div>

         {/* CROSS-PROMOTION BANNER */}
         <div className="bg-navy p-10 md:p-14 rounded-3xl flex flex-col md:flex-row items-center justify-between border-l-8 border-red shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
            <div className="md:w-2/3 mb-8 md:mb-0 relative z-10">
               <h2 className="font-heading text-3xl font-black uppercase text-white mb-4">Pest Control Beyond Termites</h2>
               <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                 Are you dealing with more than just termites? Whether it's a massive bed bug infestation, aggressive rodents, or dangerous snakes—we highly recommend our primary partner: <a href="https://pestraid.co.ke/" target="_blank" className="font-bold text-red hover:underline" rel="noopener noreferrer">Pestraid Kenya</a>.
               </p>
               <p className="text-gray-400 text-sm">
                 Their expert team is universally recognized for delivering the best, most reliable <a href="https://pestraid.co.ke/" className="font-bold text-white hover:underline transition-colors" target="_blank" rel="noopener noreferrer">fumigation and general pest control services in {area.city}</a> and across the nation.
               </p>
            </div>
            <div className="md:w-1/3 text-right relative z-10">
               <Link href="/contact" className="inline-block bg-red text-white py-4 px-10 rounded-full font-black uppercase hover:bg-white hover:text-navy transition-colors shadow-xl w-full md:w-auto text-center">
                 Get A Free Quote
               </Link>
            </div>
         </div>
      </Container>
    </div>
  );
}
