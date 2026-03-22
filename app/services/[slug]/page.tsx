import Container from "@/components/Container";
import Link from "next/link";
import { CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

// Define the comprehensive services data
const servicesData: Record<string, { 
  title: string; 
  intro: string[]; 
  benefits: { title: string; description: string }[]; 
  process: { step: number; title: string; description: string }[];
  conclusion: string;
  linkText: string; 
  seoTarget: string;
}> = {
  "pre-construction-termite-treatment": {
    title: "Pre-Construction Termite Treatment",
    intro: [
      "The foundation of any successful building project in Kenya lies not just in concrete and steel, but in ensuring that the structure is protected from the ground up against one of nature's most destructive forces: subterranean termites.",
      "At Pestraid Kenya, our Pre-Construction Termite Treatment is designed to act as an impregnable fortress. By saturating the soil and foundational footprint with highly potent, globally approved termiticides before the concrete slab is ever poured, we effectively eliminate any possibility of a termite colony establishing itself within the structure.",
      "Termite damage is often excluded from standard homeowners' insurance policies. Investing in a professional pre-construction treatment is one of the most cost-effective decisions a property developer can make, safeguarding the structural integrity of the property for decades."
    ],
    benefits: [
      {
        title: "Long-Term Financial Savings",
        description: "Treating the soil before construction is drastically cheaper and easier than attempting to eradicate a deeply entrenched termite colony years later inside a finished building."
      },
      {
        title: "Unbroken Chemical Barrier",
        description: "Because there are no walls, floors, or utilities in the way, our technicians can create a 100% continuous, unbroken chemical barrier across the entire building footprint."
      },
      {
        title: "Total Peace of Mind",
        description: "Move into your new home or commercial building knowing that the structural timber, wooden flooring, and door frames are safe from silent, invisible destruction."
      }
    ],
    process: [
      {
        step: 1,
        title: "Site Preparation & Soil Analysis",
        description: "Before any chemicals are applied, our team analyzes the soil composition and excavation depth to determine the optimal termiticide formulation and volume required."
      },
      {
        step: 2,
        title: "Trenching and Foundation Flooding",
        description: "We excavate shallow trenches along the foundational walls and pillars, heavily saturating the exposed earth with non-repellent termiticides that bind tightly to the soil."
      },
      {
        step: 3,
        title: "Under-Slab Injection",
        description: "Immediately prior to the pouring of the concrete sub-slab, the entire hardcore/gravel surface is heavily sprayed to ensure no micro-fissures can be exploited by foraging termites."
      }
    ],
    conclusion: "Don't leave the survival of your new property to chance. Pestraid Kenya uses only the highest quality, WHO-approved chemicals that guarantee protection for up to 10 years. We work directly with architects and site foremen to ensure our treatments seamlessly integrate with your construction timeline.",
    linkText: "Building a new home? Schedule your pre-construction treatment.",
    seoTarget: "pre construction termite control kenya"
  },
  "post-construction-termite-treatment": {
    title: "Post-Construction Termite Treatment",
    intro: [
      "Discovering an active termite infestation in a fully furnished, completed building can be a homeowner's worst nightmare. Hollow-sounding wood, mysterious mud tubes winding up the walls, and suddenly discarded wings on the windowsill are all critical warning signs.",
      "Pestraid Kenya specializes in Post-Construction Termite Treatments that are surgically precise, environmentally conscious, and uncompromisingly lethal to the termite colony. We understand that your home is your sanctuary, which is why we utilize advanced detection equipment and non-repellent termiticides to eradicate the threat without requiring you to vacate the premises for days.",
      "Traditional DIY methods and harsh agricultural pesticides only kill the few termites that are sprayed directly. Our advanced chemical transfer technology ensures that the foraging worker termites unknowingly carry the poison back deep underground, destroying the Queen and collapsing the entire colony."
    ],
    benefits: [
      {
        title: "Colony Elimination",
        description: "We don't just repel termites; our treatments guarantee total colony collapse by utilizing the 'Transfer Effect' of modern non-repellent chemicals."
      },
      {
        title: "Minimal Disruption",
        description: "Through precise drilling and targeted sub-slab injections, we avoid destroying your beautiful tiling, hardwood floors, or manicured gardens."
      },
      {
        title: "Rapid Knockdown",
        description: "Our high-potency treatments arrest the damage immediately, stopping the termites from consuming any further structural timber in your home."
      }
    ],
    process: [
      {
        step: 1,
        title: "Comprehensive Interior & Exterior Inspection",
        description: "Using moisture meters and acoustic sounding, our entomologists map out exactly where the active galleries are located behind your walls."
      },
      {
        step: 2,
        title: "Perimeter Trenching & Sub-Slab Drilling",
        description: "We trench around the exterior perimeter and drill tiny, inconspicuous holes through the concrete slab to access the soil where the colony resides."
      },
      {
        step: 3,
        title: "Chemical Injection & Sealing",
        description: "A calculated volume of termiticide is pumped into the soil beneath your home. The drill holes are then professionally sealed and patched to match the surrounding floor."
      }
    ],
    conclusion: "Post-construction termite eradication requires a deep understanding of structural engineering and termite biology. Pestraid Kenya has successfully rescued thousands of Kenyan homes from severe structural degradation. We follow up every treatment with a rigorous inspection schedule to ensure the colony never returns.",
    linkText: "Seeing mud tubes? Get emergency post-construction treatment.",
    seoTarget: "termite treatment in nairobi homes"
  },
  "termite-inspection-services": {
    title: "Termite Inspection Services",
    intro: [
      "Subterranean termites are renowned for their incredible stealth. By the time their damage becomes visually apparent to the untrained eye—such as buckling floorboards, sagging doors, or crumbling skirting boards—the colony has often been feeding on the property for years.",
      "A Professional Termite Inspection by Pestraid Kenya is your first, best line of defense. Whether you are buying a new home, auditing an aging commercial facility, or simply want annual peace of mind, our certified inspectors know exactly where to look and what to look for.",
      "Our comprehensive audits don't just look for active bugs; we identify conducive conditions, moisture leaks, and structural vulnerabilities that could attract a future swarm."
    ],
    benefits: [
      {
        title: "Preventative Action",
        description: "Catching an infestation in its infancy can quite literally save you millions of shillings in structural repair and carpentry replacement."
      },
      {
        title: "Real Estate Confidence",
        description: "If you are purchasing a home in Kenya, our documented inspection reports provide critical leverage during price negotiations or closing contingencies."
      },
      {
        title: "Tailored Risk Matrix",
        description: "We outline exactly what parts of your property are at risk—from poor drainage to earth-to-wood contact—allowing you to proactively correct these vulnerabilities."
      }
    ],
    process: [
      {
        step: 1,
        title: "Exterior Perimeter Sweep",
        description: "We examine the entire external foundation, looking for mud tubes, cracked masonry, poor drainage, and decaying tree stumps that harbor colonies."
      },
      {
        step: 2,
        title: "Interior Sounding & Moisture Mapping",
        description: "Our technicians inspect every room, tapping skirting boards and door frames to detect hollow acoustics, while using moisture meters to find hidden nests within the walls."
      },
      {
        step: 3,
        title: "Detailed Reporting & Consultation",
        description: "You receive a comprehensive written report detailing our findings, supported by photographic evidence, and a no-obligation quote outlining the recommended treatment plan."
      }
    ],
    conclusion: "Routine inspections are a vital component of responsible property ownership. Pestraid Kenya provides the most rigorous, honest, and technologically advanced termite inspections in the country. Don't wait until the roof caves in—schedule your audit today.",
    linkText: "Book a comprehensive termite inspection today.",
    seoTarget: "professional termite inspection kenya"
  },
  "anti-termite-soil-treatment": {
    title: "Anti-Termite Soil Treatment",
    intro: [
      "The soil surrounding your property is the primary highway used by subterranean termites to navigate from their deep underground nests to the timber inside your home. Severing this connection is the ultimate goal of our Anti-Termite Soil Treatment.",
      "At Pestraid Kenya, we specialize in applying vast chemical perimeters that turn the immediate earth around your foundation into a lethal 'no-go' zone. This treatment is universally applicable, serving as a powerful preventative measure for older homes or a critical remediation step during active infestations.",
      "Unlike cheap, over-the-counter repellents that merely force termites to find another route into the house, our advanced soil treatments are totally undetectable. The foraging workers pass through the treated soil, coat themselves in the active ingredient, and carry it down into the colony."
    ],
    benefits: [
      {
        title: "Invisible Barrier",
        description: "The treatment bonds tightly to the soil molecules and does not wash away during heavy Kenyan rainstorms, providing an invisible, long-lasting shield."
      },
      {
        title: "Colony Transmission",
        description: "By using advanced non-repellent chemistries, we weaponize the foraging termites against their own queen, triggering a catastrophic colony collapse."
      },
      {
        title: "Safe for Plants and Pets",
        description: "When applied correctly by our licensed professionals, the termiticide stays locked deep within the soil, posing zero risk to surface vegetation, pets, or your family."
      }
    ],
    process: [
      {
        step: 1,
        title: "Targeted Trenching",
        description: "We excavate a continuous, V-shaped trench directly against the foundational walls of the property to expose the critical sub-surface soil."
      },
      {
        step: 2,
        title: "High-Volume Saturation",
        description: "Using pressurized rigs, we flood the trench with specialized termiticide, ensuring deep vertical penetration to intercept any tunneling attempts."
      },
      {
        step: 3,
        title: "Backfilling and Restoration",
        description: "The excavated soil is treated as it is returned to the trench, locking the chemical barrier in place, after which the landscaping is meticulously restored to its original state."
      }
    ],
    conclusion: "Soil treatment remains the gold standard of global termite management. By trusting the seasoned professionals at Pestraid Kenya to fortify your perimeter, you are guaranteed unparalleled, long-term security. We strictly adhere to dosage and safety guidelines established by environmental boards.",
    linkText: "Protect your perimeter with anti-termite soil treatment.",
    seoTarget: "soil treatment for termites nairobi"
  },
  "commercial-termite-control": {
    title: "Commercial Termite Control",
    intro: [
      "For businesses operating in Kenya—whether you manage a warehousing facility, a luxury hotel, or a large-scale agricultural processing plant—a termite infestation represents a severe threat to both your infrastructure and your reputation.",
      "Pestraid Kenya's Commercial Termite Control division is designed specifically for large-scale, high-stakes environments. We understand that commercial properties cannot afford downtime, health code violations, or structural safety hazards. Our solutions are discrete, scalable, and highly effective.",
      "We move beyond simple extermination, implementing robust, ongoing Integrated Pest Management (IPM) protocols. From installing extensive perimeter baiting matrices to conducting rapid emergency sub-slab treatments, we ensure that your business remains entirely uncompromised."
    ],
    benefits: [
      {
        title: "Zero Operational Downtime",
        description: "We schedule our intensive treatments during off-hours, weekends, or night shifts to ensure your daily business operations continue seamlessly."
      },
      {
        title: "Compliance & Auditing",
        description: "Our detailed service logs, SDS sheets, and inspection reports ensure you easily pass health, safety, and hygiene audits required by Kenyan authorities."
      },
      {
        title: "Scalable Solutions",
        description: "Whether you manage a 500-square-foot boutique or a massive 50,000-square-foot industrial warehouse, our teams have the equipment and manpower to tackle the job."
      }
    ],
    process: [
      {
        step: 1,
        title: "Facility-Wide Risk Assessment",
        description: "Our senior entomologists conduct a sweeping audit of the entire commercial facility, identifying critical vulnerabilities, moisture traps, and active foraging zones."
      },
      {
        step: 2,
        title: "Strategic Baiting & Perimeter Defense",
        description: "Instead of highly disruptive drilling, we often deploy advanced interlocking bait station rings around the facility to silently crash incoming colonies."
      },
      {
        step: 3,
        title: "Ongoing Monitoring Contracts",
        description: "We establish a routine maintenance and monitoring schedule, physically checking bait stations and high-risk areas monthly or quarterly to guarantee continuous defense."
      }
    ],
    conclusion: "Protecting commercial assets requires an industrial-grade approach. Pestraid Kenya is the trusted partner for hundreds of businesses across Nairobi, Mombasa, and beyond. We combine relentless eradication techniques with professional discretion, ensuring your bottom line—and your building—remains totally secure.",
    linkText: "Safeguard your business with commercial termite control.",
    seoTarget: "commercial termite control services kenya"
  }
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | Expert Termite Services by Pestraid Kenya`,
    description: service.intro[0],
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) return notFound();

  return (
    <div className="py-16 md:py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-gray-50 rounded-bl-full -z-10" />
      <Container>
         <div className="flex flex-col lg:flex-row gap-16">
            
            {/* MAIN CONTENT AREA */}
            <div className="lg:w-2/3">
               
               {/* Hero Header */}
               <div className="mb-12 border-b border-gray-100 pb-10">
                  <span className="text-red font-bold uppercase tracking-widest text-sm mb-3 block">Pestraid Kenya Specialized Service</span>
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase text-navy tracking-tight leading-tight">{service.title}</h1>
               </div>
               
               {/* Introduction */}
               <div className="prose prose-lg max-w-none text-gray-600 mb-16 space-y-6">
                  {service.intro.map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? "text-xl font-medium text-navy leading-relaxed" : "leading-relaxed"}>
                        {paragraph}
                    </p>
                  ))}
               </div>

               {/* Why Choose This Treatment (Benefits) */}
               <div className="mb-16">
                  <h3 className="font-heading text-3xl font-black uppercase text-navy mb-8 border-l-8 border-red pl-6">Core Benefits of This Treatment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {service.benefits.map((benefit, idx) => (
                       <div key={idx} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 group hover:-translate-y-1 transition-transform duration-300">
                         <div className="bg-white p-3 inline-block rounded-lg shadow-sm mb-4 text-red">
                            <ShieldCheck className="h-8 w-8" />
                         </div>
                         <h4 className="font-heading text-xl font-bold uppercase text-navy mb-3">{benefit.title}</h4>
                         <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Step-by-Step Process */}
               <div className="mb-16">
                  <h3 className="font-heading text-3xl font-black uppercase text-navy mb-8 border-l-8 border-red pl-6">Our Implementation Process</h3>
                  <div className="space-y-6">
                     {service.process.map((step) => (
                        <div key={step.step} className="flex flex-col sm:flex-row bg-white rounded-2xl p-6 shadow-sm border border-gray-200 ml-4 relative">
                           <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-red text-white h-12 w-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg shadow-red/30 border-4 border-white">
                              {step.step}
                           </div>
                           <div className="pl-8 sm:pl-10">
                              <h4 className="font-heading text-xl font-bold uppercase text-navy mb-2">{step.title}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Conclusion */}
               <div className="bg-navy p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red rounded-full opacity-10 blur-3xl" />
                  <h3 className="font-heading text-2xl font-black uppercase mb-4 relative z-10">Expert Final Thoughts</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                     {service.conclusion}
                  </p>
                  
                  <div className="border-t border-white/20 pt-8 relative z-10">
                     <h4 className="font-heading text-xl font-bold uppercase mb-4 text-red">Comprehensive Pest Protection</h4>
                     <p className="mb-8 text-sm text-gray-300 leading-relaxed">
                        While we specialize in targeted termite eradication like our {service.title}, we are incredibly proud to partner directly with <a href="https://pestraid.co.ke/" target="_blank" className="text-white font-bold underline hover:text-red transition-colors" rel="noopener noreferrer">Pestraid Kenya</a> for general pest issues. They provide the highly effective, <a href="https://pestraid.co.ke/" className="text-white font-medium underline hover:text-red transition-colors" target="_blank" rel="noopener noreferrer">reliable fumigation and pest control services in Kenya</a>—tackling everything from invasive rodents to severe bedbug infestations.
                     </p>
                     <Link href="/contact" className="bg-red text-white py-4 px-10 rounded-full font-black uppercase text-sm hover:bg-white hover:text-navy transition-all inline-flex items-center group shadow-xl shadow-red/20">
                        {service.linkText}
                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:w-1/3">
               <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-28 shadow-sm">
                  <h4 className="font-heading text-xl font-black uppercase text-navy mb-6 pb-4 border-b border-gray-200">More Termite Services</h4>
                  <ul className="space-y-4">
                     {Object.entries(servicesData).map(([key, data]) => (
                        <li key={key}>
                           <Link 
                             href={`/services/${key}`}
                             className={`block px-5 py-4 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-300 ${key === slug ? 'bg-red text-white shadow-md shadow-red/20' : 'bg-white text-gray-600 hover:bg-gray-200 hover:text-navy shadow-sm border border-gray-100'}`}
                           >
                             <div className="flex justify-between items-center">
                               {data.title}
                               {key === slug && <CheckCircle className="h-4 w-4" />}
                             </div>
                           </Link>
                        </li>
                     ))}
                  </ul>

                  <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-100 text-center shadow-sm">
                     <h5 className="font-heading text-lg font-bold uppercase text-navy mb-3">Need Immediate Help?</h5>
                     <p className="text-sm text-gray-600 mb-6 font-medium">Our emergency dispatch team is ready to respond.</p>
                     <a href="tel:0710907628" className="w-full bg-navy text-white py-3 rounded-full font-bold uppercase text-sm inline-block hover:bg-gray-800 transition-colors">
                        Call 0710907628
                     </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                     <Link href="/services" className="text-red font-bold hover:text-navy flex items-center justify-center text-sm uppercase transition-colors">
                        &larr; Back to all Services Overview
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </Container>
    </div>
  );
}
