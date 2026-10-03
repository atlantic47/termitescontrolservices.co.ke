import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Termite Pesticides in Kenya | Termidor, Premise, Metro 200SC – Best Prices",
  description:
    "Shop PCPB-registered anti-termite chemicals in Kenya. Buy Termidor 96SC, Premise 200SC, Metro 200SC, Termiguard 200SL and Undertaker 480EC online. Fast delivery across Nairobi. Trusted by 1,000+ Kenyan contractors and homeowners.",
  keywords:
    "buy termite pesticide Kenya, termidor 96sc price Kenya, premise 200sc Kenya, metro 200sc termiticide, termiguard 200sl, undertaker 480ec, anti-termite chemical Nairobi, termiticide supplier Kenya",
  openGraph: {
    title: "Buy Termite Pesticides in Kenya | Best Prices on Termidor, Premise & More",
    description:
      "PCPB-registered termiticides available for purchase. Termidor 96SC, Premise 200SC, Metro 200SC, Termiguard 200SL, Undertaker 480EC. Order via WhatsApp – delivery across Kenya.",
    type: "website",
    url: "https://termitescontrolservices.co.ke/shop",
  },
};

const products = [
  {
    id: "termidor-96sc",
    name: "Termidor 96 SC",
    category: "Premium",
    price: 22500,
    image: "/TERMIDOR-SELLER-IN-KENYA.png",
    badge: "Best Seller",
    badgeColor: "bg-red",
    activeIngredient: "Fipronil 96 g/L",
    formulation: "Suspension Concentrate (SC)",
    dilutionRate: "25ml per 10L water",
    coverage: "Approx. 50-100 linear metres of soil trench",
    protectionYears: "Up to 10 years",
    pcpb: "Yes - PCPB registered",
    description:
      "Termidor 96SC is the world's leading termiticide, trusted by professional pest control operators across Kenya and globally. Its active ingredient, Fipronil, works through the revolutionary Transfer Effect - termites that contact the treated zone carry the chemical back to the colony, eliminating the queen and the entire nest. A single treatment provides up to 10 years of verified colony-free protection. Widely specified by architects, contractors, and lending institutions for both pre-construction and post-construction termite barriers in Kenya.",
    useCases: [
      "Pre-construction soil barrier (under slabs)",
      "Post-construction perimeter trenching and injection",
      "Treatment of termite mounds and active galleries",
      "High-value commercial and residential property protection",
    ],
    whyChoose:
      "No other product on the Kenyan market matches Termidor's combination of Transfer Effect speed, residual duration, and PCPB certification. It is the product of choice for 10-year warranty treatments.",
    reviews: [
      {
        name: "James Mutua",
        location: "Machakos",
        rating: 5,
        date: "March 2025",
        text: "Used Termidor for my 4-bedroom house in Machakos. The technician explained the process well and the treatment came with a 10-year warranty document. No termite activity after 8 months of follow-up. Very impressed.",
      },
      {
        name: "Grace Wanjiku",
        location: "Nairobi, Kasarani",
        rating: 5,
        date: "January 2025",
        text: "I was skeptical about the price but the results speak for themselves. The colony that had been eating my door frames for two years was completely gone within 6 weeks. Worth every shilling.",
      },
      {
        name: "Peter Otieno",
        location: "Kisumu",
        rating: 5,
        date: "June 2024",
        text: "As a building contractor, I now specify Termidor 96SC for all my projects that require a 10-year termite warranty. My clients in Kisumu have had zero callbacks. Reliable product from a reliable supplier.",
      },
    ],
  },
  {
    id: "premise-200sc",
    name: "Premise 200 SC",
    category: "Premium",
    price: 21500,
    image: "/Premise-200-SC-1024x432.png",
    badge: "Professional Grade",
    badgeColor: "bg-navy",
    activeIngredient: "Imidacloprid 200 g/L",
    formulation: "Suspension Concentrate (SC)",
    dilutionRate: "50ml per 100L water",
    coverage: "Approx. 40-80 linear metres of treated soil",
    protectionYears: "5-7 years",
    pcpb: "Yes - PCPB registered",
    description:
      "Premise 200SC is a professional-grade termiticide powered by Imidacloprid, a neonicotinoid insecticide that disrupts the termite nervous system at sub-lethal doses. This slow-acting mechanism triggers the Transfer Effect - treated termites carry the chemical back to the colony before dying, resulting in full nest elimination. Premise is widely used across Kenya for residential soil barriers and is the preferred product for properties requiring a 5-7 year certified warranty. Its excellent safety profile and wide dilution flexibility make it practical for both large and small treatment sites.",
    useCases: [
      "Residential post-construction soil barriers",
      "Pre-construction formation-level treatment",
      "Apartment and flat perimeter treatment",
      "Medium-budget projects requiring colony elimination",
    ],
    whyChoose:
      "Premise 200SC offers colony-killing Transfer Effect performance at a more accessible price point than Termidor. It is the go-to product for residential properties in Nairobi and across Kenya where a 5-year warranty is required.",
    reviews: [
      {
        name: "Caroline Achieng",
        location: "Nairobi, Westlands",
        rating: 5,
        date: "April 2025",
        text: "The pest control team used Premise 200SC on my flat in Westlands. They were professional, explained the treatment stages, and the smell was minimal. Six months on, no sign of termites. The warranty certificate was accepted by my bank.",
      },
      {
        name: "Samuel Kipkoech",
        location: "Nakuru",
        rating: 4,
        date: "February 2025",
        text: "Good product. Used on my 3-bedroom house in Nakuru. Took about 8 weeks to see the full effect but termite activity has completely stopped. The technician was knowledgeable and the price was fair.",
      },
      {
        name: "Mercy Njeri",
        location: "Thika",
        rating: 5,
        date: "November 2024",
        text: "Had a serious infestation in my ceiling and roof timbers. After treatment with Premise, the mud tubes dried up completely within 2 months. The follow-up inspection gave me peace of mind. Highly recommend.",
      },
    ],
  },
  {
    id: "metro-200sc",
    name: "Metro 200SC",
    category: "Mid-Range",
    price: 18500,
    image: "/Metro-200SC-1024x432.png",
    badge: "Great Value",
    badgeColor: "bg-green-700",
    activeIngredient: "Imidacloprid 200 g/L",
    formulation: "Suspension Concentrate (SC)",
    dilutionRate: "50ml per 100L water",
    coverage: "Approx. 40-80 linear metres of treated soil",
    protectionYears: "5-7 years",
    pcpb: "Yes - PCPB registered",
    description:
      "Metro 200SC delivers the same active ingredient as Premise 200SC - Imidacloprid at 200 g/L - at a more competitive price, making it the smart mid-range choice for contractors and property managers treating multiple sites or larger projects. It provides full non-repellent soil barrier performance with colony elimination via the Transfer Effect. Metro 200SC is PCPB-registered in Kenya and meets the chemical specification requirements for 5-year treatment warranties. An excellent option for developers, landlords, and contractors managing treatment budgets across multiple units.",
    useCases: [
      "Bulk treatment of multiple residential units",
      "Developer and contractor projects",
      "Pre-construction formation treatment for mid-range builds",
      "Post-construction treatment for apartments and maisonettes",
    ],
    whyChoose:
      "Metro 200SC gives you Imidacloprid 200 g/L performance - the same formulation class as premium brands - at a lower per-litre cost. Ideal for high-volume projects where budget efficiency matters without compromising on colony elimination.",
    reviews: [
      {
        name: "David Kamau",
        location: "Nairobi, Embakasi",
        rating: 5,
        date: "May 2025",
        text: "I manage 12 rental units in Embakasi and use Metro 200SC for all my termite treatments. Same active ingredient as the expensive brands but much better pricing at scale. No complaints from tenants and no reinfestations in 2 years.",
      },
      {
        name: "Agnes Wairimu",
        location: "Kiambu",
        rating: 4,
        date: "March 2025",
        text: "Good mid-range option. My contractor recommended Metro 200SC for our house in Kiambu during construction. The pre-slab treatment was done correctly and we have had no issues since moving in 10 months ago.",
      },
      {
        name: "Brian Odhiambo",
        location: "Mombasa",
        rating: 4,
        date: "January 2025",
        text: "Used on a commercial property in Mombasa. The application was straightforward and the results came through within the expected timeframe. The price-to-performance ratio is excellent for contractors working on multiple sites.",
      },
    ],
  },
  {
    id: "termiguard-200sl",
    name: "Termiguard 200 SL",
    category: "Mid-Range",
    price: 14500,
    image: "/Termiguard\u00ae-200-SL-1024x432.png",
    badge: "Popular Choice",
    badgeColor: "bg-orange-600",
    activeIngredient: "Imidacloprid 200 g/L",
    formulation: "Soluble Liquid (SL)",
    dilutionRate: "50ml per 100L water",
    coverage: "Approx. 35-70 linear metres of treated soil",
    protectionYears: "4-6 years",
    pcpb: "Yes - PCPB registered",
    description:
      "Termiguard 200SL is a soluble liquid (SL) formulation of Imidacloprid 200 g/L designed for fast, clean mixing and reliable soil barrier performance. The SL formulation dissolves completely in water without settling, making it easy to apply consistently through standard spray and injection equipment. It is widely used across Kenya for residential and light commercial termite control, offering effective colony elimination through the Transfer Effect at an affordable price point. Termiguard is PCPB-registered and accepted by most Kenyan county councils and banks for treatment certificate purposes.",
    useCases: [
      "Residential post-construction soil treatment",
      "Light commercial property treatment",
      "Pre-construction treatment for smaller builds",
      "General contractor use across mixed property types",
    ],
    whyChoose:
      "Termiguard 200SL soluble liquid formulation mixes faster and more consistently than SC products in field conditions. At this price point with PCPB registration and colony-killing performance, it offers outstanding value for the Kenyan market.",
    reviews: [
      {
        name: "Esther Muthoni",
        location: "Nairobi, Karen",
        rating: 5,
        date: "April 2025",
        text: "My contractor used Termiguard on our home in Karen and it has been 14 months without any termite activity. The treatment certificate was accepted by our mortgage provider. Very satisfied.",
      },
      {
        name: "Joseph Waweru",
        location: "Nyeri",
        rating: 4,
        date: "February 2025",
        text: "Great product for the price. Used on a construction project in Nyeri - easy to mix and apply. The client has had no termite issues since occupation. Will continue using it for my pest control business.",
      },
      {
        name: "Faith Chebet",
        location: "Eldoret",
        rating: 5,
        date: "December 2024",
        text: "Termiguard 200SL was recommended to me by Pestraid and it delivered exactly as described. Termite activity in my compound stopped within 6 weeks. Good product, honest price, and clear application instructions.",
      },
    ],
  },
  {
    id: "undertaker-480ec",
    name: "Undertaker 480EC",
    category: "Budget",
    price: 3500,
    image: "/Undertaker-480EC.jpg",
    badge: "Budget Option",
    badgeColor: "bg-gray-600",
    activeIngredient: "Chlorpyrifos 480 g/L",
    formulation: "Emulsifiable Concentrate (EC)",
    dilutionRate: "20ml per 10L water (soil); 10ml per 10L (timber)",
    coverage: "Approx. 20-40 linear metres of treated soil",
    protectionYears: "2-3 years",
    pcpb: "Yes - PCPB registered",
    description:
      "Undertaker 480EC is an emulsifiable concentrate termiticide and insecticide based on Chlorpyrifos 480 g/L - a broad-spectrum organophosphate with fast knockdown action against subterranean termites, wood-boring beetles, and soil insects. It is Kenya's most accessible PCPB-registered termiticide and is widely used for budget-conscious residential treatments, agricultural buildings, temporary structures, and fence post protection. While Undertaker acts as a repellent barrier rather than a colony-eliminating product, it provides effective immediate protection and is suitable for properties where budget constraints preclude premium non-repellent products.",
    useCases: [
      "Budget residential termite treatment",
      "Agricultural and farm building treatment",
      "Fence post and timber pre-treatment",
      "Temporary and semi-permanent structures",
    ],
    whyChoose:
      "Undertaker 480EC is the most cost-effective entry into PCPB-registered termite protection in Kenya. While it does not offer the colony-elimination Transfer Effect of Fipronil or Imidacloprid products, it provides a fast-acting chemical barrier suitable for lower-risk applications and tight budgets.",
    reviews: [
      {
        name: "Moses Njoroge",
        location: "Murang'a",
        rating: 4,
        date: "March 2025",
        text: "Bought Undertaker 480EC for my farm buildings in Murang'a. Very affordable and easy to apply. Termite activity stopped quickly after treatment. For the price, this product delivers solid results.",
      },
      {
        name: "Lucy Auma",
        location: "Kisii",
        rating: 4,
        date: "January 2025",
        text: "Used on my fence posts and the wooden sections of my store. Mixes well and has a strong smell that dissipates quickly. Good budget option for basic protection. Would buy again.",
      },
      {
        name: "Hassan Abdi",
        location: "Mombasa, Bamburi",
        rating: 3,
        date: "November 2024",
        text: "Works well as a quick fix. I treated the perimeter of a rental property and termite activity reduced significantly. For long-term protection I was advised to upgrade to Imidacloprid products, but for a 2-year budget treatment this does the job.",
      },
    ],
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ShopPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Termite Pesticides - Buy Online in Kenya",
    description:
      "PCPB-registered termiticides available for purchase in Kenya. Termidor 96SC, Premise 200SC, Metro 200SC, Termiguard 200SL, Undertaker 480EC.",
    url: "https://termitescontrolservices.co.ke/shop",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        image: `https://termitescontrolservices.co.ke${p.image}`,
        category: "Termiticide / Pesticide",
        offers: {
          "@type": "Offer",
          priceCurrency: "KES",
          price: p.price,
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Pestraid Kenya" },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: (p.reviews.reduce((a, r) => a + r.rating, 0) / p.reviews.length).toFixed(1),
          reviewCount: p.reviews.length,
          bestRating: 5,
          worstRating: 1,
        },
        review: p.reviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          datePublished: r.date,
          reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
          reviewBody: r.text,
        })),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <span className="text-red font-bold uppercase tracking-widest text-sm mb-3 block">
              Pesticide Shop Kenya
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
              Buy Termite <span className="text-red">Pesticides</span> in Kenya
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              PCPB-registered anti-termite chemicals trusted by professional pest controllers,
              contractors, and homeowners across Kenya. Available from Pestraid Kenya - order
              via WhatsApp for fast delivery to Nairobi and nationwide.
            </p>
            <p className="text-gray-400 text-sm">
              All products are genuine, PCPB-registered, and stored under correct conditions.
              We supply to both professionals and individual property owners.
            </p>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="space-y-20">
            {products.map((product, index) => (
              <article
                key={product.id}
                id={product.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Image panel */}
                  <div className={`relative bg-gray-50 flex items-center justify-center p-8 min-h-72 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10`}>
                      {product.badge}
                    </span>
                    <span className="absolute top-4 right-4 bg-white border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="relative w-full h-64">
                      <Image
                        src={product.image}
                        alt={`${product.name} - buy termiticide Kenya`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <h2 className="font-heading text-2xl md:text-3xl font-black uppercase text-navy mb-1 hover:text-red transition-colors">
                        <Link href={`/shop/${product.id}`}>{product.name}</Link>
                      </h2>
                      <p className="text-sm text-gray-500 mb-4 font-medium">
                        Active Ingredient: {product.activeIngredient} &nbsp;|&nbsp; {product.formulation}
                      </p>

                      <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-4xl font-black text-red font-heading">
                          KES {product.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 text-sm">per unit</span>
                      </div>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                        {[
                          { label: "Dilution", value: product.dilutionRate },
                          { label: "Protection", value: product.protectionYears },
                          { label: "Coverage", value: product.coverage },
                          { label: "PCPB Status", value: product.pcpb, green: true },
                        ].map((spec) => (
                          <div key={spec.label} className="bg-gray-50 rounded-lg p-3">
                            <div className="text-gray-400 text-xs uppercase font-bold mb-1">{spec.label}</div>
                            <div className={`font-semibold text-xs ${spec.green ? "text-green-700" : "text-navy"}`}>
                              {spec.green ? "✓ " : ""}{spec.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{product.description}</p>

                      <ul className="space-y-1.5 mb-6">
                        {product.useCases.map((use) => (
                          <li key={use} className="flex items-start text-sm text-gray-700">
                            <span className="text-red mr-2 mt-0.5 flex-shrink-0">✓</span>
                            {use}
                          </li>
                        ))}
                      </ul>

                      <div className="bg-navy/5 border border-navy/10 rounded-xl p-4 mb-6 text-sm text-gray-700 leading-relaxed">
                        <span className="font-bold text-navy block mb-1">Why choose {product.name}?</span>
                        {product.whyChoose}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`https://wa.me/254710907628?text=Hi%20Pestraid%20Kenya%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(KES%20${product.price.toLocaleString()}).%20Please%20advise%20on%20availability%20and%20delivery.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`order-${product.id}`}
                        className="flex-1 bg-red text-white py-3.5 px-6 rounded-full font-bold uppercase text-sm text-center hover:bg-red/90 transition-colors shadow-md"
                      >
                        Order via WhatsApp
                      </a>
                      <Link
                        href={`/shop/${product.id}`}
                        className="flex-1 border-2 border-navy text-navy py-3.5 px-6 rounded-full font-bold uppercase text-sm text-center hover:bg-navy hover:text-white transition-colors"
                      >
                        View Full Details
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Reviews */}
                <div className="border-t border-gray-100 p-8 lg:p-10 bg-gray-50/50">
                  <h3 className="font-heading text-lg font-bold uppercase text-navy mb-6">
                    Customer Reviews
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {product.reviews.map((review) => (
                      <div key={review.name} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                        <StarRating rating={review.rating} />
                        <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-4">
                          &ldquo;{review.text}&rdquo;
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-400 font-medium border-t border-gray-50 pt-3">
                          <span className="font-bold text-navy">{review.name}</span>
                          <span>{review.location} &middot; {review.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="py-14 bg-navy text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "✅", title: "PCPB Registered", desc: "All products officially registered in Kenya" },
              { icon: "🚚", title: "Fast Delivery", desc: "Nairobi same-day, nationwide 1-3 days" },
              { icon: "💬", title: "Expert Advice", desc: "WhatsApp our technicians before ordering" },
              { icon: "🛡️", title: "Genuine Products", desc: "No counterfeits - stored and handled correctly" },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-heading font-bold uppercase text-sm mb-2">{item.title}</div>
                <div className="text-gray-400 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-3xl font-black uppercase text-navy mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Are these products available for individual homeowners or only for pest control companies?",
                a: "Both. Pestraid Kenya supplies these PCPB-registered termiticides to professional pest control operators, building contractors, and individual property owners. We recommend calling or WhatsApping us first so we can advise on the correct product and dilution rate for your specific application.",
              },
              {
                q: "What is the difference between Termidor 96SC and Premise 200SC?",
                a: "Both are professional non-repellent termiticides with Transfer Effect colony elimination. Termidor 96SC uses Fipronil (96 g/L) and offers up to 10 years of protection. Premise 200SC uses Imidacloprid (200 g/L) and provides 5-7 years of protection at a slightly lower price. For maximum warranty period, choose Termidor. For excellent value with proven colony elimination, choose Premise.",
              },
              {
                q: "Do you deliver outside Nairobi?",
                a: "Yes. We deliver nationwide across Kenya including Mombasa, Kisumu, Nakuru, Eldoret, Thika, Machakos, Nyeri, Kisii, and all major towns. Delivery times vary by location - WhatsApp us on 0710 907 628 for your specific area.",
              },
              {
                q: "Can I get a warranty certificate if I apply the chemical myself?",
                a: "Treatment warranty certificates are issued when treatment is carried out by a licensed, PCPB-certified pest control operator. For DIY applications, we can advise on correct technique and provide product data sheets, but formal warranties are only issued for professionally applied treatments.",
              },
              {
                q: "How do I calculate how much product I need?",
                a: "For post-construction perimeter treatment, measure the total linear metres of exterior foundation walls. For pre-construction treatment, calculate the total slab area in m2. WhatsApp us your measurements and we will calculate the exact quantity and cost for you.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-navy mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related guides */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <Container>
          <h2 className="font-heading text-2xl font-black uppercase text-navy mb-8 text-center">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Termite Treatment Cost in Kenya", href: "/blog/termite-treatment-cost-kenya", desc: "Full 2026 price guide covering all treatment types and property sizes." },
              { title: "Termidor Termite Treatment", href: "/blog/termidor-termite-treatment-kenya", desc: "How Termidor 96SC works and why it is the number one choice in Kenya." },
              { title: "Premise Termite Treatment", href: "/blog/premise-termite-treatment-kenya", desc: "Complete guide to Premise 200SC - how it works, dilution rates, and warranty." },
              { title: "Pre-Construction Treatment", href: "/blog/pre-construction-termite-treatment-kenya", desc: "When and how to apply soil treatment during construction for maximum protection." },
              { title: "Post-Construction Treatment", href: "/blog/post-construction-termite-treatment-kenya", desc: "Protecting existing buildings - trenching, drilling, and injection explained." },
              { title: "Termite Control Services", href: "/services", desc: "Let Pestraid Kenya's licensed technicians handle the full treatment for you." },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-red hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-navy group-hover:text-red transition-colors text-sm uppercase tracking-wide mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-red text-white text-center">
        <Container className="max-w-2xl">
          <h2 className="font-heading text-3xl font-black uppercase mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            WhatsApp our team on <strong>0710 907 628</strong> and we will recommend the
            correct termiticide, quantity, and dilution rate for your property - for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254710907628?text=Hi%20Pestraid%2C%20I%20need%20help%20choosing%20the%20right%20termiticide%20for%20my%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red font-bold uppercase px-8 py-3.5 rounded-full text-sm hover:bg-gray-100 transition-colors shadow-lg"
            >
              WhatsApp Us Now
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold uppercase px-8 py-3.5 rounded-full text-sm hover:bg-white hover:text-red transition-colors"
            >
              Contact Page
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
