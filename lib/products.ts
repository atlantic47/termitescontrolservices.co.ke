export type Review = {
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "Premium" | "Mid-Range" | "Budget";
  price: number;
  image: string;
  badge: string;
  badgeColor: string;
  activeIngredient: string;
  formulation: string;
  dilutionRate: string;
  coverage: string;
  protectionYears: string;
  pcpb: string;
  shortDescription: string;
  description: string;
  howItWorks: string;
  applicationGuide: string[];
  useCases: string[];
  whyChoose: string;
  safetyNotes: string;
  faqs: { q: string; a: string }[];
  reviews: Review[];
  relatedSlugs: string[];
  blogLink?: { label: string; href: string };
  metaTitle: string;
  metaDescription: string;
};

export const products: Product[] = [
  {
    id: "termidor-96sc",
    slug: "termidor-96sc",
    name: "Termidor 96 SC",
    category: "Premium",
    price: 22500,
    image: "/TERMIDOR-SELLER-IN-KENYA.png",
    badge: "Best Seller",
    badgeColor: "bg-red",
    activeIngredient: "Fipronil 96 g/L",
    formulation: "Suspension Concentrate (SC)",
    dilutionRate: "25ml per 10L water (0.025% Fipronil working solution)",
    coverage: "Approx. 50-100 linear metres of soil trench per litre of concentrate",
    protectionYears: "Up to 10 years",
    pcpb: "Yes - PCPB registered",
    metaTitle: "Buy Termidor 96SC in Kenya | Fipronil Termiticide – KES 22,500 | Pestraid Kenya",
    metaDescription: "Buy genuine Termidor 96SC (Fipronil 96 g/L) in Kenya. The world's number 1 termiticide with up to 10-year colony elimination. KES 22,500. PCPB registered. Kenya-wide delivery. Order via WhatsApp.",
    shortDescription: "World's leading Fipronil termiticide with up to 10-year colony-eliminating protection via the Transfer Effect.",
    description: "Termidor 96SC is the world's most trusted professional termiticide, based on Fipronil at 96 g/L in a suspension concentrate formulation. It is used by licensed pest control operators, building contractors, and property developers across Kenya and in over 100 countries worldwide. Its revolutionary Transfer Effect mechanism means termites that contact the treated soil zone carry Fipronil back to the colony, passing it to nestmates including the queen through grooming and feeding contact. This results in full colony elimination rather than simple repellency or population reduction.",
    howItWorks: "Fipronil is a phenylpyrazole insecticide that acts on GABA-gated chloride channels in the insect nervous system, causing hyperexcitation and death. At the low concentrations used in soil application (0.025% working solution), the effect is slow enough that affected termites continue behaving normally for 24-48 hours before dying - this is the critical window during which they spread Fipronil through the colony via the Transfer Effect. Within 6-12 weeks of treatment, foraging activity from the treated structure ceases entirely as the colony collapses. The treated soil zone retains its barrier effect for up to 10 years in Kenyan soil conditions.",
    applicationGuide: [
      "Dilute 25ml of Termidor 96SC in 10 litres of water to make a 0.025% Fipronil working solution",
      "For post-construction treatment: excavate a 150-300mm trench along all external foundation walls and apply at 5 litres per linear metre",
      "For pre-construction treatment: apply to formation level soil at 5 litres per m2 before the slab is poured",
      "Where concrete or paving prevents trenching: drill holes at 300-500mm intervals and inject solution under pressure",
      "For active termite mounds: inject directly into mound galleries at multiple points",
      "Seal all drill holes with concrete or colour-matched grout after treatment",
      "Allow treated surfaces to dry before re-entry (minimum 4 hours)",
      "Keep children and pets away from the treated zone until dry",
    ],
    useCases: [
      "Pre-construction soil barrier treatment under new building slabs",
      "Post-construction perimeter trench and injection treatment",
      "Elimination of active termite colonies in existing buildings",
      "Treatment of termite mounds and tree stumps",
      "High-value commercial and institutional buildings requiring 10-year warranties",
      "Bank and county council specification treatments",
    ],
    whyChoose: "Termidor 96SC is the only product on the Kenyan market that consistently delivers 10-year verified colony-free protection through the Transfer Effect. It is the product specified by architects, structural engineers, and lending institutions when the maximum protection period is required. No other termiticide available in Kenya matches its combination of Transfer Effect speed, residual longevity, and PCPB registration status.",
    safetyNotes: "Fipronil has low mammalian toxicity at field application concentrations. Treated soil poses no groundwater contamination risk at normal application rates and depths. Keep product away from surface water, drains, and beehives. Full PPE (gloves, eye protection, coveralls) required during application. Re-entry to treated areas permitted after 4 hours once surfaces are dry.",
    faqs: [
      { q: "How long does Termidor 96SC take to work?", a: "You will not see immediate results - this is by design. Termites continue foraging through the treated zone for 1-2 weeks, spreading Fipronil to the colony. Significant decline in activity is typically visible by weeks 6-8. Full colony elimination usually occurs by weeks 8-12." },
      { q: "Can I apply Termidor 96SC myself?", a: "Termidor 96SC is a professional-grade product. While it can be purchased by property owners, correct application requires proper equipment and technique. For a treatment that qualifies for a formal warranty certificate, professional application by a licensed pest control operator is required. WhatsApp us for advice." },
      { q: "How much Termidor 96SC do I need for my house?", a: "For a standard 3-bedroom house with approximately 60 linear metres of external foundation perimeter, you would typically need 1-1.5 litres of concentrate (making 400-600 litres of working solution at 25ml/10L). WhatsApp us with your house perimeter or slab area for an exact calculation." },
      { q: "Is Termidor 96SC safe for families and pets?", a: "Yes, at the concentrations used in soil treatment, Fipronil poses minimal risk to humans and pets. Treated areas should be avoided for 4 hours while surfaces dry. Once dry, normal activity can resume. We advise keeping pets away from the treated soil zone during this drying period." },
      { q: "Does Termidor 96SC work against drywood termites?", a: "Termidor 96SC is primarily formulated for soil application against subterranean termites, which are the dominant species in Kenya. For drywood termites (Cryptotermes species), direct timber treatment or fumigation is more effective. Contact us to identify your termite species and recommend the correct treatment." },
    ],
    reviews: [
      { name: "James Mutua", location: "Machakos", rating: 5, date: "March 2025", text: "Used Termidor for my 4-bedroom house in Machakos. The technician explained the process well and the treatment came with a 10-year warranty document. No termite activity after 8 months of follow-up. Very impressed." },
      { name: "Grace Wanjiku", location: "Nairobi, Kasarani", rating: 5, date: "January 2025", text: "I was skeptical about the price but the results speak for themselves. The colony that had been eating my door frames for two years was completely gone within 6 weeks. Worth every shilling." },
      { name: "Peter Otieno", location: "Kisumu", rating: 5, date: "June 2024", text: "As a building contractor, I now specify Termidor 96SC for all my projects that require a 10-year termite warranty. My clients in Kisumu have had zero callbacks. Reliable product from a reliable supplier." },
    ],
    relatedSlugs: ["premise-200sc", "metro-200sc"],
    blogLink: { label: "Read: Termidor Termite Treatment Guide", href: "/blog/termidor-termite-treatment-kenya" },
  },
  {
    id: "premise-200sc",
    slug: "premise-200sc",
    name: "Premise 200 SC",
    category: "Premium",
    price: 21500,
    image: "/Premise-200-SC-1024x432.png",
    badge: "Professional Grade",
    badgeColor: "bg-navy",
    activeIngredient: "Imidacloprid 200 g/L",
    formulation: "Suspension Concentrate (SC)",
    dilutionRate: "50ml per 100L water (0.05% Imidacloprid working solution)",
    coverage: "Approx. 40-80 linear metres of treated soil per litre of concentrate",
    protectionYears: "5-7 years",
    pcpb: "Yes - PCPB registered",
    metaTitle: "Buy Premise 200SC in Kenya | Imidacloprid Termiticide – KES 21,500 | Pestraid Kenya",
    metaDescription: "Buy genuine Premise 200SC (Imidacloprid 200 g/L) in Kenya. Professional termiticide with 5-7 year colony-eliminating warranty. KES 21,500. PCPB registered. Nairobi delivery. Order via WhatsApp.",
    shortDescription: "Professional Imidacloprid termiticide with Transfer Effect colony elimination and 5-7 year warranty.",
    description: "Premise 200SC is a leading professional termiticide containing Imidacloprid at 200 g/L in a suspension concentrate formulation. Imidacloprid belongs to the neonicotinoid class of insecticides, acting on nicotinic acetylcholine receptors in the termite nervous system. At the sub-lethal concentrations used in soil application, affected termites remain active long enough to transfer the chemical through the colony via grooming and feeding contact - the Transfer Effect - resulting in full nest elimination including the queen. Premise 200SC is widely used across Kenya by professional pest control operators for residential and commercial termite barriers.",
    howItWorks: "Imidacloprid disrupts neural transmission in termites at sub-lethal doses, causing disorientation and eventually death - but slowly enough to allow Transfer Effect operation. Termites contact the treated soil zone, pick up Imidacloprid on their bodies, and return to the nest where they transfer it to nestmates. Within 6-12 weeks the colony population collapses. The treated soil barrier then remains active for 5-7 years in Kenyan conditions, providing ongoing protection against new colony establishment.",
    applicationGuide: [
      "Dilute 50ml of Premise 200SC in 100 litres of water to make the 0.05% working solution",
      "For post-construction: excavate a 150-300mm trench adjacent to all foundation walls and apply at 5 litres per linear metre",
      "For pre-construction: apply to the formation level soil at 5 litres per m2 before slab is poured",
      "For concrete paving or tile areas: drill holes at 300-500mm intervals and inject under pressure",
      "Ensure uniform coverage of all treated soil before backfilling or covering",
      "Seal all drill holes after treatment",
      "Treated areas are safe for re-entry after 4 hours",
    ],
    useCases: [
      "Residential post-construction soil barrier treatment",
      "Pre-construction formation level treatment",
      "Apartment and flat perimeter treatment",
      "Medium-scale commercial property treatment",
      "Properties requiring a 5-year bank-accepted warranty",
    ],
    whyChoose: "Premise 200SC delivers the same colony-eliminating Transfer Effect as Termidor at a slightly lower price point, making it the preferred choice for residential properties across Kenya where a 5-year warranty is the requirement. Its excellent dilution flexibility and low odour profile make it practical for occupied buildings.",
    safetyNotes: "Imidacloprid has low mammalian toxicity. At soil application concentrations, risk to humans and pets is minimal. Applied at depth, it does not pose groundwater contamination risk under normal conditions. Toxic to bees - avoid treatment within 3-5 metres of active beehives. PPE required during application.",
    faqs: [
      { q: "What is the difference between Premise 200SC and Termidor 96SC?", a: "Both are non-repellent termiticides with Transfer Effect colony elimination. Termidor uses Fipronil and offers up to 10 years of protection. Premise uses Imidacloprid and provides 5-7 years. Termidor is the choice for maximum warranty period; Premise is excellent value for 5-year warranty requirements." },
      { q: "How long until I see results after Premise treatment?", a: "Termites will continue foraging for 1-2 weeks as the Transfer Effect operates. Visible reduction in mud tube activity typically occurs by weeks 4-6. Complete cessation of foraging from the treated structure usually happens by weeks 8-12." },
      { q: "Is Premise 200SC accepted by Kenyan banks for mortgage purposes?", a: "Yes. Premise 200SC is a PCPB-registered termiticide and treatment certificates issued after professional application are accepted by Kenyan banks and county councils. The certificate must be issued by a licensed pest control operator." },
      { q: "Can Premise 200SC be used on a property that already has termites?", a: "Yes. Premise 200SC works through the Transfer Effect, which means it eliminates existing colonies as well as preventing new ones. It is suitable for both pre-emptive treatment and active infestation treatment." },
    ],
    reviews: [
      { name: "Caroline Achieng", location: "Nairobi, Westlands", rating: 5, date: "April 2025", text: "The pest control team used Premise 200SC on my flat in Westlands. They were professional, explained the treatment stages, and the smell was minimal. Six months on, no sign of termites. The warranty certificate was accepted by my bank." },
      { name: "Samuel Kipkoech", location: "Nakuru", rating: 4, date: "February 2025", text: "Good product. Used on my 3-bedroom house in Nakuru. Took about 8 weeks to see the full effect but termite activity has completely stopped. The technician was knowledgeable and the price was fair." },
      { name: "Mercy Njeri", location: "Thika", rating: 5, date: "November 2024", text: "Had a serious infestation in my ceiling and roof timbers. After treatment with Premise, the mud tubes dried up completely within 2 months. The follow-up inspection gave me peace of mind. Highly recommend." },
    ],
    relatedSlugs: ["termidor-96sc", "metro-200sc", "termiguard-200sl"],
    blogLink: { label: "Read: Premise Termite Treatment Guide", href: "/blog/premise-termite-treatment-kenya" },
  },
  {
    id: "metro-200sc",
    slug: "metro-200sc",
    name: "Metro 200SC",
    category: "Mid-Range",
    price: 18500,
    image: "/Metro-200SC-1024x432.png",
    badge: "Great Value",
    badgeColor: "bg-green-700",
    activeIngredient: "Imidacloprid 200 g/L",
    formulation: "Suspension Concentrate (SC)",
    dilutionRate: "50ml per 100L water (0.05% Imidacloprid working solution)",
    coverage: "Approx. 40-80 linear metres of treated soil per litre of concentrate",
    protectionYears: "5-7 years",
    pcpb: "Yes - PCPB registered",
    metaTitle: "Buy Metro 200SC in Kenya | Imidacloprid Termiticide – KES 18,500 | Pestraid Kenya",
    metaDescription: "Buy Metro 200SC (Imidacloprid 200 g/L) in Kenya. Same active ingredient as Premise at a lower price. 5-7 year protection. KES 18,500. PCPB registered. Order via WhatsApp – Kenya-wide delivery.",
    shortDescription: "Imidacloprid 200 g/L termiticide offering the same active ingredient as premium brands at a more competitive price.",
    description: "Metro 200SC contains Imidacloprid at 200 g/L - the same active ingredient and concentration as Premise 200SC - in a suspension concentrate formulation. It provides identical non-repellent soil barrier performance with colony elimination through the Transfer Effect. Metro 200SC is the preferred choice for contractors, developers, and landlords treating multiple properties who require proven colony-eliminating performance at a lower per-unit cost. It is PCPB-registered in Kenya and meets the chemical specification for 5-year termite treatment warranties.",
    howItWorks: "Metro 200SC works identically to Premise 200SC - Imidacloprid at 200 g/L disrupts the termite nervous system at sub-lethal doses, enabling the Transfer Effect to operate. Termites carry the active ingredient back to the colony through contact, leading to full colony collapse within 6-12 weeks. The treated soil zone remains active for 5-7 years.",
    applicationGuide: [
      "Dilute 50ml of Metro 200SC in 100 litres of water",
      "Apply at 5 litres of working solution per linear metre of foundation trench",
      "For pre-construction: apply at 5 litres per m2 of slab footprint",
      "Drill at 300-500mm intervals where trenching is not possible",
      "Ensure complete and uniform soil coverage before backfilling",
      "Seal all drill holes with concrete or grout",
      "Allow 4 hours drying time before re-entry",
    ],
    useCases: [
      "Multi-unit residential development treatment",
      "Contractor and developer bulk treatment projects",
      "Pre-construction formation treatment for mid-range builds",
      "Post-construction treatment for rental properties and apartments",
      "Cost-efficient treatment without compromising on active ingredient",
    ],
    whyChoose: "Metro 200SC delivers Imidacloprid 200 g/L performance - the same formulation class as Premise - at a lower per-litre price. For developers, contractors, and landlords managing multiple treatment sites, the cost saving over premium branded products adds up significantly without any reduction in active ingredient efficacy.",
    safetyNotes: "Same safety profile as Premise 200SC. Imidacloprid at soil application concentrations poses minimal risk to humans and pets. Toxic to bees - maintain a buffer from active hives. PPE required during application.",
    faqs: [
      { q: "Is Metro 200SC the same as Premise 200SC?", a: "They contain the same active ingredient at the same concentration - Imidacloprid 200 g/L. The formulations are comparable in performance. Metro 200SC is priced more competitively, making it the better value choice for high-volume treatment projects." },
      { q: "Will Metro 200SC be accepted for a bank treatment certificate?", a: "Yes, provided the treatment is carried out by a licensed PCPB-certified pest control operator. The product is PCPB-registered and meets the chemical specification requirements for 5-year treatment warranty certificates." },
      { q: "Can I use Metro 200SC for pre-construction treatment?", a: "Absolutely. Metro 200SC is suitable for all three stages of pre-construction treatment: foundation excavation, backfill, and formation level (pre-slab). It meets the specification for pre-construction termite treatment warranties." },
    ],
    reviews: [
      { name: "David Kamau", location: "Nairobi, Embakasi", rating: 5, date: "May 2025", text: "I manage 12 rental units in Embakasi and use Metro 200SC for all my termite treatments. Same active ingredient as the expensive brands but much better pricing at scale. No complaints from tenants and no reinfestations in 2 years." },
      { name: "Agnes Wairimu", location: "Kiambu", rating: 4, date: "March 2025", text: "Good mid-range option. My contractor recommended Metro 200SC for our house in Kiambu during construction. The pre-slab treatment was done correctly and we have had no issues since moving in 10 months ago." },
      { name: "Brian Odhiambo", location: "Mombasa", rating: 4, date: "January 2025", text: "Used on a commercial property in Mombasa. The application was straightforward and the results came through within the expected timeframe. The price-to-performance ratio is excellent for contractors working on multiple sites." },
    ],
    relatedSlugs: ["premise-200sc", "termiguard-200sl", "termidor-96sc"],
  },
  {
    id: "termiguard-200sl",
    slug: "termiguard-200sl",
    name: "Termiguard 200 SL",
    category: "Mid-Range",
    price: 14500,
    image: "/Termiguard\u00ae-200-SL-1024x432.png",
    badge: "Popular Choice",
    badgeColor: "bg-orange-600",
    activeIngredient: "Imidacloprid 200 g/L",
    formulation: "Soluble Liquid (SL)",
    dilutionRate: "50ml per 100L water (0.05% Imidacloprid working solution)",
    coverage: "Approx. 35-70 linear metres of treated soil per litre of concentrate",
    protectionYears: "4-6 years",
    pcpb: "Yes - PCPB registered",
    metaTitle: "Buy Termiguard 200SL in Kenya | Imidacloprid Termiticide – KES 14,500 | Pestraid Kenya",
    metaDescription: "Buy Termiguard 200SL (Imidacloprid 200 g/L Soluble Liquid) in Kenya. Fast-mixing termiticide for soil barriers. 4-6 year protection. KES 14,500. PCPB registered. Kenya-wide delivery.",
    shortDescription: "Soluble liquid Imidacloprid termiticide that mixes instantly and cleanly - ideal for field application.",
    description: "Termiguard 200SL is an Imidacloprid 200 g/L termiticide in soluble liquid (SL) formulation. Unlike suspension concentrate (SC) products, SL formulations dissolve completely in water without any settling or agitation requirement, making them faster and more consistent to mix and apply in the field. The active ingredient delivers identical non-repellent soil barrier performance and Transfer Effect colony elimination. Termiguard 200SL is widely used by Kenyan pest control operators for residential and light commercial termite control and is PCPB-registered for treatment certificate purposes.",
    howItWorks: "Imidacloprid at 200 g/L acts on the termite nervous system at sub-lethal doses, enabling the Transfer Effect. Because Termiguard 200SL is a true solution rather than a suspension, it may penetrate soil particle matrices slightly faster than SC formulations. Colony elimination follows the same 6-12 week timeline, with the treated soil zone remaining active for 4-6 years.",
    applicationGuide: [
      "Dilute 50ml of Termiguard 200SL in 100 litres of water - it dissolves instantly without agitation",
      "Apply at 5 litres of working solution per linear metre of foundation wall",
      "For pre-construction: apply at 5 litres per m2 of slab area",
      "For concrete areas: drill and inject under pressure at 300-500mm spacing",
      "Seal drill holes after treatment",
      "Allow 4 hours before re-entry",
    ],
    useCases: [
      "Residential post-construction soil treatment",
      "Light commercial property treatment",
      "Pre-construction treatment for budget-conscious builds",
      "Contractor use where fast field mixing is a priority",
      "General purpose termite barriers",
    ],
    whyChoose: "Termiguard 200SL's SL formulation provides the fastest, most consistent field mixing of any Imidacloprid product in the Kenyan market. At KES 14,500 it offers outstanding value for contractors who need reliable colony-eliminating performance without the cost of premium branded products.",
    safetyNotes: "Imidacloprid at field application concentrations is low risk to mammals. Toxic to bees - avoid treatment near active hives. PPE required during mixing and application. Keep away from water courses and drains.",
    faqs: [
      { q: "What is the difference between SL and SC formulations?", a: "SL (Soluble Liquid) dissolves completely in water - no settling, no agitation needed. SC (Suspension Concentrate) suspends the active ingredient in the carrier and requires mixing before and during application. In field conditions, SL products are faster to mix and apply consistently. Performance of the active ingredient is equivalent." },
      { q: "Is Termiguard 200SL accepted for bank treatment certificates?", a: "Yes, when applied by a licensed PCPB-certified pest control operator. The product is PCPB-registered and meets the chemical specification for treatment warranty documentation." },
      { q: "How does Termiguard compare to Metro 200SC in terms of protection?", a: "Both contain Imidacloprid at 200 g/L. Metro 200SC (SC formulation) typically provides 5-7 years of protection; Termiguard 200SL (SL formulation) provides 4-6 years. The slight difference is due to the formulation's soil binding characteristics. For a slightly longer protection period, choose Metro 200SC." },
    ],
    reviews: [
      { name: "Esther Muthoni", location: "Nairobi, Karen", rating: 5, date: "April 2025", text: "My contractor used Termiguard on our home in Karen and it has been 14 months without any termite activity. The treatment certificate was accepted by our mortgage provider. Very satisfied." },
      { name: "Joseph Waweru", location: "Nyeri", rating: 4, date: "February 2025", text: "Great product for the price. Used on a construction project in Nyeri - easy to mix and apply. The client has had no termite issues since occupation. Will continue using it for my pest control business." },
      { name: "Faith Chebet", location: "Eldoret", rating: 5, date: "December 2024", text: "Termiguard 200SL was recommended to me by Pestraid and it delivered exactly as described. Termite activity in my compound stopped within 6 weeks. Good product, honest price, and clear application instructions." },
    ],
    relatedSlugs: ["metro-200sc", "premise-200sc", "undertaker-480ec"],
  },
  {
    id: "undertaker-480ec",
    slug: "undertaker-480ec",
    name: "Undertaker 480EC",
    category: "Budget",
    price: 3500,
    image: "/Undertaker-480EC.jpg",
    badge: "Budget Option",
    badgeColor: "bg-gray-600",
    activeIngredient: "Chlorpyrifos 480 g/L",
    formulation: "Emulsifiable Concentrate (EC)",
    dilutionRate: "20ml per 10L water for soil treatment; 10ml per 10L for timber treatment",
    coverage: "Approx. 20-40 linear metres of treated soil per litre of concentrate",
    protectionYears: "2-3 years",
    pcpb: "Yes - PCPB registered",
    metaTitle: "Buy Undertaker 480EC in Kenya | Chlorpyrifos Termiticide – KES 3,500 | Pestraid Kenya",
    metaDescription: "Buy Undertaker 480EC (Chlorpyrifos 480 g/L) in Kenya. Affordable PCPB-registered termiticide for budget soil and timber treatment. KES 3,500. Fast knockdown. Kenya-wide delivery. Order via WhatsApp.",
    shortDescription: "Affordable Chlorpyrifos-based termiticide with fast knockdown action for budget soil and timber treatment.",
    description: "Undertaker 480EC is a broad-spectrum emulsifiable concentrate insecticide and termiticide containing Chlorpyrifos at 480 g/L. Chlorpyrifos is an organophosphate compound with rapid contact and stomach action against termites, soil insects, and wood-boring beetles. It acts as a repellent chemical barrier, creating a treated zone that termites avoid. While it does not provide the colony-elimination Transfer Effect of non-repellent products like Fipronil or Imidacloprid, it delivers fast, effective immediate protection suitable for budget applications. Undertaker 480EC is PCPB-registered in Kenya and is widely used for agricultural buildings, farm structures, fence posts, and budget residential treatment.",
    howItWorks: "Chlorpyrifos is an acetylcholinesterase inhibitor - it blocks the enzyme that breaks down the neurotransmitter acetylcholine, causing continuous nerve stimulation and rapid paralysis in insects that contact the treated zone. At soil application concentrations, it creates a chemical barrier that termites detect and avoid. Unlike non-repellent products, termites that contact Undertaker 480EC will not pass it to nestmates - it provides perimeter protection rather than colony elimination.",
    applicationGuide: [
      "Dilute 20ml of Undertaker 480EC per 10 litres of water for soil barrier applications",
      "For timber treatment: dilute 10ml per 10 litres of water",
      "Apply to the soil around foundation walls, fence posts, and timber structures",
      "Treat cut ends of timber posts by soaking in working solution before installation",
      "Apply to soil around the base of trees showing termite activity",
      "Reapply every 2-3 years to maintain effective protection",
      "Wear full PPE during application - Chlorpyrifos requires careful handling",
      "Do not apply near water courses, fishponds, or beehives",
    ],
    useCases: [
      "Budget residential perimeter termite treatment",
      "Agricultural buildings and store protection",
      "Fence post and timber pre-treatment before installation",
      "Farm and smallholder property treatment",
      "Temporary and semi-permanent structure protection",
      "Quick-response treatment where budget is the primary constraint",
    ],
    whyChoose: "Undertaker 480EC is Kenya's most cost-effective entry point into PCPB-registered termite protection. At KES 3,500 it is accessible to small-scale property owners, farmers, and anyone needing basic protection without the budget for non-repellent products. It provides fast, visible knockdown of termite activity in the treated zone.",
    safetyNotes: "Chlorpyrifos requires careful handling. Full PPE (chemical-resistant gloves, eye protection, respirator, coveralls) is required during mixing and application. Do not apply near water courses, fishponds, drinking water sources, or beehives. Keep children and animals away from treated areas until dry. Do not apply to soil within 1 metre of food crop growing areas. Store in original container in a cool, dry place away from children.",
    faqs: [
      { q: "Is Undertaker 480EC as effective as Termidor or Premise?", a: "Undertaker 480EC uses a different mode of action - it is a repellent barrier rather than a colony-eliminating product. It will protect the treated perimeter but will not eliminate the termite colony. For colony elimination and longer protection warranties, Imidacloprid or Fipronil products are recommended. Undertaker is best for budget applications where immediate barrier protection is the goal." },
      { q: "How often do I need to reapply Undertaker 480EC?", a: "In Kenyan soil conditions, Chlorpyrifos barriers typically remain effective for 2-3 years. Reapplication is recommended after this period. Annual inspection of the treated areas is advisable." },
      { q: "Can Undertaker 480EC be used for timber treatment?", a: "Yes. At 10ml per 10 litres of water, Undertaker 480EC can be applied to timber surfaces, fence posts, and structural timber elements to protect against wood-boring termites and beetles. Newly cut or pressure-treated timber can be soaked in the working solution before installation." },
      { q: "Will I get a warranty certificate with Undertaker 480EC?", a: "Undertaker 480EC is PCPB-registered and a treatment report can be issued after professional application. However, due to its shorter protection period (2-3 years) and repellent mode of action, most banks and county councils require non-repellent Imidacloprid or Fipronil products for formal 5+ year warranty certificates." },
    ],
    reviews: [
      { name: "Moses Njoroge", location: "Murang'a", rating: 4, date: "March 2025", text: "Bought Undertaker 480EC for my farm buildings in Murang'a. Very affordable and easy to apply. Termite activity stopped quickly after treatment. For the price, this product delivers solid results." },
      { name: "Lucy Auma", location: "Kisii", rating: 4, date: "January 2025", text: "Used on my fence posts and the wooden sections of my store. Mixes well and has a strong smell that dissipates quickly. Good budget option for basic protection. Would buy again." },
      { name: "Hassan Abdi", location: "Mombasa, Bamburi", rating: 3, date: "November 2024", text: "Works well as a quick fix. I treated the perimeter of a rental property and termite activity reduced significantly. For long-term protection I was advised to upgrade to Imidacloprid products, but for a 2-year budget treatment this does the job." },
    ],
    relatedSlugs: ["termiguard-200sl", "metro-200sc"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return slugs.map((s) => products.find((p) => p.slug === s)).filter(Boolean) as Product[];
}
